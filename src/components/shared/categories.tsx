import React from "react";
import Container from "./container";
import { Box, Headset, Landmark, Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

export default function Categories() {
	return (
		<section className="h-10 bg-white shadow-2xl px-3 lg:px-0">
			<Container className="h-full flex items-center ">
				<div className="lg:hidden">
					<Sheet>
						<SheetTrigger className="flex items-center gap-x-3 cursor-pointer">
							<Menu className="text-secondary" />
							Categories
						</SheetTrigger>
						<SheetContent side="left" className="p-10">
							<SheetHeader className="sr-only">
								<SheetTitle>Categories</SheetTitle>
							</SheetHeader>
							<ul className="space-y-2">
								<li>Electronics</li>
								<li>Home Appliance</li>
								<li>Mother & Baby</li>
								<li>Automotive</li>
								<li>Sports Gear</li>
							</ul>
							<ul className="space-y-2">
								<li className="text-muted uppercase text-sm flex items-center gap-x-2">
									<Box />
									Track Order
								</li>
								<li className="text-muted uppercase text-sm flex items-center gap-x-2">
									<Headset />
									Help Center
								</li>
								<li className="text-muted uppercase text-sm flex items-center gap-x-2">
									<Landmark className="text-secondary" />
									Sell with us
								</li>
							</ul>
						</SheetContent>
					</Sheet>
				</div>
				<ul className="hidden lg:flex">
					<li className="border-r -ml-3">
						<Button variant={"ghost"}>
							<Menu className="text-secondary" />
							<span>Categories</span>
						</Button>
					</li>
				</ul>

				<div className="hidden lg:flex items-center justify-around lg:pl-20 ">
					<ul className="flex items-center gap-x-5 text-sm">
						<li>Electronics</li>
						<li>Home Appliance</li>
						<li>Mother & Baby</li>
						<li>Automotive</li>
						<li>Sports Gear</li>
					</ul>
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
				</div>
			</Container>
		</section>
	);
}
