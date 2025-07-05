import Products from "@/components/landing/products";
import { getProducts } from "@/lib/products";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function Home() {
	const products = getProducts();
	return (
		<Suspense
			fallback={
				<div className="flex items-center h-20 justify-center">
					Loading...
				</div>
			}
		>
			<Products products={products} />
		</Suspense>
	);
}
