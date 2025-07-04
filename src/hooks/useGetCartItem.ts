import { TCartProduct } from "@/app/cart/page";
import { useEffect, useState } from "react";

export default function useGetCartItem() {
	const [cartItems, setCartItems] = useState<TCartProduct[]>([]);
	useEffect(() => {
		const storedItems = window.localStorage.getItem("cart_items");
		if (storedItems) {
			try {
				const parsedItems: TCartProduct[] = JSON.parse(storedItems);
				setCartItems(parsedItems);
			} catch (error) {
				console.error("Failed to parse cart items", error);
			}
		}
	}, []);
	return cartItems;
}
