import { TitleData } from './TitleData';

export class Contract implements IContract {

	contractNumber: TitleData;
	conditionNumber: TitleData;
	contractData: TitleData;
	contractAddress: TitleData;
	contractEnd: TitleData;
	pipeline: TitleData;
	connectPoint?: TitleData;

	
	
	constructor() {
		this.contractNumber = new TitleData('Номер догвоора', '03/21-КЮ');
		this.conditionNumber = new TitleData('Номер ТУ', 'ТУ');
		this.contractData = new TitleData('Дата договора', '31.12.2022');
		this.contractAddress = new TitleData('Адрес', 'Населенный пункт, Улица, Дом');
		this.contractEnd = new TitleData('Дата окончания', '31.12.2023');
		this.pipeline = new TitleData('Газопровод', 'ГРП 11');
		this.connectPoint = new TitleData('Точка подключения', 'Отключающее устройство ду25 на действующем газопроводе среднего давления в районе расположения рассматриваемого жилого дома');

	}
}
