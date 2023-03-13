import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
	state: () => {
		return {
			documentVariant: DocumentVariant.contractGaz,
			boiler: null,
			counter: null,
			counters: [
				"Сигнал СГБ-G4",
				"Элехант СГБ-4",
				"Вектор М4.0 LRG 1",
				"Гранд 6ТК",
				"Бетар СГБМ-4",
				"Скайметр СГВ-VM-G4",
				"Газдевайс NPM G4",
			],
			boilers: [
				"Protherm 24кВт",
				"Protherm 12кВт",
				"Kiturami 24кВт",
				"Kentansu 24кВт",
				"F.Bugatti 24кВт",
				"Bocsh 24кВт",
				"Baxi 24кВт",
				"Baxi 31кВт",
				"Navien 16кВт",
				"Navien 24кВт",
				"Immergas 24кВт",
				"Лемакс 12,5кВт",
				"Лемакс 15,5кВт",
			]
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