import { Product } from "../products/Products";
import { Request } from "../requests/Request";

export class RequestLine {
	id: number | undefined = undefined;
	requestId = "";
	quantity = 0;
	productId = "";
	price= 0;
	product: Product | undefined;
	request: Request | undefined
    filter: any;

	get isNew(): boolean {
		return this.id === undefined;
	}

	constructor(initializer?: any) {
		if (!initializer) return;
		if (initializer.id) this.id = initializer.id;
		if (initializer.quantity)
			this.quantity = initializer.quantity;
		if (initializer.product.productId)
			this.productId = initializer.productId;
		if (initializer.request.requestId)
			this.requestId = initializer.requestId;
				
		if (initializer.product.price)
			this.price = initializer.price;
		
	}
}
