export class Vendor {
	id: number | undefined;
	name = "";
	code = "";
	address = "";
	city = "";
	state = "";
	zipCode = "";
	phone = "";
	email = "";

	get isNew(): boolean {
		return this.id === undefined;
	}

	constructor(initializer?: any) {
		if (!initializer) return;
		if (initializer.id) this.id = initializer.id;
		if (initializer.name) this.name = initializer.name;
		if (initializer.code)
			this.code = initializer.code;
		if (initializer.address)
			this.address = initializer.address;
		if (initializer.city) this.city = initializer.city;
		if (initializer.state)
			this.state = initializer.state;
		if (initializer.zipcode)
			this.zipCode = initializer.zipCode;
		if (initializer.phone)
			this.phone = initializer.phone;
		if (initializer.email)
			this.email = initializer.email;
	}
}
