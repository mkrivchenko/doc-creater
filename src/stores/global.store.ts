import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
	state: () => {
		return {
			contractConnectGlobalDate: 2023,
			panel: [0, 1],
			documentVariant: DocumentVariant.contractGaz,
			boiler: null,
			counter: null,
			connectPoint: "Подземный заглушенный газопровод на границе земельного участка ДУ 32",
			counters: [
				"Сигнал СГБ-G4",
				"Элехант СГБ-4",
				"Вектор М4.0 LRG 1",
				"Гранд 6ТК",
				"Бетар СГБМ-4",
				"Скайметр СГВ-VM-G4",
				"Газдевайс NPM G4",
				"БелОмо СГМН-1-1-G6",
			],
			boilers: [
				"Protherm 24кВт",
				"Protherm 12кВт",
				"Kiturami 24кВт",
				"Kentansu 24кВт",
				"F.Bugatti 24кВт",
				"Bocsh 24кВт",
				"Bocsh 28кВт",
				"Baxi 14кВт",
				"Baxi 24кВт",
				"Baxi 31кВт",
				"Navien 16кВт",
				"Navien 24кВт",
				"Immergas 24кВт",
				"Лемакс 12,5кВт",
				"Лемакс 15,5кВт",
			],
			connectPointsList: [
				"Подземный заглушенный газопровод на границе земельного участка ДУ 32",
				"Отключающее устройство ду25 на действующем газопроводе в районе расположения рассматриваемого жилого дома"
			],
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