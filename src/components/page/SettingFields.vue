<template>
	<aside class="settings">
		<form class="fixed">
			<ButtonApp @click.prevent="toPrint">
				Печать
			</ButtonApp>

			<div class="settings">
				<div class="settings__title">

					<div class="settings__header">
						<h3>Данные клиента</h3>
					</div>
					
					<div class="settings__show">
						<span
							class="cut" 
							@click.prevent="globalStore.showPersonInputs = !globalStore.showPersonInputs">    
								<span v-if="globalStore.showPersonInputs == true"><u>свернуть</u></span>
								<span v-if="globalStore.showPersonInputs == false"><u>развернуть</u></span>
						</span>
					</div>
					
				</div>
				
				<div class="settings__inputs">
					<Input
						v-show="globalStore.showPersonInputs == true"
						v-for="item in personStore.$state"
						:item="item"/>
				</div>
			</div>
			
			<div class="settings">
				<div class="settings__title">

					<div class="settings__header">	
						<h3>Данные договора</h3>
					</div>

					<div class="settings__show">
						<span
							class="cut" 
							@click.prevent="globalStore.showContractInputs = !globalStore.showContractInputs">    
								<span v-if="globalStore.showContractInputs == true"><u>свернуть</u></span>
								<span v-if="globalStore.showContractInputs == false"><u>развернуть</u></span>
						</span>
					</div>
				</div>

				<div class="settings__inputs">
					<Input
						v-show="globalStore.showContractInputs == true" 
						v-for="item in contractStore.$state"
						:item="item"/>
				</div>
			</div>

			<div class="settings">
				<div class="settings__title">

					<div class="settings__header">	
						<h3>Газопровод</h3>
					</div>

					<div class="settings__show">
						<span
							class="cut" 
							@click.prevent="globalStore.showPipelineInputs = !globalStore.showPipelineInputs">    
								<span v-if="globalStore.showPipelineInputs == true"><u>свернуть</u></span>
								<span v-if="globalStore.showPipelineInputs == false"><u>развернуть</u></span>
						</span>
					</div>
				</div>
				<div class="settings__inputs">
					<Input 
						v-show="globalStore.showPipelineInputs == true"
						v-for="item in actData"
						:item="item" />
				</div>
			</div>

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


<style lang="less">

@import '@/style/_var-library.less';


.settings {
	
	&__title {
		display: flex;
		align-items: center; 
		justify-content: space-between;
	}

	&__show {
		padding: 0 10px;
		font-size: 12px;
		color: @main-graf-color;
	}

	&__inputs {
		padding: 5px 10px;
	}
}

.cut {
	cursor: pointer;
	
}

.select {
	width: 300px;
	height: 300px;
}

.settings {
	
	min-width: 25%;
	background-color: @main-blue-color;
	color: @light-default-color;

	
   

	font-family: Arial, Helvetica, sans-serif;
	font-weight: 600;
	font-size: 14px;
	
}

.fixed {
	bottom: 0;
	position: fixed;
	overflow-y: auto;
	height: 90%;

	max-width: 330px;
	min-width: 330px;
	width: 330px;
	
	display: flex;
	flex-direction: column;
	align-items: stretch;
	margin: 10px 0 10px 10px;
	padding-right: 10px;
	
	&::-webkit-scrollbar {
		width: 10px;
	}

	&::-webkit-scrollbar-track {
		background: @second-blue-color; 
		border: 1px solid @second-blue-color;    
		border-radius: 20px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: @second-blue-color;    /* цвет бегунка */
		border-radius: 20px;       /* округлось бегунка */
		border: 3px solid @main-yellow-color;  /* отступ вокруг бегунка */
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