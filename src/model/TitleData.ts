export class TitleData {
	constructor(
		public title: string = '', 
		public data: any = '') {}

	setTitle(str: string) {
		this.title = str;
	}
}