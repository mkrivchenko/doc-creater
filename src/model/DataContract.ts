import { DataList } from './dataList'
import { Contract } from './contract.model';
import { Person } from './person.model';

export class DataContract implements IDataContract {
	person: Person;
	contract: Contract;

	constructor() {
		this.person = new Person;
		this.contract = new Contract;
	}

	setFromQuery(query: string) {
		const searchData = new DataList(query);

		this.person.fullname.data = searchData.fullname;
		this.person.identityCardSeries.data = searchData.identityCardSeries;
		this.person.identityCardNumber.data = searchData.identityCardNumber;
		this.person.identityCardDate.data = searchData.identityCardDate;
		this.person.identityCardOrgName.data = searchData.identityCardOrgName;
		this.person.identityAddress.data = searchData.identityAddress;
		this.person.phone.data = searchData.phone
	
		this.contract.contractAddress.data = searchData.contractAddress;
		this.contract.pipeline.data = searchData.pipeline;
		this.contract.contractNumber.data = searchData.contractNumber; 
		//this.contract.contractEnd.data = searchData.contractEnd;
		this.contract.contractData.data = searchData.contractData;
		
	}
}