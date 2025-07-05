import { ICategories, IResponse } from "@/types";

export async function getCategories(): Promise<IResponse<ICategories[]>> {
	try {
		const res = await fetch(
			"http://157.230.240.97:9999/api/v1/categories",
			{ cache: "no-store" }
		);
		const categories = await res.json();
		return categories;
	} catch (error) {
		console.log(error);
		throw new Error("Failed to fetch categories");
	}
}
