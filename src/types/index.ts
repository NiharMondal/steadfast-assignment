export interface IResponse<T> {
	current_page: number;
	data: T;
	last_page: number;
	message: string;
	next_page_url: string;
	total: number;
}
export interface IProduct {
	id: number;
	name: string;
	slug: string;
	regular_price: string;
	discount_price: string;
	is_variant: boolean;
	thumbnail: string;
	rating_avg: number;
	rating_count: number;
	available_stock: number;
	badges: Badge[];
}

export interface Badge {
	id: number;
	name: string;
	type: number;
	type_label: string;
}

export interface IProductDetails {
	id: number;
	name: string;
	category_id: number;
	sku: string;
	barcode: string;
	product_type_id: number;
	sub_category_id: string;
	sub_category_child_id: string;
	brand_id: number;
	slug: string;
	description: string;
	merchant_id: number;
	total_stock_qty: number;
	image: Image;
	is_variant: boolean;
	thumbnail: string;
	rating_avg: number;
	rating_count: number;
	regular_price: string;
	discount_price: string;
}

export interface Image {
	"1": N1;
}

export interface N1 {
	url: string;
}

export interface ProductDetail {
	id: number;
	product_id: number;
	regular_price: string;
	discount_price: string;
}

export interface ICategories {
	id: number;
	name: string;
	slug: string;
	image: string;
	subcategories: Subcategory[];
}

export interface Subcategory {
	id: number;
	name: string;
	slug: string;
	image: string;
	subchilds: Subchild[];
}

export interface Subchild {
	id: number;
	name: string;
	slug: string;
	image: string;
}
