import { DataList } from '@/model/dataList';
import { Store } from 'pinia';

import PizZipUtils from 'pizzip/utils/index';
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import { saveAs } from 'file-saver';


function getStringMonth(index = 0, bool = false) {
    let arrayMonthCase = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря'
    ];

    let arrayMonthOrigin = [
        'январь',
        'февраль',
        'март',
        'апрель',
        'май',
        'июнь',
        'июль',
        'август',
        'сентябрь',
        'октябрь',
        'ноябрь',
        'декабрь'
    ];

    if (bool) {
        return arrayMonthCase[index];
    }
    else {
        return arrayMonthOrigin[index];
    }
}
function getMonth(str) {
 let monthNumber = str.split('.')[1];
 return monthNumber - 1;
}

function getMonthYearDate(str) {
    let stringMonth = getStringMonth(getMonth(str));
    let year = str.split('.')[2];
    return stringMonth + ' ' + year;
}

function getNowFullFormatDate() {
    let day = new Date().getDate();
    let month = getStringMonth(new Date().getMonth(), true);
    let year = new Date().getFullYear(); //«»
    return '«' + day + '» ' + month + ' ' + year; 
}

function getNowDate() {
    let now =  new Date();
    return now.toLocaleDateString(); 
}

function createString(str) {
    let arrayOfStr = str.split(' ');
    let newStr = arrayOfStr[0] + ' ';
    let i = 1;
    while (i < arrayOfStr.length)
    {
        newStr = newStr + arrayOfStr[i].slice(0, 1) + '.'; 
        i++;
    };
    return newStr;
}

function assignKeyValue(store: Store, key: string, assigneList: DataList): void {
    try {
        store.$state[key].data = assigneList[key];
    }
    catch(e) {
        // игнорируем исключение
    }
}

function loadFile(url: string, callback: (...args) => void) {
    PizZipUtils.getBinaryContent(url, callback);
}

function renderDoc() {
    loadFile(
        // 'https://drive.google.com/uc?export=download&id=1Fx6jkdUmPr9UarQizPaJevdOixUxRYfK',
        'http://192.168.1.150:888/files/TestWord.docx',
        function(error, content) {
            if (error) {
                throw error;
            }
            const zip = new PizZip(content);
            const doc = new Docxtemplater(zip, {
                paragraphLoop: true, 
                linebreaks: true
            });
            doc.setData({
                name: 'Максим',
            });

            try {
                doc.render();
            }
            catch (error) {
                throw error;
            }
            const out = doc.getZip().generate({
                type: "blob",
                mimeType:
                  "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            });
            saveAs(out, 'output.docx');
        }
    );
}

// 1Fx6jkdUmPr9UarQizPaJevdOixUxRYfK
// https://drive.google.com/uc?export=download&id=1Fx6jkdUmPr9UarQizPaJevdOixUxRYfK

export {
    getMonthYearDate, 
    getNowDate, 
    getNowFullFormatDate, 
    createString,
    getStringMonth,
    getMonth,
    assignKeyValue,
    renderDoc
}

