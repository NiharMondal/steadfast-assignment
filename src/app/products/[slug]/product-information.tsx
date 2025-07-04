"use client";
import AvailableSizes from "@/components/product-details/available-sizes";
import Container from "@/components/shared/container";
import Quantity from "@/components/shared/quantity";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/ui/rating-star";
import { IProductDetails } from "@/types";
import { Box, ChevronDown, Heart, Share2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";

type ProductInformationProps = {
	product: IProductDetails;
};
export default function ProductInformation({
	product,
}: ProductInformationProps) {
	const [selectedSize, setSelectedSize] = useState("XS");
	const [quantity, setQuantity] = useState(1);

	const addToCart = (product: IProductDetails) => {
		const existingCart = JSON.parse(
			window.localStorage.getItem("cart_items") || "[]"
		);

		const newItem = {
			id: product?.id,
			name: product?.name,
			color: "red", // you might want to make this dynamic later
			size: selectedSize,
			quantity: quantity,
			regular_price: product?.regular_price,
			discount_price: product?.discount_price,
			thumbnail: product?.thumbnail,
		};

		const updatedCart = [...existingCart, newItem];

		window.localStorage.setItem("cart_items", JSON.stringify(updatedCart));

		toast.success("Product added to cart");
	};
	return (
		<div className="py-4 bg-white px-3 xl:px-0">
			<Container className="grid grid-cols-1 md:grid-cols-12 gap-10 ">
				<div className="col-span-full md:col-span-6 lg:col-span-4 rounded-md overflow-hidden ">
					<Image
						src={product?.thumbnail || "/images/product-slide.png"}
						width={380}
						height={380}
						alt={product?.name || "product-photo"}
						className=" bg-gray-300 rounded-md w-full h-[300px] md:h-[280px] object-center object-cover"
					/>
					<div className="flex space-x-4 overflow-x-auto mt-5">
						{[...Array(5)].map((_, i) => (
							<Image
								key={i}
								src={"/images/product-slide.png"}
								alt={`Shirt ${i + 1}`}
								width={68}
								height={68}
								className="size-16 object-cover rounded-md border"
							/>
						))}
					</div>
				</div>
				<div className="col-span-full md:col-span-6 lg:col-span-5">
					<div className="space-y-3">
						<p className="font-medium text-xl">{product?.name}</p>
						<div className="flex items-center  justify-between">
							<div className="flex items-center gap-x-2 text-muted">
								<p>{product?.rating_avg || 4.7}</p>
								<StarRating
									readOnly={true}
									value={product?.rating_avg || 5}
								/>
								<div>{product?.rating_count || 2227}</div>
							</div>
							<div className="flex gap-x-5 items-center text-muted">
								<Heart />
								<Share2 />
							</div>
						</div>
						<p className="text-secondary font-semibold text-2xl">
							{" "}
							&#2547; {product?.discount_price}{" "}
							<sup className="line-through text-muted ml-3 text-base">
								{product?.regular_price}
							</sup>
						</p>

						<div className=" flex items-center ">
							<span className="mr-2 text-muted text-sm">
								Promotion
							</span>
							<span className=" font-medium text-white pl-1 pr-5 bg-gradient-to-r from-orange-400 to-orange-600 rounded clip-chevron-inward ">
								Min spend &#2547;500
								<ChevronDown
									size={16}
									className="text-white inline-flex ml-1"
								/>
							</span>
						</div>
					</div>
					<div className="space-y-3">
						<div className="space-y-1">
							<p>
								Available Color:{" "}
								<span className="font-medium">Navy Blue</span>
							</p>

							{[...Array(4)].map((_, i) => (
								<Image
									key={i}
									src={"/images/product-slide.png"}
									alt={`Shirt ${i + 1}`}
									width={56}
									height={56}
									className="size-14 object-cover rounded-md border inline-grid gap-x-3"
								/>
							))}
						</div>
						<AvailableSizes
							selectedSize={selectedSize}
							setSelectedSize={setSelectedSize}
						/>
						<Quantity
							quantity={quantity}
							setQuantity={setQuantity}
						/>
						<Button
							variant={"secondary"}
							size={"lg"}
							className="w-full md:max-w-[400px] cursor-pointer"
							onClick={() => addToCart(product)}
						>
							Add to cart
						</Button>
					</div>
				</div>
				<div className="col-span-full lg:col-span-3 space-y-5">
					<div className="border rounded-2xl p-3 space-y-3 min-w-full">
						<p className="text-muted text-lg">Delivery Options</p>
						<div className="flex gap-x-3">
							<Box className="text-secondary" />
							<div className="text-muted">
								<p className="text-[#334155]">Regular</p>
								<p className="text-muted text-xs">
									Delivery within 2-3 days
								</p>
							</div>
						</div>
						<div className="flex gap-x-3 text-gray-300">
							<Box />
							<div>
								<p>
									Regular{" "}
									<sup className="text-red-400 ml-5 ">
										Not available
									</sup>
								</p>
								<p>Delivery within 24 hours</p>
							</div>
						</div>
					</div>
					<div className="border rounded-2xl p-3 space-y-3">
						<p className="text-muted text-xs">Sold by</p>
						<div className="flex gap-x-3">
							<Image
								src={"/images/p-g-logo.svg"}
								width={40}
								height={40}
								alt="logo"
							/>
							<Image
								src={"/images/fashion-house.svg"}
								width={300}
								height={40}
								alt="logo"
								className="h-10 object-contain object-center"
							/>
						</div>
						<div className="grid grid-cols-3 border-t pt-2 text-xs text-[#475569] gap-x-2">
							<p>
								Ship on time <br />{" "}
								<span className="text-2xl text-[#64748B]">
									100%
								</span>
							</p>
							<p>
								Chat response <br />{" "}
								<span className="text-2xl text-[#64748B]">
									80%
								</span>
							</p>
							<p>
								Shop rating <br />{" "}
								<span className="text-2xl text-[#64748B]">
									99.8%
								</span>
							</p>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}
