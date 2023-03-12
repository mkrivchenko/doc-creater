<template>
    <div class="break"></div>
	<div class="header" >
        <div class="header__condition-name margin-top">
            <b>ДОПОЛНИТЕЛЬНОЕ СОГЛАШЕНИЕ №1</b><br>
			к Договору {{contractStore.contractNumber.data}} от {{contractStore.contractData.data}}
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



</template>

<script setup lang="ts">
import { useContractStore } from '@/stores/contract.store';

const contractStore = useContractStore();
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