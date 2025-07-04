import Products from "@/components/landing/products";
import { getProducts } from "@/lib/products";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function Home() {
	const products = getProducts();
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Products products={products} />
		</Suspense>
	);
}
