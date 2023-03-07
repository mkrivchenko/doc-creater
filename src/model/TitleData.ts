export class TitleData {
	constructor(
		public title: string = '', 
		public data: string = '') {}

	setTitle(str: string) {
		this.title = str;
	}
}