class dataList implements IDataList {
	Pipeline: string;
	contractAddress: string;
	contractEnd: Date;
	contractNumber: string;
	fullname: string;
	id: number;
	identityAddress: string;
	identityCardDate: Date;
	identityCardNumber: string;
	identityCardOrgName: string;
	identityCardSeries: string;
	phone: string;
	title: string;

	constructor(paramsSrting: string) {
		const searchParams = new URLSearchParams(paramsSrting);
		for (let param of searchParams.entries()) {
			try {
				this[param[0]] = param[1];
				console.log(`Параметр - ${param[0]}`);
			} catch (e) {
				console.log(`Параметра "${param[0]}" нет в классе`);
			}
		}
	}
}

export {
	dataList
}