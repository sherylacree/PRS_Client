export class Product {
	id: number | undefined = undefined;
	partNbr = "";
	name = "";
	price = "";
	unit = "";
	vendorId : number | undefined;

	get isNew(): boolean {
		return this.id === undefined;
	}

	constructor(initializer?: any) {
		if (!initializer) return;
		if (initializer.id) this.id = initializer.id;
		if (initializer.partNbr) this.partNbr = initializer.partNbr;
		if (initializer.name) this.name = initializer.name;		
		if (initializer.price) this.price = initializer.price;
		if (initializer.unit) this.unit = initializer.unit;
		if (initializer.vendorId) this.vendorId = initializer.vendorId;
	}
}
