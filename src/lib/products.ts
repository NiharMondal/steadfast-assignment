export async function getProducts() {
	try {
		const res = await fetch(
			"http://157.230.240.97:9999/api/v1/shop/products",
			{ cache: "no-store" }
		);
		const products = await res.json();
		return products;
	} catch (error) {
		console.log(error);
		throw new Error("Failed to fetch products");
	}
}
