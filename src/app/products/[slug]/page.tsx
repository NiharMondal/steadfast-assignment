import Description from "@/components/product-details/description";
import Specification from "@/components/product-details/specification";

import { IProductDetails, IResponse } from "@/types";

import React from "react";
import ProductInformation from "./product-information";

async function getProductBySlug(
	slug: string
): Promise<IResponse<IProductDetails>> {
	try {
		const res = await fetch(
			`http://157.230.240.97:9999/api/v1/shop/product/${slug}`
		);
		const products = await res.json();
		return products;
	} catch (error) {
		console.log(error);
		throw new Error("Failed to fetch products");
	}
}
export default async function ProductDetails({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	const product = await getProductBySlug(slug);

	return (
		<section className="space-y-5">
			{product?.data && <ProductInformation product={product?.data} />}
			<Description />
			<Specification />
		</section>
	);
}
