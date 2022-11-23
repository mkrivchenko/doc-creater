import { DataList } from './DataList';
import { Person } from './Person';
import { TitleData } from './TitleData';

export class ContractGaz implements IContract {

	person: Person;
	contractNumber: TitleData;
	contractAddress: TitleData;
	contractEnd: TitleData;

	constructor() {
		this.contractNumber = new TitleData('Номер догвоора');
		this.contractAddress = new TitleData('Адрес');
		this.contractEnd = new TitleData('Дата окончания');

		this.person = new Person()
	}
	

	setFromQuery(query: string) {
		const searchData = new DataList(query);

		this.person.fullname.data = searchData.fullname;

		this.contractNumber.data = searchData.contractNumber; 
		this.contractEnd.data = searchData.contractEnd;
		
	}
}
