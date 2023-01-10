<template>
    <div class="break"></div>
	<div class="header" >
        <div class="header__condition-name margin-top">
            <b>ДОПОЛНИТЕЛЬНОЕ СОГЛАШЕНИЕ №1</b><br>
			к Договору {{DataContract?.contract.contractNumber.data}} от {{DataContract?.contract.contractData.data}}
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
		<b>Общество с Ограниченной Ответственностью «Сибгаз-Эксплуатация»</b>, именуемое в дальнейшем <b>«Исполнитель»</b>, в лице в лице директора  <b>Осиповой Татьяны Сергеевны</b>, действующей на основании устава, с одной стороны, и <br> 
		<span class="paragraphMargin"></span><b><span class="contract-header__number edit-highlighting" > {{DataContract?.person.fullname.data}} </span></b>, 
		серия <b><span class="edit-highlighting" >{{ DataContract?.person.identityCardSeries.data }}</span></b>
		номер <b><span class="edit-highlighting" >{{ DataContract?.person.identityCardNumber.data }}</span></b>
		дата выдачи <b><span class="edit-highlighting" >{{ DataContract?.person.identityCardDate.data }}</span></b> паспорта, именуемый (-ая) в дальнейшем заявителем, с другой стороны, и<br> 
		<span class="paragraphMargin"></span><b>Общество с ограниченной ответственностью «Газпром газификация»</b>, именуемое в дальнейшем <b>Единым Оператором газификации (ЕОГ)</b> на основании договора № ПД-05-0003/2021 от 07.10.2021 в лице Заместителя генерального директора по строительству и инвестициям ООО «Газпром газораспределение Барнаул» Волоховой Екатерины Валентиновны, действующего на основании доверенности, удостоверенной нотариусом Барнаульского нотариального округа Худяковой Татьяной Петровной, зарегистрированной в реестре № 22/16-н/22-2022-4-746, вместе именуемые сторонами, заключили  настоящее дополнительное соглашение к Договору <span class="edit-highlighting" >{{DataContract?.contract.contractNumber.data}}</span> от <span class="edit-highlighting" >{{DataContract?.contract.contractData.data}}</span> (далее - Договор) о нижеследующем:  
	</p>

	<p class="paragraph margin-top"><span class="paragraphMargin"></span>
		1.	Стороны пришли к соглашению продлить срок действия Договора по <b><span class="edit-highlighting" >{{ DataContract?.contract.contractEnd.data }}</span></b> г.
	</p>

	<p class="paragraph"><span class="paragraphMargin"></span>
		2.	Внести следующие изменения в п. 3 Договора и изложить его в следующей редакции: «Срок выполнения мероприятий по подключению (технологическому присоединению) домовладения (далее - мероприятия по подключению (технологическому присоединению) и пуску газа – <b><span class="edit-highlighting" >{{ DataContract?.contract.contractEnd.data }}</span></b> г.<br>
		<span class="paragraphMargin"></span>Последний день срока, установленного в абзаце первом настоящего пункта, считается днем подключения (технологического присоединения) домовладения. В том случае, если этот день выпадает на выходной или праздничный день, днем подключения (технологического присоединения) считается следующий за ним рабочий день».
	</p>
	<p class="paragraph"><span class="paragraphMargin"></span>
		3.	Остальные условия договора остаются прежними и Стороны подтверждают по ним свои обязательства.
	</p>
	<p class="paragraph"><span class="paragraphMargin"></span>
		4.	Соглашение вступает в силу с даты подписания и действует в течение всего срока действия Договора.
	</p>
	<p class="paragraph"><span class="paragraphMargin"></span>
		5.	Настоящее соглашение составлено в трех экземплярах, обладающих равной юридической силой, по одному для каждой из сторон
	</p>

	<table-details-parties
		:DataContract="DataContract"
		:PersonList="PersonList"
		:ContractInfoList="ContractInfoList"
		:Quantity="3">
	</table-details-parties>

</template>

<script lang="ts">

import { getMonthYearDate, getNowDate, getNowFullFormatDate } from '@/func';
import { Act } from '@/model/Act';
import { DataContract } from '@/model/DataContract'
import { defineComponent, PropType } from 'vue';
import TableDetailsParties from '@/components/TableDetailsParties.vue';

export default defineComponent({
	components: { 
		TableDetailsParties
	},
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