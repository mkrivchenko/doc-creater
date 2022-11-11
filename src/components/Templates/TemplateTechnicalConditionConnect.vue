<template>
    <div class="break"></div>
    <div class="header" >

        <img src="@/assets/logo.jpg" class="logo-img">
        <div class="header__org-name underline">
            <b>ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ  «СИБГАЗ-ЭКСПЛУАТАЦИЯ»</b>	
        </div>

        <div class="header__org-data">
            656049, г. Барнаул, ул. Никитина, 67-206, тел./факс: (3852) 63-17-80, 63-54-23 <br>
            e-mail: sibgaz-exp@yandex.ru<br>
            ИНН 2225140681, КПП 222501001, Р/счет: 40702810602000000114, К/счет: 30101810200000000604<br>
            БИК 040173604 в отделении №8644 Сбербанка России г. Барнаул
        </div>
        
        <div class="header__condition-name margin-top">
            ТЕХНИЧЕСКИЕ УСЛОВИЯ <span class="edit-highlighting"> ТП/{{ContractInfoList[0].content}} </span><br>
			от <span class="edit-highlighting">{{getNowDate()}} г.</span><br>
            на подключение (технологическое присоединение)<br>газоиспользующего оборудования к сети газораспределения

        </div>
    </div>

    <table class="body-table">
        <tr>
            <td class="table__cell-number">
            1.
            </td>
            <td class="underline" colspan="3">
            ООО «Сибгаз-Эксплуатация»    
            </td>
        </tr>
        <tr>
            <td>
            </td>
            <td class="table__cell-discription" colspan="3">
            (наименование газораспределительной организации (исполнителя),выдавшей технические условия)
            </td>
        </tr>
        
        <tr>
            <td class="table__cell-number">
            2.
            </td>
            <td class="underline" colspan="3">
            <span class="edit-highlighting">{{PersonList[0].content}}</span>   
            </td>
        </tr>
        <tr>
            <td>
            </td>
            <td class="table__cell-discription" colspan="3">
            (полное и сокращенное (при наличии) наименование, организационно-правовая форма заявителя - юридического лица; фамилия, имя, отчество заявителя - физического лица (индивидуального предпринимателя)
            </td>
        </tr>

        <tr>
            <td class="table__cell-number">
            3.
            </td>
            <td>
            Объект капитального строительства   
            </td>
            <td class="underline" colspan="2">
            Жилой дом  
            </td>
        </tr>
        <tr>
            <td>
            </td>
            <td>
            </td>
            <td class="table__cell-discription" colspan="2">
            (наименование объекта капитального строительства)
            </td>
        </tr>
        <tr>
            <td class="table__cell-number">
            </td>
            <td>
            расположенный по адресу:   
            </td>
            <td class="underline" colspan="2">
                <span class="edit-highlighting">{{ContractInfoList[1].content}}</span>
            </td>
        </tr>
        <tr>
            <td>
            </td>
            <td>
            </td>
            <td class="table__cell-discription" colspan="2">
            (место нахождения объекта капитального строительства)
            </td>
        </tr>
        <tr>
            <td colspan="4">
                <span class="g-white-block"></span>
            </td>
        </tr>
    </table>

    <table class="body-table">   
        <tr>
            <td class="table__cell-number">
            4.
            </td>
            <td>
            Величина максимального часового расхода газа(мощности) газоиспользующего оборудования
            </td>
            <td class="underline cell">
            5  
            </td>
            <td class="cell">
            куб. метров.
            </td>
        </tr>

    </table>
    
    <table class="body-table">   
        <tr>
            <td class="table__cell-number">
            5.
            </td>
            <td colspan="3">
                Давление газа в точке подключения:
            </td>
        </tr>
        <tr>
            <td class="table__cell-number">
            </td>
            <td>
            максимальное
            </td>
            <td class="underline cell-2">
            0,3  
            </td>
            <td class="cell-2">
            МПа;
            </td>
        </tr>
        <tr>
            <td class="table__cell-number">
            </td>
            <td>
            фактическое (расчетное)
            </td>
            <td class="underline cell-2">
            0,15 
            </td>
            <td class="cell-2">
            МПа.
            </td>
        </tr>
    </table>
    <table class="body-table">
        <tr>
            <td class="table__cell-number">
            6.
            </td>
            <td colspan="2">
            Срок подключения (технологического присоединения) объекта капитального строительства к сети газораспределения
            </td>
            <td  class="cell-2 underline" >
                <span class="edit-highlighting">{{getMonthYearDate(ContractInfoList[2].content)}}</span>
            </td>
        </tr>
        <tr>
            <td colspan="4">
                <span class="g-white-block"></span>
            </td>
        </tr>    
    </table>
    
    <table class="point-table">
        <tr>
            <td class="table__cell-data_rotate-text-270">
                <p>Точка подключения (планируемая)</p>
            </td>
            <td class="table__cell-data_rotate-text-270">
                <p>
                    Срок подключения (технологического присоединения) к сетям газораспределения (рабочих дней) с даты заключения договора о подключении (технологическом присоединении) объектов капитального строительства к сети газораспределения
                </p>  
            </td>   
            <td class="table__cell-data_rotate-text-270">
                <p>
                    Величина максимального расхода газа (мощности) подключаемого газоиспользующего оборудования (куб. метров в час)
                </p>
            </td>   
            <td class="table__cell-data_rotate-text-270">
                <p>
                    Давление газа в точке подключения: максимальное (МПа); фактическое (расчетное) (МПа)
                </p>
            </td>   
            <td class="table__cell-data_align-center">
                <p>
                    Наименование существующей сети газораспределения, к которой осуществляется подключение (место нахождения сети газораспределения, диаметр, материал труб и тип защитного покрытия)
                </p>
            </td>   
        </tr>
        <tr>
            <td class="table__cell-number">
            1.
            </td>
            <td class="table__cell-data_align-center">
                <span class="edit-highlighting">{{getMonthYearDate(ContractInfoList[2].content)}}</span>
            </td>   
            <td class="table__cell-data_align-center">
            5
            </td>   
            <td class="table__cell-data_align-center">
            0,3;0,15
            </td>   
            <td>
            Строящаяся газораспределительная сеть объекта<br>
            <span class="edit-highlighting">{{ContractInfoList[3].content}} </span>
            </td>   
        </tr>
    </table>
 

    <!-- 7. -->
    <table class="body-table">
        <tr>
            <td colspan="4">
                <span class="g-white-block"></span>
            </td>
        </tr>
        <tr>
            <td class="table__cell-number">
            7.
            </td>
            <td>
            Точка подключения (планируемая)
            </td>
            <td class="underline" colspan="2">
                Подземный заглушенный газопровод на границе земельного участка ДУ 32     
            </td>   
        </tr>
        <tr>
            <td colspan="4">
                <span class="g-white-block"></span>
            </td>
        </tr>   
    </table>

    <!-- 8. -->
    <table class="body-table">
        <tr>
            <td class="table__cell-number">
            8.
            </td>
            <td colspan="3">
				Обязательства по подготовке сети газопотребления и к размещению газоиспользующего оборудования:
            </td>
        </tr>
        <tr>
            <td class="table__cell-marker">
            -
            </td>
            <td colspan="3">
				выполнить по проектной документации в соответствии с действующими нормами; 
			</td>
        </tr>
        <tr>
            <td class="table__cell-marker">
            -
            </td>
            <td colspan="3">
				проект предъявить для согласования; 
			</td>
        </tr>   
        <tr>
            <td class="table__cell-marker">
            -
            </td>
            <td colspan="3">
				по готовности предъявить объект для мониторинга;
			</td>
        </tr>   
        <tr>
            <td colspan="4">
                <span class="g-white-block"></span>
            </td>
        </tr>  
    </table>
    
    <!-- 9. -->
    <table class="body-table">
        <tr>
            <td class="table__cell-number">
            9.
            </td>
            <td colspan="3">
                Исполнитель осуществляет:
            </td>
        </tr>
        <tr>
            <td class="table__cell-marker">
            -
            </td>
            <td colspan="3">
				проводит мониторинг готовности объекта заявителя с выдачей соответствующих документов;
			</td>
        </tr>
		<tr>
            <td colspan="4">
                <span class="g-white-block"></span>
            </td>
        </tr>
    </table>

    <!-- 11.1 -->
    <!-- <table class="body-table">       
        <tr>
            <td class="table__cell-marker">
            </td>
            <td>
                диаметром
            </td>
            <td class="cell-6">
                Определить при проектировании
            </td>
            <td class="cell-5"> 
                мм
            </td>
        </tr>
        <tr>
            <td class="table__cell-marker">
            </td>
            <td>
                протяженностью
            </td>
            <td class="cell-6">
                до 30
            </td>
            <td class="cell-5">
                м
            </td>
        </tr>
        <tr>
            <td class="table__cell-marker">
            </td>
            <td>
                Материалом труб:
            </td>
            <td class="cell-6">
                Полиэтилен
            </td>
            <td>
                
            </td>
        </tr>
        <tr>
            <td class="table__cell-marker">
            </td>
            <td>
                Максимальным рабочим давлением
            </td>
            <td class="cell-6">
                0,15
            </td>
            <td class="cell-5">
                МПа  
            </td>
        </tr>
        <tr>
            <td class="table__cell-marker">
            </td>
            <td>
                тип прокладки:
            </td>
            <td class="cell-6">
                Подземный
            </td>
            <td>
                 
            </td>
        </tr>
    </table> -->

    <!-- 11.2 -->
    <!-- <table class="body-table"> 
        <tr>
            <td class="table__cell-marker">
            </td>
            <td colspan="3">
                по адресу: <span class="edit-highlighting">{{ContractInfoList[1].content}}</span>
            </td>
        </tr>
        <tr>
            <td class="table__cell-marker">
                -
            </td>
            <td>
                проектирование и строительство пункта редуцирования газа;
            </td>
            <td class="cell-5" colspan="2">
            Нет
            </td>
        </tr>
        <tr>
            <td class="table__cell-marker">
                -
            </td>
            <td>
                Проектирование и строительство отключающего устройства (указывается место расположения отключающего устройства);
            </td>
            <td class="cell-5" colspan="2" >
                На границе земельного участка
            </td>
        </tr>
        <tr>
            <td class="table__cell-marker">
                -
            </td>
            <td>
                Проектирование и строительство (реконструкция) станции катодной защиты;
            </td>
            <td class="cell-5" colspan="2">
                Нет
            </td>
        </tr>
        <tr>
            <td class="table__cell-marker">
                -
            </td>
            <td>
                получение разрешения на строительство газопроводов и определение охранных зон газопроводов на земельных участках, принадлежащих иным лицам.
            </td>
            <td class="cell-5" colspan="2">
                Нет
            </td>
        </tr>
        <tr>
            <td colspan="4">
                <span class="g-white-block"></span>
            </td>
        </tr>  
    </table> -->

    <!-- 12 -->
    <!-- <table class="body-table">
        <tr>
            <td class="table__cell-number">
            12.
            </td>
            <td colspan="3">
                Заявитель осуществляет (выбирается необходимое):
            </td>
        </tr>
        <tr>
            <td class="table__cell-marker">
            -
            </td>
            <td>
                Предоставление схемы расположения сети газопотребления (с указанием длины, диаметра и материала трубы), а также размещение подключаемого газоиспользующего оборудования;
            </td>
            <td class="cell-5" colspan="2">
                Да
            </td>
        </tr>
        <tr>
            <td class="table__cell-marker">
                -
            </td>
            <td>
                строительство(реконструкцию) сети газопотребления от точки подключения до газоиспользующего оборудования по адресу:<br> <span class="edit-highlighting">{{ContractInfoList[1].content}}</span>
            </td>
            <td class="cell-5" colspan="2">
                Да
            </td>
        </tr>
        <tr>
            <td class="table__cell-marker">
                -
            </td>
            <td>
                проектирование и строительство пункта редуцирования газа;
            </td>
            <td class="cell-5" colspan="2">
                Нет
            </td>
        </tr>
        <tr>
            <td class="table__cell-marker">
                -
            </td>
            <td>
                Обеспечение подключаемого объекта капитального строительства газоиспользующим оборудованием и приборами учета газа, которые соответствуют обязательным требованиям, установленным законодательством Российской Федерации о техническом регулировании.
            </td>
            <td class="cell-5" colspan="2">
                Да
            </td>
        </tr>
        <tr>
            <td class="table__cell-marker">
                -
            </td>
            <td>
                получение разрешения на строительство газопроводов и определение охранных зон газопроводов на земельных участках, принадлежащих иным лицам.
            </td>
            <td class="cell-5" colspan="2">
                Нет
            </td>
        </tr>
        <tr>
            <td colspan="4">
                <span class="g-white-block"></span>
            </td>
        </tr>  
    </table> -->

    <!-- 13 -->
    <table class="body-table">
        <tr>
            <td class="table__cell-number">
            10.
            </td>
            <td colspan="3">
				Сведения об осуществлении подключения (технологического присоединения) через сети газораспределения и (или) газопотребления, принадлежащие основному абоненту
			</td>
        </tr>
        <tr>
            <td class="table__cell-number">
            </td>
            <td class="underline table__cell-data_align-center"  colspan="3">
				ООО «СибГазСтрой»
            </td>
        </tr>
        <tr>
            <td colspan="4">
                <span class="g-white-block"></span>
            </td>
        </tr> 
        
    </table>

    <!-- 14 -->
    <!-- <table class="body-table">
        <tr>
            <td class="table__cell-number">
            14.
            </td>
            <td colspan="3">
                Срок действия настоящих технических условий составляет 3 года со дня заключения договора о подключении (технологическом присоединении) объекта капитального строительства к сети газораспределения.
            </td>
        </tr>
    </table> -->

    <table class="parties-table margin-top">
        <tr>
            <td>
            	Технический директор
            </td>
            <td>
                _____________________________
            </td>
			<td>
				Г.Ф. Гилев
			</td>
        </tr>
        <tr>
			<td></td>
			<td>(подпись)</td>
			<td></td>
        </tr>
    </table>


</template>

<script>

import {getMonthYearDate, getNowDate, getNowFullFormatDate} from '@/func'

export default {
    props: {
        PersonList: {
            type: Array,
            require: true
        },
        ContractInfoList: {
            type: Array,
            require: true
        }
    },
    methods:{
        getMonthYearDate,
        getNowDate,
        getNowFullFormatDate
    }
}

</script>


<style scoped lang="less">
* {
    font-size: 10pt;
}


.logo-img {
    width: 56.4mm; 
    height: 28.2mm;
    margin-bottom: 10pt;
}

.margin-bottom {
    margin-bottom: 10pt;
}

.flex {
    display: flex;
    justify-content: flex-end;
}

.fifty-persent {
    position: relative;
    width: 50%;
    text-align: center;
}

.header {
    // margin-top: 24pt;
    text-align: center;

    &__org-name {
        font-family: Arial, Helvetica, sans-serif;
    }

    &__org-data {
        padding-top: 1pt;
    }

    &__condition-number {
        text-align: left;
        padding: 20pt 0pt;
    }

    &__condition-name {
        font-weight: 700;
        padding-bottom: 10pt;
    }
}

.table {

    &__cell-number {
    padding: 0 0 0 5pt;
    width: 25pt;
    vertical-align: top;
    }

    &__cell-marker {
        padding: 0 5pt 0 0pt;
        width: 25pt;
        vertical-align: top;
        text-align: right;    
    }

    &__cell-discription {
        text-align: center;
    }

    &__cell-data {

        &_white-text {
            color: #fff   
        }

        &_rotate-text-270 {

            height: 6.5cm;
        
            p {
               writing-mode: vertical-rl;
               transform: rotate(180deg);
               text-align: center;
               margin: 0 5pt;
            }
        }

        &_align-center {
            text-align: center;
            p {
                margin: 0pt 5pt;
            }
        }

    }

}

.body-table {
    display: table;
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse; 

    td {
        padding-bottom: 1pt;
    }

	

}

.point-table {
    display: table;
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
	

    td {
        vertical-align: middle;
        border: 1pt solid #000;
        padding: 2pt;
    }
}

.parties-table {
	display: table;
	width: 60%;

	tr:nth-of-type(2) > td {
		text-align: center;
	}
}

.margin-top {
    margin-top: 20pt;
}

.cell {
    width: 2cm;
    text-align: center;
    vertical-align: bottom;
}

.cell-2 {
    width: 5cm;
    text-align: left;
    vertical-align: bottom;
}

.cell-3 {
    width: 6cm;
}

.cell-4 {
    width: 0.5cm;
}

.cell-5 {
    width: 17%;
    text-align: center;
}

.cell-6 {
    text-align: right;
}

.cell-7 {
    width: 6cm;
    text-align: center;
}

td {
    //border: 1pt dotted rgb(171, 171, 171);
    margin: 0;
    padding: 0;
    vertical-align: top;
}

.underline {
    border-bottom: 1pt solid #000;
}



</style>