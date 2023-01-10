export class DataList implements IDataList {
	pipeline: string = '';
	contractAddress: string = '';
	contractEnd: string = '';
	contractNumber: string = '';
	fullname: string = '';
	id: number = 0;
	identityAddress: string = '';
	identityCardDate: string = '';
	identityCardNumber: string = '';
	identityCardOrgName: string = '';
	identityCardSeries: string = '';
	phone: string = '';
	title: string = '';

	constructor(paramsSrting: string) {
		const searchParams: URLSearchParams = new URLSearchParams(paramsSrting);
		for (let param of searchParams.entries()) {
			this[param[0]] = param[1];
		}
	}
}