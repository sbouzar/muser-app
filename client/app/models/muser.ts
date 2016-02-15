export class Muser {

	constructor(
		public id: number,
		public email: string,
		public password: string,
		public confirm: string,
		public age: number,
		public date?: Date
	) {}
}