<template>
	<aside class="settings">
		<form class="fixed">

			<div class="fixed__conteiner">
				<v-btn 
					block
					variant="outlined"
					@click.prevent="toPrint"
				>
					Печать
				</v-btn>

				<div class="dropdown">

					<v-autocomplete
						clearable
						label="Счетчик"
						:items="globalStore.counters"
						v-model="globalStore.counter"
						variant="underlined"
					>
					</v-autocomplete>
				</div>
				<div class="dropdown">

					<v-autocomplete
						clearable
						label="Газовый котел"
						:items="globalStore.boilers"
						v-model="globalStore.boiler"
						variant="underlined"
					>
					</v-autocomplete>
				</div>

			</div>

			

			<v-expansion-panels
				variant="accordion">
				<v-expansion-panel>
					<v-expansion-panel-title>
						Данные клиента
					</v-expansion-panel-title>

					<v-expansion-panel-text>
						<v-text-field
							clearable
							v-for="item in personStore.$state" 
							v-model="item.data"
							:label="item.title"
							variant="underlined">
						</v-text-field>
					</v-expansion-panel-text>
				</v-expansion-panel>
				
				<v-expansion-panel>
					<v-expansion-panel-title>
						Данные договора
					</v-expansion-panel-title>

					<v-expansion-panel-text>
						<v-text-field
							clearable
							v-for="item in contractStore.$state"
							v-model="item.data"
							:label="item.title"
							variant="underlined">
						</v-text-field>
					</v-expansion-panel-text>
				</v-expansion-panel>
					
				<v-expansion-panel>
					<v-expansion-panel-title>
						Газопровод
					</v-expansion-panel-title>

					<v-expansion-panel-text>
						<v-text-field
							clearable
							v-for="item in actData"
							v-model="item.data"
							:label="item.title"
							variant="underlined">
						</v-text-field>
					</v-expansion-panel-text>
				</v-expansion-panel>
			</v-expansion-panels>


			<h3>Оборудование</h3>

			<select name="" @change="selectBoiler">
				<option value=""></option>
				<option value="Protherm 24кВт">Protherm 24кВт</option>
				<option value="Protherm 12кВт">Protherm 12кВт</option>
				<option value="Kiturami 24кВт">Kiturami 24кВт</option>
				<option value="Kentansu 24кВт">Kentansu 24кВт</option>
				<option value="Bugatti Verte 24кВт">Bugatti Verte 24кВт</option>
				<option value="Bocsh 24кВт">Bocsh 24кВт</option>
				<option value="Baxi 24кВт">Baxi 24кВт</option>
				<option value="Baxi 31кВт">Baxi 31кВт</option>
				<option value="Navien 16кВт">Navien 16кВт</option>
				<option value="Navien 24кВт">Navien 24кВт</option>
				<option value="Immergas 24кВт">Immergas 24кВт</option>
				<option value="Лемакс 12,5кВт">Лемакс 12,5кВт</option>
				<option value="Лемакс 15,5кВт">Лемакс 15,5кВт</option>
				
			</select>

			<select name="" @change="selectCounter">
				<option value=""></option>
				<option value="Сигнал СГБ-G4">Сигнал СГБ-G4</option>
				<option value="Элехант СГБ-4">Элехант СГБ-4</option>
				<option value="Вектор М4.0 LRG 1">Вектор М4.0 LRG 1</option>
				<option value="Гранд 6ТК">Гранд 6ТК</option>
				<option value="Бетар СГБМ-4">Бетар СГБМ-4</option>
				<option value="Скайметр СГВ-VM-G4">Скайметр СГВ-VM-G4</option>
				<option value="Газдевайс NPM G4">Газдевайс NPM G4</option>
			</select>
		   
			


		</form>   
	</aside>
</template>

<script lang="ts">

import { Act } from '@/model/act.model';
import { DataContract } from '@/model/dataContract';
import { useContractStore } from '@/stores/contract.store';
import { useGlobalStore } from '@/stores/global.store';
import { usePersonStore } from '@/stores/person.store';
import { mapStores } from 'pinia';
import { defineComponent } from 'vue';
import Input from '../Input.vue';

export default defineComponent({
	components: { Input },
	computed: {
		...mapStores(useContractStore, usePersonStore, useGlobalStore),
	},
	props: {
		actData: {
			type: Act,
			require: true
		},
		dataContract: {
			type: DataContract
		},
	},
	emits: ['getContracts', 'selectBoiler', 'selectCounter', 'inputValue',],
	methods: {
	 
		// async getContractsAsync(event) {
		//     let response = await fetch("http://192.168.1.150:888/prod/hs/bot-api/pregasification");
		//     let json;
		//     this.ContractsOut = new Array();
		//     if (response.ok) {
		//         json = await response.json();
		//         this.ContractsOut = json.PreGasificationContracts
		//         console.log(this.ContractsOut);
		//     }
		//     this.$emit('getContracts', this.ContractsOut) 
		// },
		// async getGRPContractsAsync(event) {
		//     let response = await fetch("http://192.168.1.150:888/prod/hs/bot-api/grp/6");
		//     let json;
		//     this.ContractsOut = new Array();
		//     if (response.ok) {
		//         json = await response.json();
		//         this.ContractsOut = json.Contracts;
		//     }
		//     this.$emit('getContracts', this.ContractsOut) 
		// },
		toPrint() {
			//const contractNum = this.dataContract?.contract.contractNumber.data;
			const contractNum = this.contractStore.contractNumber.data
			if (contractNum)
				document.title = contractNum.replace('/','-').replace('-АК',''); 
			window.print();
			document.title = 'document';
		},
		selectBoiler(event) {
			this.$emit('selectBoiler', event.target.value); 
		},
		selectCounter(e) {
			this.$emit('selectCounter', e.target.value); 
		},
		inputValue(e) {
			this.$emit('inputValue', e.target.value); 
		},
	},
	data() {
		return {
			contract: '',
		}
	},
});

</script>


<style lang="less" scoped>

@import '@/style/_var-library.less';


.select {
	width: 300px;
	height: 300px;
}

.settings {
	
	min-width: 25%;
	//background-color: @main-blue-color;
	//color: @light-default-color;

	width: 360px;
	font-family: Arial, Helvetica, sans-serif;
	font-weight: 600;
	font-size: 14px;
	box-shadow: 0 0 0.1cm rgb(0 0 0 / 10%);
	
}

.fixed {
	bottom: 0;
	position: fixed;
	overflow-y: auto;
	height: 90%;

	max-width: 360px;
	min-width: 360px;
	width: 360px;
	
	display: flex;
	flex-direction: column;
	align-items: stretch;


	&__conteiner {
		width: 100%;
		padding: 10px 0 10px 10px;
		padding-right: 10px;
	}
	
	&::-webkit-scrollbar {
		width: 10px;
	}

	&::-webkit-scrollbar-track {
		background: #F5F4F4; 
		border: 1px solid #F5F4F4;    
		border-radius: 20px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #dddddd;    /* цвет бегунка */
		border-radius: 20px;       /* округлось бегунка */
		// border: 3px solid #dddddd;  /* отступ вокруг бегунка */
	}
}

h3 {
	font-variant: normal;
	font-size: 16px;
}

.select {
	width: 100%;
	height: 100%;
}

</style>