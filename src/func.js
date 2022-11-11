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

export {getMonthYearDate, getNowDate, getNowFullFormatDate, createString}