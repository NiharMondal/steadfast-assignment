import React from "react";
import Container from "./container";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-primary p-5">
			<Container className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 text-white">
				<div>
					<Image
						src={"/logo.svg"}
						height={50}
						width={300}
						alt="logo"
						className="h-[50px] w-full"
					/>
					<p className="mb-3 mt-1">
						Experience our new platform & Enjoy exiting deals and
						offers on your day to day
					</p>

					<div className="space-y-1">
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
					<p className="text-lg font-medium text-muted">About</p>
					<ul>
						<li>Contact Us</li>
						<li>About Us</li>
						<li>Career</li>
						<li>Press</li>
						<li>Cancellation & Return</li>
						<li>Terms of Use</li>
					</ul>
				</div>
				<div>
					<p className="text-lg font-medium text-muted">Help</p>
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
					<p className="text-lg font-medium text-muted">About</p>
					<ul>
						<li>Contact Us</li>
						<li>About Us</li>
						<li>Career</li>
						<li>Press</li>
						<li>Cancellation & Return</li>
						<li>Terms of Use</li>
					</ul>
				</div>
			</Container>
		</footer>
	);
}
