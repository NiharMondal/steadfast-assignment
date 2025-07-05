"use client";
import React, { useEffect, useState } from "react";
import Container from "./container";
import { Box, Menu } from "lucide-react";
import { Button } from "../ui/button";

import Link from "next/link";
import { getCategories } from "@/lib/categories";
import { ICategories } from "@/types";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Categories() {
	return (
		<section className="bg-white shadow-2xl px-3 lg:px-0">
			{/**for mobile and tablet */}
			<div className="lg:hidden">
				<Sheet>
					<SheetTrigger asChild>
						<Button variant={"ghost"}>
							<Menu className="text-secondary" />
							<span>Categories</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="left" className="bg-primary text-white">
						<SheetHeader>
							<SheetTitle className="sr-only">
								Are you absolutely sure?
							</SheetTitle>

							<Link href={"/"}>
								<Image
									src={"/logo.svg"}
									width={127}
									height={24}
									className="w-[100px] h-6"
									alt="logo"
								/>
							</Link>
						</SheetHeader>
						<CategoryList isMobile={true} />
					</SheetContent>
				</Sheet>
			</div>
			{/**for large laptop */}
			<Container className="hidden lg:flex items-center">
				<ul>
					<li className="border-r -ml-3">
						<Button variant={"ghost"}>
							<Menu className="text-secondary" />
							<span>Categories</span>
						</Button>
					</li>
				</ul>

				<CategoryList />

				<ul className="flex items-center gap-x-2 uppercase ">
					<Button
						variant={"ghost"}
						className="text-muted uppercase text-sm"
					>
						<Box />
						Track Order
					</Button>
					<Button
						variant={"ghost"}
						className="text-muted uppercase text-sm"
					>
						<Box />
						Help Center
					</Button>
					<Button
						variant={"ghost"}
						className="text-muted uppercase text-sm"
					>
						<Box />
						Sell with us
					</Button>
				</ul>
			</Container>
		</section>
	);
}

const CategoryList = ({ isMobile }: { isMobile?: boolean }) => {
	const [categories, setCategories] = useState<ICategories[]>([]);

	useEffect(() => {
		getCategories().then((data) => setCategories(data?.data));
	}, []);
	return (
		<ul className={cn(isMobile ? "pl-3 space-y-3 " : "flex gap-6 p-4")}>
			{categories.slice(0, 4).map((category) => (
				<li key={category.id} className="relative group">
					<span
						className={cn(
							"cursor-pointer font-medium text-muted text-sm text-nowrap",
							isMobile ? " text-white" : "text-muted"
						)}
					>
						{category.name}
					</span>

					{/* Subcategories */}
					<ul className="absolute top-full left-0 hidden group-hover:block bg-white border shadow-lg min-w-[200px] p-2 z-50">
						{category.subcategories.map((sub) => (
							<li key={sub.id} className="relative group/sub">
								<div className="flex">
									<span className="block text-sm cursor-pointer px-2 py-1 hover:bg-gray-100 w-full text-muted-foreground hover:text-muted">
										{sub.name}
									</span>
								</div>

								{sub.subchilds?.length > 0 && (
									<div
										className="absolute top-0 left-full z-50 hidden group-hover/sub:block bg-white border shadow-lg min-w-[180px] p-2"
										onMouseEnter={(e) =>
											e.currentTarget.classList.add(
												"block"
											)
										}
										onMouseLeave={(e) =>
											e.currentTarget.classList.remove(
												"block"
											)
										}
									>
										<ul>
											{sub.subchilds.map((child) => (
												<li key={child.id}>
													{/* <Link
																	href={`/products/${category.slug}/${sub.slug}/${child.slug}`}
																	className="block px-2 py-1 text-sm text-muted-foreground hover:text-primary hover:bg-gray-100"
																>
																	{child.name}
																</Link> */}
													<Link
														href="#"
														className="block px-2 py-1 text-sm text-muted-foreground hover:text-primary hover:bg-gray-100"
													>
														{child.name}
													</Link>
												</li>
											))}
										</ul>
									</div>
								)}
							</li>
						))}
					</ul>
				</li>
			))}
		</ul>
	);
};
