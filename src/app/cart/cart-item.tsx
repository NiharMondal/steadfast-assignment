"use client";
import Quantity from "@/components/shared/quantity";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ChevronRight, Gift, Trash } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { TCartProduct } from "./page";

export default function CartItems() {
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

	const handleDeleteFromCart = (id: string) => {
		const storedCart = window.localStorage.getItem("cart_items");

		if (!storedCart) return;

		try {
			const cartItems = JSON.parse(storedCart) as TCartProduct[];
			const updatedCart = cartItems.filter((item) => item.id !== id);

			window.localStorage.setItem(
				"cart_items",
				JSON.stringify(updatedCart)
			);
		} catch (error) {
			console.error(
				"Failed to parse cart_items from localStorage:",
				error
			);
		}
	};

	const handleQuantityChange = (id: string, newQuantity: number) => {
		const updatedItems = cartItems.map((item) =>
			item.id === id ? { ...item, quantity: newQuantity } : item
		);

		setCartItems(updatedItems);
		window.localStorage.setItem("cart_items", JSON.stringify(updatedItems));
	};
	if (!cartItems.length) return <p> Your cart is empty</p>;
	return (
		<div className="space-y-3 py-5">
			<div className="text-muted flex items-center gap-x-3 bg-background py-2 pl-3 rounded">
				<Checkbox />
				<Label>
					{" "}
					<Gift />
					BD Fashion House
				</Label>
				<ChevronRight className="size-5" />
			</div>
			<div className="space-y-5">
				{cartItems.map((item) => (
					<div key={item.name} className="flex gap-x-3">
						<Checkbox />
						<div className="grid grid-cols-1 md:grid-cols-6 gap-2">
							<div className="col-span-1">
								<Image
									src={item.thumbnail}
									width={100}
									height={100}
									alt={item.name}
									className="object-center object-cover border rounded size-[100px]"
								/>
							</div>
							<div className="col-span-5 space-y-3">
								<div className="grid grid-cols-7 gap-2">
									<p className="col-span-5 text-heading font-medium">
										{item.name}
									</p>
									<p className="col-span-2 text-right font-semibold">
										&#2547; {item.discount_price}{" "}
										<sup className="line-through font-normal text-muted">
											&#2547; {item.regular_price}
										</sup>
									</p>
								</div>
								<p className="text-muted">
									Color: {item.color}; Size:{item.size}
								</p>

								<div className="flex items-center gap-x-3 w-full">
									<Quantity
										className="min-w-[180px]"
										quantity={item.quantity}
										setQuantity={(q) =>
											handleQuantityChange(item.id, q)
										}
									/>
									<Trash
										className="hover:text-destructive cursor-pointer"
										onClick={() =>
											handleDeleteFromCart(item.id)
										}
									/>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
