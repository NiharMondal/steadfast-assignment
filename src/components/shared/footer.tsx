import React from "react";
import Container from "./container";
import Image from "next/image";
import { Headset, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-primary p-5">
			<Container className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 text-white">
				<div className="col-span-full  sm:col-span-2 ">
					<Image
						src={"/logo.svg"}
						height={50}
						width={300}
						alt="logo"
						className="h-[50px]"
					/>
					<p className="mb-3 mt-1">
						Experience our new platform & Enjoy <br /> exiting deals
						and offers on your day to day
					</p>

					<div className="space-y-2">
						<div className="flex items-center gap-x-5">
							<div className="size-8 flex items-center p-1 bg-white rounded-full">
								<MapPin className="text-gray-800" />
							</div>
							<p className="text-sm">
								House #64, Road 13, ASA Center, Uttara,
								Dhaka-1402
							</p>
						</div>
						<div className="flex items-center gap-x-5">
							<div className="size-8 flex items-center p-1 bg-white rounded-full">
								<Phone className="text-gray-800" />
							</div>
							<p className="text-sm">01729-1497201</p>
						</div>
						<div className="flex items-center gap-x-5">
							<div className="size-8 flex items-center p-1 bg-white rounded-full">
								<Mail className="text-gray-800" />
							</div>
							<p className="text-sm">falcon@gmail.com</p>
						</div>
					</div>
				</div>
				<div>
					<p className="text-lg font-medium text-muted mb-3">About</p>
					<ul>
						<li>Contact Us</li>
						<li>About Us</li>
						<li>Career</li>
						<li>Press</li>
						<li>Cancellation & Return</li>
						<li>Terms of Use</li>
					</ul>
				</div>
				<div className="col-span-full sm:col-span-2 lg:col-span-1">
					<p className="text-lg font-medium text-muted mb-3">Help</p>
					<ul>
						<li>Payments</li>
						<li>Shipping</li>
						<li>My Orders</li>
						<li>FAQs</li>
						<li>Terms of Use</li>
						<li>Security</li>
						<li>Privacy</li>
					</ul>
				</div>
				<div>
					<p className="text-lg font-medium text-muted mb-3">
						Need Support?
					</p>
					<ul>
						<li className="flex items-center gap-x-4 border border-white px-3 py-2 rounded">
							<Headset className="text-secondary" />
							<span>10293-22827</span>
						</li>
					</ul>
					<div className="mt-5">
						<p className="text-lg font-medium text-muted mb-3 uppercase">
							download app
						</p>
						<div className="space-y-2">
							<Image
								src={"/images/google.svg"}
								width={100}
								height={20}
								alt="google"
								className="w-auto lg:w-full h-12 lg:h-auto"
							/>
							<Image
								src={"/images/apple.svg"}
								width={100}
								height={20}
								alt="apple"
								className="w-auto lg:w-full h-12 lg:h-auto"
							/>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
}
