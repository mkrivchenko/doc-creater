import { TitleData } from './titleData';

export class Person implements IPerson{
	fullname: TitleData;
	identityCardSeries: TitleData;
	identityCardNumber: TitleData;
	identityCardDate: TitleData;
	identityCardOrgName: TitleData;
	identityAddress: TitleData;
	phone: TitleData;

	constructor() {
		this.fullname = new TitleData('ФИО');
		this.identityCardNumber = new TitleData('Номер паспорта');
		this.identityCardSeries = new TitleData('Серия паспорта');
		this.identityCardDate = new TitleData('Дата выдачи');
		this.identityCardOrgName = new TitleData('Кем выдан');
		this.identityAddress = new TitleData('Прописка');
		this.phone = new TitleData('Телефон');	
	}
}