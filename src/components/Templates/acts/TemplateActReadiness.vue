<template>
    <div class="break"></div>
    <div class="mark">
		Приложение №2 к договору<br>
		<span class="edit-highlighting">{{DataContract?.contract.contractNumber.data}} </span>
		от <span class="edit-highlighting">{{DataContract?.contract.contractData.data}} г.</span>
	</div>
	<div class="header" >
        <div class="header__condition-name margin-top">
            <b>АКТ</b><br>
			о готовности сетей газопотребления и газоиспользующего<br> 
			оборудования к подключению
        </div>
    </div>
	<table class="table">
		<tr>
			<td>
				г. Барнаул
			</td>
			<td align="right">
				<span class="edit-highlighting"> «_____» ______________ 202__ г.</span><br>
			</td>
		</tr>
	</table>

	<p class="paragraph margin-top"><span class="paragraphMargin"></span>
		<b>Общество с Ограниченной Ответственностью «Сибгаз-Эксплуатация»</b>, именуемое в дальнейшем <b>«Исполнитель»</b>, в лице представителя технического директора <b>Гилева Геннадия Филипповича</b>, действующего на основании доверенности N 01 от «09» января 2020г., с одной стороны, и <b><span class="contract-header__number edit-highlighting" > {{DataContract?.person.fullname.data}} </span></b>, именуемый в дальнейшем <b>«Заявитель»</b>, с другой стороны, в дальнейшем именуемые сторонами, оформили и подписали настоящий акт о том, что в соответствии с договором <span class="edit-highlighting">№ {{DataContract?.contract.contractNumber.data}} </span> от <span class="edit-highlighting">
            {{DataContract?.contract.contractData.data}} г.
            <!-- {{getNowDate()}} г. -->
        </span>
	</p>

	<p class="paragraph margin-top"><span class="paragraphMargin"></span>
		Исполнителю представлены:
	</p>

	<p class="paragraph"><span class="paragraphMargin"></span>
		<b>1.&ensp;Исполнительно-техническая документация объекта капитального строительства:</b><br>
		Наименование  объекта в соответствии с проектной документацией с указанием шифра проекта: <b>«Газоснабжение жилого дома <span class="edit-highlighting">{{DataContract?.contract.contractAddress.data}}</span>». Шифр <span class="edit-highlighting">{{actData?.projectCode.data}}</span></b><br> Наименование проектной организации <b><span class="edit-highlighting">{{actData?.projectOrg.data}}</span></b>.
	</p>
	<p class="paragraph"><span class="paragraphMargin"></span>
		<b>2.&ensp;Сеть газопотребления, построенная на территории земельного участка Заявителя по адресу: 
		<span class="edit-highlighting">{{DataContract?.contract.contractAddress.data}}</span>»</b>, включая газопровод 
		<span class="edit-highlighting">
            среднего
            <!-- низкого -->
        </span> давления 
		<span class="edit-highlighting">подземный/надземный</span>, диаметр 
		<span class="edit-highlighting">32/25 мм</span>, давление 
		<span class="edit-highlighting">
            0,15 МПа
            <!-- 0,004 МПа -->
        </span> длину 
		<span class="edit-highlighting">{{actData?.undergrounPipeLength.data}} м</span>; 
		<span class="edit-highlighting">низкого</span> давления 
		<span class="edit-highlighting">надземный</span> диаметр 
		<span class="edit-highlighting">20 мм</span>, давление  
		<span class="edit-highlighting">
            <!-- 0,004 МПа -->
            0,0024 МПа
        </span> длину 
		<span class="edit-highlighting">{{actData?.outwardPipeLength.data}} м</span>.
	</p>

    <table class="point-table margin-top">
        <tr>
            <td class="table__cell-data_align-center" rowspan="2">
                <p>Порядковый номер</p>
            </td>
            <td class="table__cell-data_align-center" rowspan="2">
                <p>
                   Наименование тип, <br>
				   марка оборудования
                </p>  
            </td>   
            <td class="table__cell-data_align-center" rowspan="2">
                <p>
					Количество (штук)
                </p>
            </td>   
            <td class="table__cell-data_align-center" colspan="2">
                <p>
					Объем газопотребления
                </p>
            </td>   

        </tr>
		<tr>
            <td class="table__cell-data_align-center">
                <p>
					куб. метров в час
                </p>
            </td>   
            <td class="table__cell-data_align-center">
                <p>
                    тыс. куб. метров в год
                </p>
            </td>   
        </tr>

        <tr>
            <td class="table__cell-number table__cell-data_align-center">
            1.
            </td>
            <td class="table__cell-data_align-center">
                {{Boiler}}
            </td>   
            <td class="table__cell-data_align-center">
                1
            </td>   
            <td class="table__cell-data_align-center">
            </td>   
            <td class="table__cell-data_align-center">
            </td>   
        </tr>
		<tr>
            <td class="table__cell-number table__cell-data_align-center">
            2.
            </td>
            <td class="table__cell-data_align-center">
                <!-- {{Counter}} -->
                {{ globalStore.counter }}
            </td>   
            <td class="table__cell-data_align-center">
                1
            </td>   
            <td class="table__cell-data_align-center">
            </td>   
            <td class="table__cell-data_align-center">
            </td>   
        </tr>
		<tr>
            <td class="table__cell-number table__cell-data_align-center">
            3.
            </td>
            <td class="table__cell-data_align-center">
            </td>   
            <td class="table__cell-data_align-center">
            </td>   
            <td class="table__cell-data_align-center">
            </td>   
            <td class="table__cell-data_align-center">
            </td>   
        </tr>
    </table>
 
	<p class="paragraph margin-top"><span class="paragraphMargin"></span>
		<b>Заключение:</b>
	</p>
	<p class="paragraph"><span class="paragraphMargin"></span>
		1.&ensp;Техническая документация соответствует техническим условиям  <span class="edit-highlighting"> {{DataContract?.contract.conditionNumber.data}} </span>
		от <span class="edit-highlighting">
            {{DataContract?.contract.contractData.data}} г.
            <!-- {{getNowDate()}} г. -->
        </span>
	</p>
	<p class="paragraph"><span class="paragraphMargin"></span>
		2.&ensp;Строительно-монтажные работы выполнены в полном объеме в соответствии с проектом заявителя.
	</p>
	<p class="paragraph"><span class="paragraphMargin"></span>
		3.&ensp;Монтаж газоиспользующего оборудования выполнен в полном объеме в соответствии с проектом заявителя.
	</p>
	<p class="paragraph"><span class="paragraphMargin"></span>
		4.&ensp;Сеть газопотребления и газоиспользующее оборудование к подключению готовы.
	</p>


    <table class="parties-table margin-top">
        <tr>
            <td>
            	<b>Исполнитель</b>
            </td>
            <td>
                <b>Заявитель</b>
            </td>
        </tr>
        <tr>
			<td><b>ООО «Сибгаз-Эксплуатация»</b></td>
			<td><b>Гражданин РФ</b></td>
        </tr>
		<tr>
			<td>___________________/ Г.Ф.Гилев</td>
			<td>___________________/____________/</td>
        </tr>
    </table>


</template>

<script lang="ts">

import { getMonthYearDate, getNowDate, getNowFullFormatDate } from '@/common/func';
import { Act } from '@/model/act.model';
import { DataContract } from '@/model/dataContract'
import { useGlobalStore } from '@/stores/global.store';
import { mapStores } from 'pinia';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    props: {
        DataContract: {
            type: Object as PropType<DataContract>,
        },
        actData: {
            type: Object as PropType<Act>,
        },
        PersonList: {
            type: Array,
        },
        ContractInfoList: {
            type: Array,
        },
        Boiler: {
            type: String,
            default: () => {
                ""
            },
        },
        Counter: {
            type: String,
            default: () => {
                ""
            },
        },
    },
    computed: {
        ...mapStores(useGlobalStore),
    },
    methods:{
        getMonthYearDate,
        getNowDate,
        getNowFullFormatDate
    }
});

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
	width: 100%;
	text-align: center;
	table-layout: fixed;
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