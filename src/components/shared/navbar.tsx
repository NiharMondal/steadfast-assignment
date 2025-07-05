"use client";
import React from "react";
import Container from "./container";
import Image from "next/image";

import { Button } from "../ui/button";
import { Search, ShoppingCart, User } from "lucide-react";
import { Badge } from "../ui/badge";
import Categories from "./categories";
import { Breadcrumb } from "./breadcrumb";
import Link from "next/link";
import useGetCartItem from "@/hooks/useGetCartItem";

export default function Navbar() {
	const cart = useGetCartItem();
	return (
		<nav>
			<div className="bg-primary h-20 py-5 px-5 overflow-hidden">
				<Container className="h-full flex items-center justify-between">
					<Link href={"/"}>
						<Image
							src={"/logo.svg"}
							width={127}
							height={24}
							className="w-[100px] h-6"
							alt="logo"
						/>
					</Link>
					<div className="w-auto lg:w-2xl h-12 flex items-center justify-between bg-white rounded-xl overflow-hidden ">
						<input
							placeholder="Search products here..."
							className=" p-2 outline-none rounded-xl"
						/>
						<Button className="rounded-tl-none rounded-bl-none bg-secondary h-full w-auto lg:w-16 hover:bg-secondary cursor-pointer">
							<Search className="size-auto lg:size-7" />
						</Button>
					</div>

					<div className="flex items-center gap-x-4">
						<div className="relative">
							<Link href={"/cart"}>
								<ShoppingCart className="text-white" />
							</Link>
							<Badge
								variant={"destructive"}
								className="h-5 min-w-5 rounded-full px-1  absolute -top-3 -right-3 text-white"
							>
								{cart.length}
							</Badge>
						</div>
						<User className="text-white" />
					</div>
				</Container>
			</div>

			<Categories />
			<Breadcrumb />
		</nav>
	);
}
