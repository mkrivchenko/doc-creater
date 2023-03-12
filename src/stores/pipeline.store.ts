import { Act } from '@/model/act.model';
import { defineStore } from 'pinia';

export const usePipelineStore = defineStore('pipeline', {
	state: () => {
		const pipelineChar = new Act;
		return pipelineChar;
	},
	actions: {
		changePreset(preset: string) {
			
		}
	}
})