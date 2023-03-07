<template>
    <div class="break"></div>
    <div class="flex">
        <div class="mark fifty-persent">
            Приложение N 1 к договору о подключении(технологическом присоединении)газоиспользующего оборудования к сети газораспределения в рамках догазификации<br>
            от <span class="edit-highlighting">
                <!-- {{ getNowFullFormatDate() }} г.  -->
                «{{ DataContract?.contract.contractData.data.split('.')[0].replace(/^0/,'') }}» {{ getStringMonth(getMonth(DataContract?.contract.contractData.data), true) }} {{ DataContract?.contract.contractData.data.split('.')[2] }} г.
                № {{DataContract?.contract.contractNumber.data}}
            </span>
        </div>
    </div>
    <div class="header">
        <div class="header__org-name underline">
            <b>ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «СИБГАЗ-ЭКСПЛУАТАЦИЯ»</b>	
        </div>

        <div class="header__org-data">
            656049, г. Барнаул, ул. Никитина, 67-206, тел./факс: (3852) 63-17-80, <br>
            e-mail: sibgaz-exp@yandex.ru, ОГРН 1132225012765,<br>
            ИНН 2225140681 , КПП 222501001
        </div>

        <div class="header__condition-number">
            <span class="edit-highlighting">№ {{DataContract?.contract.contractNumber.data.replace('АК', 'ТУ')}} от {{DataContract?.contract.contractData.data}} г. </span>
        </div>

        <div class="header__condition-name">
            ТЕХНИЧЕСКИЕ УСЛОВИЯ<br>
            на подключение (технологическое присоединение) газоиспользующего оборудования к сети газораспределения в рамках догазификации

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
            <span class="edit-highlighting">{{DataContract?.person.fullname.data}}</span>   
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
                <span class="edit-highlighting">{{DataContract?.contract.contractAddress.data}}</span>
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
            <!-- 0,3   -->
            0,004
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
            <!-- 0,15 -->
            0,004 
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
                <span class="edit-highlighting">{{getMonthYearDate(DataContract?.contract.contractEnd.data)}}</span>
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
            7.
            </td>
            <td class="cell-3">
            Информация о газопроводе в точке подключения
            </td>
            <td class="underline">
            <!-- полиэтилен, подземный, Ду 32  Р=0,15 МПа -->
            <!-- полиэтилен, подземный, Ду 32  Р=0,004 МПа -->
            сталь, надземный, Ду 25  P=0,004 МПа
            </td>
        </tr>
        <tr>
            <td class="table__cell-number">
            </td>
            <td>
            </td>
            <td class="table__cell-discription">
            (диаметр, материал труб, способ прокладки, тип защитного покрытия, максимальное рабочее давление, фактическое (расчетное) давление, наличие электрохимической защиты, протяженность)
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
            Величина максимального часового расхода газа (мощности) газоиспользующего оборудования по каждой из точек подключения (если их несколько):
            </td>   
        </tr>
    </table>
    <!-- 8.1 -->
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
                <span class="edit-highlighting">{{getMonthYearDate(DataContract?.contract.contractEnd.data)}}</span>
            </td>   
            <td class="table__cell-data_align-center">
            5
            </td>   
            <td class="table__cell-data_align-center">
            <!-- 0,3;0,15 -->
            0,004;<br> 0,004
            </td>   
            <td>
            Строящаяся газораспределительная сеть объекта<br>
            <span class="edit-highlighting">{{DataContract?.contract.pipeline.data}} </span>
            </td>   
        </tr>
    </table>
 

    <!-- 9. -->
    <table class="body-table">
        <tr>
            <td colspan="4">
                <span class="g-white-block"></span>
            </td>
        </tr>
        <tr>
            <td class="table__cell-number">
            9.
            </td>
            <td>
            Точка подключения (планируемая)
            </td>
            <td class="underline" colspan="2">
                <!-- Подземный заглушенный газопровод на границе земельного участка ДУ 32 -->
                Отключающее устройство ду25 на действующем газопроводе низкого давления в районе расположения рассматриваемого жилого дома
            </td>   
        </tr>
        <tr>
            <td colspan="4">
                <span class="g-white-block"></span>
            </td>
        </tr>   
    </table>

    <!-- 10. -->
    <table class="body-table">
        <tr>
            <td class="table__cell-number">
            10.
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
            Сеть газопотребления с подключенным газоиспользующим оборудованием должна пройти контрольную опрессовку воздухом с избыточным давлением, равным 5кПа, втечение5минут(падение давления воздуха за время проведения опрессовки недолжно превышать 200 Па);
            </td>
        </tr>
        <tr>
            <td class="table__cell-marker">
            -
            </td>
            <td colspan="3">
            Газоиспользующее оборудование необходимо установить в помещении с вентиляцией, оборудованным обособленными дымоходами и вентиляционными каналами;
            </td>
        </tr>   
        <tr>
            <td class="table__cell-marker">
            -
            </td>
            <td colspan="3">
            Применение газоиспользующего оборудования, технических устройств и материалов, имеющих сертификаты соответствия, паспорт изготовителя;
            </td>
        </tr>   
        <tr>
            <td class="table__cell-marker">
            -
            </td>
            <td colspan="3">
            Наличие акта первичного обследования дымоходов и вентканалов, выполненного специализированной организацией;
            </td>
        </tr>   
        <tr>
            <td class="table__cell-marker">
            -
            </td>
            <td colspan="3">
            Обеспечение объекта капитального строительства приборами учета газа, которые соответствуют обязательным требованиям, установленным законодательством Российской Федерации о техническом регулировании.
            </td>
        </tr>   
        <tr>
            <td colspan="4">
                <span class="g-white-block"></span>
            </td>
        </tr>  
    </table>
    
    <!-- 11 -->
    <table class="body-table">
        <tr>
            <td class="table__cell-number">
            11.
            </td>
            <td colspan="3">
                Исполнитель осуществляет (выбирается необходимое):
            </td>
        </tr>
        <tr>
            <td class="table__cell-marker">
            -
            </td>
            <td>
            Проектирование и строительство (реконструкция) газопровода от существующей сети газораспределения (указывается газопровод, от которого осуществляется подключение, а также его характеристики:
            </td>
            <td class="cell-5" colspan="2">
                Да
            </td>
        </tr>
    </table>

    <!-- 11.1 -->
    <table class="body-table">       
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
                <!-- Полиэтилен -->
                Сталь
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
                <!-- 0,15 -->
                0,004
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
                <!-- Подземный -->
                Надземный
            </td>
            <td>
                 
            </td>
        </tr>
    </table>

    <!-- 11.2 -->
    <table class="body-table"> 
        <tr>
            <td class="table__cell-marker">
            </td>
            <td colspan="3">
                по адресу: <span class="edit-highlighting">{{DataContract?.contract.contractAddress.data}}</span>
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
    </table>

    <!-- 12 -->
    <table class="body-table">
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
                строительство(реконструкцию) сети газопотребления от точки подключения до газоиспользующего оборудования по адресу:<br> <span class="edit-highlighting">{{DataContract?.contract.contractAddress.data}}</span>
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
    </table>

    <!-- 13 -->
    <table class="body-table">
        <tr>
            <td class="table__cell-number">
            13.
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
    <table class="body-table">
        <tr>
            <td class="table__cell-number">
            14.
            </td>
            <td colspan="3">
                Срок действия настоящих технических условий составляет 3 года со дня заключения договора о подключении (технологическом присоединении) объекта капитального строительства к сети газораспределения.
            </td>
        </tr>
    </table>

    <table class="body-table margin-top">
        <tr>
            <td>
                Исполнитель
            </td>
            <td colspan="3">
                Директор Осипова Т.С.
            </td>
        </tr>
        <tr>
            <td class="cell-7">
                (подпись)
            </td>
            <td>
                (должность, фамилия, имя, отчество исполнителя)
            </td>
        </tr>
    </table>


</template>

<script lang="ts">

import {getMonthYearDate, getNowDate, getNowFullFormatDate, getStringMonth, getMonth} from '@/func'
import { DataContract } from '@/model/DataContract';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    props: {
        DataContract: {
            type: Object as PropType<DataContract>,
        },
        PersonList: {
            type: Array,
        },
        ContractInfoList: {
            type: Array,
        }
    },
    methods:{
        getMonthYearDate,
        getNowDate,
        getNowFullFormatDate,
        getStringMonth,
        getMonth,
    }
});

</script>


<style scoped lang="less">
* {
    font-size: 10pt;
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
    margin-top: 24pt;
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