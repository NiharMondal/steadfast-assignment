import Products from "@/components/landing/products";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import Categories from "@/components/shared/categories";
import { getCategories } from "@/lib/categories";
import { getProducts } from "@/lib/products";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function Home() {
	const categories = getCategories();
	const products = getProducts();
	return (
		<div>
			<Suspense fallback={<div className="pl-32 py-2">Loading...</div>}>
				<Categories categories={categories} />
			</Suspense>
			<Breadcrumb />
			<Suspense
				fallback={
					<div className="flex items-center h-20 justify-center">
						Loading...
					</div>
				}
			>
				<Products products={products} />
			</Suspense>
		</div>
	);
}
