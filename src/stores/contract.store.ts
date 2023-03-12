import { Contract } from '@/model/contract.model';
import { defineStore } from 'pinia';

export const useContractStore = defineStore('contract', {
	state: () => {
		return new Contract();
	},
	actions: {
		changeNumber(number: string) {
			this.contractNumber.data = number;
		}
	}
});