<template>
	<aside class="settings">
		<form class="fixed">

			<div class="fixed__conteiner">
				<v-btn 
					class="custom-buttom"
					block
					variant="outlined"
					@click.prevent="renderDoc"
				>
					Печать
				</v-btn>
				
				<v-btn 
					class="custom-buttom"
					block
					variant="outlined"
					@click.prevent="toPrint"
				>
					Печать
				</v-btn>

				<v-autocomplete
					clearable
					label="Дата формирования договора"
					:items="[2022, 2023]"
					v-model="globalStore.contractConnectGlobalDate"
					variant="underlined"
				>
				</v-autocomplete>


			</div>

			<v-expansion-panels
				variant="accordion"
				v-model="globalStore.panel"
				multiple>
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
						<v-autocomplete
							clearable
							label="Точка подключения"
							:items="globalStore.connectPointsList"
							v-model="globalStore.connectPoint"
							variant="underlined"
							>
						</v-autocomplete>
					</v-expansion-panel-text>
				</v-expansion-panel>
					
				<v-expansion-panel>
					<v-expansion-panel-title>
						Газопровод
					</v-expansion-panel-title>

					<v-expansion-panel-text>
						<v-text-field
							clearable
							v-for="item in pipelineStore.$state"
							v-model="item.data"
							:label="item.title"
							variant="underlined">
						</v-text-field>
					</v-expansion-panel-text>
				</v-expansion-panel>


				<v-expansion-panel>
					<v-expansion-panel-title>
						Оборудование
					</v-expansion-panel-title>

					<v-expansion-panel-text>
						<div class="dropdown">
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
							
							<v-autocomplete
								clearable
								label="Счетчик"
								:items="globalStore.counters"
								v-model="globalStore.counter"
								variant="underlined"
							>
							</v-autocomplete>
							</div>
							
					</v-expansion-panel-text>
				</v-expansion-panel>

			</v-expansion-panels>

		</form>   
	</aside>
</template>

<script lang="ts">

import { mapStores } from 'pinia';
import { useContractStore } from '@/stores/contract.store';
import { useGlobalStore } from '@/stores/global.store';
import { usePersonStore } from '@/stores/person.store';
import { usePipelineStore } from '@/stores/pipeline.store';

import { renderDoc } from '@/common/func';

import { defineComponent } from 'vue';

export default defineComponent({
	computed: {
		...mapStores(useContractStore, usePersonStore, usePipelineStore, useGlobalStore),
	},
	methods: {
		renderDoc,
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
			const contractNum = this.contractStore.contractNumber.data
			if (contractNum)
				document.title = contractNum.replace('/','-').replace('-АК',''); 
			window.print();
			document.title = 'document';
		},
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