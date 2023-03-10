import { TitleData } from './titleData';

export class Act {
	projectOrg: TitleData;
	projectCode: TitleData;

	undergrounPipeLength: TitleData;
	undergrounPipePressureSTR: TitleData;
	undergrounPipePressureNUM: TitleData;

	outwardPipeLength: TitleData;
	outwardPipePressureSTR: TitleData;
	outwardPipePressureNUM: TitleData;

	diameter: TitleData;

	constructor() {
		this.projectOrg = new TitleData('Проектная организация', 'ООО «Сибгазстрой»');
		this.projectCode = new TitleData('Шифр');
		
		this.undergrounPipeLength = new TitleData('Длина газопровода подземного');
		this.undergrounPipePressureSTR = new TitleData('Давление газопровода подземного (строка)', 'среднее');
		this.undergrounPipePressureNUM = new TitleData('Давление газопровода подземного (число)', '0,15');

		this.outwardPipeLength = new TitleData('Длина газопровода наружного');
		this.outwardPipePressureSTR = new TitleData('Давление газопровода наружного (строка)', 'низкое');
		this.outwardPipePressureNUM = new TitleData('Давление газопровода наружного (число)', '0,0024');

		this.diameter = new TitleData('Диаметр в точке подключения', '25')

	}
}