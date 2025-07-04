"use client";
import { IProduct, IResponse } from "@/types";
import Image from "next/image";
import React, { use } from "react";
import Container from "../shared/container";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Products({
	products,
}: {
	products: Promise<IResponse<IProduct[]>>;
}) {
	const allProducts = use(products);

	return (
		<Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-10 pb-20">
			{allProducts?.data.length &&
				allProducts.data.map((product) => (
					<Card key={product.id} className="relative">
						<CardContent>
							<Image
								src={product.thumbnail}
								width={200}
								height={200}
								alt={product.name}
								style={{
									height: "200px",
									width: "100%",
									borderRadius: "8px",
								}}
							/>
							<div className="flex items-center justify-between mt-2">
								<div>
									<p className="text-muted">
										Regular Price <br />{" "}
										<span
											className={
												product.discount_price
													? "line-through"
													: ""
											}
										>
											{product?.regular_price}
										</span>
									</p>
								</div>
								{product?.discount_price && (
									<div className="text-secondary">
										&#2547; {product.discount_price}
									</div>
								)}
							</div>
						</CardContent>

						<CardHeader>
							<CardTitle>
								<Link
									href={`/products/${product.slug}`}
									className="hover:underline"
								>
									{product.name}
								</Link>
							</CardTitle>
						</CardHeader>

						<CardFooter>
							<Link href={`/products/${product.slug}`}>
								<Button className=" absolute bottom-2 left-2 right-2 cursor-pointer">
									Vew Details
								</Button>
							</Link>
						</CardFooter>
					</Card>
				))}
		</Container>
	);
}
