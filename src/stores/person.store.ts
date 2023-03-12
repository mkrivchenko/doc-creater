import { Person } from '@/model/person.model';
import { defineStore } from 'pinia';

export const usePersonStore = defineStore('person', {
	state: () => {
		return new Person();
	}
})