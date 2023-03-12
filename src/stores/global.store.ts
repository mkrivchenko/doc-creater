import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
	state: () => {
		return {
			documentVariant: DocumentVariant.contractGaz,
			boiler: '',
			counter: '',
			showPersonInputs: true,
			showContractInputs: true,
			showPipelineInputs: true,
		};
	},
	actions: {
		setDocumentVatiant(variant: DocumentVariant) {
			this.documentVariant = variant;
		}
	}
});

export enum DocumentVariant {
	contractGaz = 'gaz',
	contractConnect = 'connect',
	act = 'act',
	claim = 'claim',
	additional = 'additional',
}