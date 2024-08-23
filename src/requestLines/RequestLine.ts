import { Product } from "../products/Products";
import { Request } from "../requests/Request";

export class RequestLine {
	id: number | undefined;
	requestId: number | undefined;
	quantity = 0;
	productId: number | undefined;

	product: Product | undefined;
	request: Request | undefined;
	// filter: any;

	get isNew(): boolean {
		return this.id === undefined;
	}

	constructor(initializer?: any) {
		if (!initializer) return;
		if (initializer.id) this.id = initializer.id;
		if (initializer.quantity) this.quantity = initializer.quantity;
		if (initializer.productId) this.productId = initializer.productId;
		if (initializer.requestId) this.requestId = initializer.requestId;

		if (initializer.product) this.product = initializer.product;
		if (initializer.request) this.request = initializer.request;
	}
}
