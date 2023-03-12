<template>
	<NavMenu />
	<main class="main">
		<SettingFields 
			:dataContract="dataContract"
			:actData="actData"

			@select-boiler="selectBoiler"
			@select-counter="selectCounter"
		/>
	   
		<section class="leyout__view-field">
			<aside>
			</aside>
			<A4 
				:dataContract="dataContract"
				:actData="actData"

				 
				:boiler="boiler"
				:counter="counter"
			/>
			<aside>
			</aside>    
		</section>
		
	</main>
</template>

<script lang="ts">

import A4 from '@/components/page/A4.vue';
import NavMenu from '@/components/page/NavMenu.vue';
import SettingFields from '@/components/page/SettingFields.vue';

import { defineComponent } from 'vue';
import { DataContract } from '@/model/dataContract';
import { Act } from '@/model/act.model';
import { mapStores } from 'pinia';
import { useContractStore } from '@/stores/contract.store';
import { usePersonStore } from '@/stores/person.store';
import { Contract } from '@/model/contract.model';
import { DataList } from '@/model/dataList';
import { assignKeyValue } from '@/common/func';

export default defineComponent ({
	components: { 
		SettingFields, 
		A4, 
		NavMenu 
	},  
	data() {
		return {
			dataContract: new DataContract(),
			actData: new Act(),
		   
			boiler: '',
			counter: '',
			countList: [],
		}
	},
	computed: {
		...mapStores(useContractStore, usePersonStore),
	},
	methods: {
		// selectItem(item: number) {
		//     item -= 1;
		//     const countMetadataItems = 2;
		//     const countContractItems = 4;
		//     let dataArray = new Array();


		//     for (let key in this.ContractsList[item]) {
		//         dataArray.push(this.ContractsList[item][key]);
		//     }

		//     dataArray.splice(0, countMetadataItems);

		//     let i = 0;
		//     while (i < dataArray.length - countContractItems) {
		//         this.PersonList[i].data = dataArray[i];
		//         i++;
		//     } 

		//     let j = 0;
		//     while (i < dataArray.length) {
		//         this.ContractInfoList[j].data = dataArray[i]; 
		//         i++;
		//         j++;
		//     } 

		//     console.log(item);
		// },
		// getContracts(array) {
		//     this.ContractsList = new Array;

		//     array.forEach(elem => {
		//        this.ContractsList.push(elem);   
		//     });
			
		// },
		// getVariant(variant: string) {
		//     this.variant = variant;
		//     console.log(this.variant); 
		// },
		selectBoiler(boiler: string) {
			this.boiler = boiler;
		},
		selectCounter(counter: string) {
			this.counter = counter;
		},
	},
	mounted() {

		const searchData = document.location.search;
				
		if (searchData != '') {
			const dataList = new DataList(searchData);

			for (let key in dataList) {
				assignKeyValue(this.contractStore, key, dataList);
				assignKeyValue(this.personStore, key, dataList);
			
			}			
		}
	


		//// Старая реализация
		// if (searchData != '') {
			// const contract = new DataContract();
			// contract.setFromQuery(searchData);

		//     for (let key in contract) {
		//         console.log(key);
		//         console.log(contract[key]);  
		//     }

		//     this.dataContract = contract;
		// }

	}
});


</script>

<style>

.leyout__view-field {
	display: grid;
	grid-template-columns: 5% auto 5%;
}

.g-white-block {
	display: block;
	height: 12pt;
}

body {
	margin: 0;
	/* padding: 10mm 10mm 10mm 20mm;    */
}

h2 {
	padding: 0;
	margin: 0;
	text-align: center;
	font-size: inherit;
}

p {
	margin: 0;
}

.main {
	display: grid;
	grid-template-columns: 350px auto;
}


.A4 {
	font-family: 'Times New Roman', Times, serif;
	background: white;
	width: 21cm;
	display: block;
	margin: 0 auto;
	padding: 10px 25px;
	margin-bottom: 0.5cm;
	box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
	overflow-y: scroll;
	box-sizing: border-box;
	font-size: 10pt;
	overflow-y: hidden;
	padding: 10mm 10mm 10mm 20mm;
}

A4 .white-text {
	color: #fff;
}

.mark {
	font-size: 9pt;
	text-align: right;
}

.contract-header {
	padding: 24pt 24pt 24pt 18pt;
	text-align: center;
}

.table {
	display: table;
	border-spacing: 0pt 10pt;
	width: 100%;
	row-gap: 10pt;
}

.paragraph {
	font-size: inherit;
	text-align: justify;
}

.margin-top {
	margin-top: 16pt;
}

p.margin-top:first-of-type {
	margin-top: 10pt;
}

.paragraphMargin {
	margin-left: 1.4cm;
}

</style>