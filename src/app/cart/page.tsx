"use client";
import Container from "@/components/shared/container";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import CartItems from "./cart-item";
import useGetCartItem from "@/hooks/useGetCartItem";
import { toast } from "sonner";

export type TCartProduct = {
	id: string;
	name: string;
	color: string;
	size: string;
	discount_price: string;
	regular_price: string;
	quantity: number;
	thumbnail: string;
};
export default function CartPage() {
	const cartItems = useGetCartItem();
	const subTotal = cartItems.reduce(
		(pre, curr) =>
			Number(curr.discount_price) * Number(curr.quantity) + pre,
		0
	);

	const deleteAllItems = () => {
		window.localStorage.removeItem("cart_items");
		toast.success("All items have been removed");
	};
	return (
		<Container className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-10">
			<div className="bg-white rounded-md p-5 col-span-full lg:col-span-2">
				<div className="flex items-center justify-between border-b  pb-5">
					<h3 className="text-3xl font-semibold text-[#0f172a] ">
						My Cart ({cartItems.length})
					</h3>
					<div className="flex items-center gap-x-3">
						<div className="flex items-center gap-x-2">
							<Checkbox
								id="id"
								className="data-[state=checked]:border-secondary data-[state=checked]:bg-secondary"
							/>
							<Label htmlFor="id">Select all</Label>
						</div>
						<Button variant={"ghost"} onClick={deleteAllItems}>
							Clear all
						</Button>
					</div>
				</div>
				<CartItems />
			</div>
			<div>
				<div className="bg-white rounded-md p-5 col-span-full lg:col-span-1 space-y-2">
					<h5 className="font-medium text-2xl">Order Summary</h5>
					<div className="grid grid-cols-2 mt-4">
						<div className="space-y-2 text-sm text-muted">
							<p>Price ({cartItems.length} items)</p>
							<p>Shipping fee</p>
						</div>
						<div className="space-y-2 text-sm text-muted">
							<p>{subTotal}</p>
							<p className="text-[#3B82F6] text-xs">
								To be added
							</p>
						</div>
					</div>
					<form className="space-y-3.5">
						<div className="flex items-center justify-between bg-white rounded h-12 mt-5 ">
							<input
								type="text"
								placeholder="Store/Falcon coupon"
								className="w-full pl-3 h-full rounded-tl rounded-bl outline-0 border p-2"
							/>
							<Button className="rounded-tl-none rounded-bl-none bg-secondary h-full">
								Apply
							</Button>
						</div>
						<div className="flex items-center justify-between border-t pt-2">
							<span>Sub Total</span>
							<span className="text-heading font-bold">
								&#2547; {subTotal}
							</span>
						</div>
						<Button className="w-full" variant={"secondary"}>
							Proceed to checkout
						</Button>
					</form>
				</div>

				<div className="flex items-center gap-x-2 mt-2 px-3 lg:px-0">
					<Checkbox
						id="terms"
						defaultChecked
						className="data-[state=checked]:border-secondary data-[state=checked]:bg-secondary"
					/>
					<Label htmlFor="terms" className="font-onest text-muted">
						I have read and agree to the Terms and Conditions,
						Privacy Policy and Refund and Return Policy
					</Label>
				</div>
			</div>
		</Container>
	);
}
