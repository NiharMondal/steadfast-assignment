"use client";
import React, { useState } from "react";
import Container from "../shared/container";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../ui/button";

export default function Specification() {
	const [isExpanded, setIsExpanded] = useState(false);
	const handleToggle = () => {
		setIsExpanded((prev) => !prev);
	};
	return (
		<Container>
			<div className="text-muted max-w-5xl w-full rounded bg-white p-5 space-y-3">
				<h4 className="text-heading text-2xl font-medium">
					Specification
				</h4>
				<h4 className="text-heading text-xl font-medium">
					Specification Sharp FP-J30E-B Air Purifier
				</h4>
				<ul className="list-disc pl-5">
					<li>GMP Cosmetic Good Manufacturing Practice</li>
					<li>Cruelty Free</li>
					<li>No Animal Testing</li>
					<li>Zenpia Global Standard</li>
					<li>Comply with Global Standard</li>
				</ul>

				{isExpanded && (
					<div>
						<p>
							Just as a book is judged by its cover, the first
							thing you notice when you pick up a modern
							smartphone is the display. Nothing surprising,
							because advanced technologies allow you to
							practically level the display frames and cutouts for
							the front camera and speaker, leaving no room for
							bold design solutions. And how good that in such
							realities Apple everything is fine with displays.
							<br /> Advanced technologies allow you to
							practically level the display frames and cutouts for
							the front camera and speaker, leaving no room for
							bold design solutions. And how good that in such
							realities Apple everything
						</p>
					</div>
				)}
				<div className="flex items-center justify-center">
					<Button
						variant={"ghost"}
						className="hover:bg-white cursor-pointer text-black"
						onClick={handleToggle}
					>
						{isExpanded ? "See Less" : "See More"}
						{isExpanded ? <ChevronUp /> : <ChevronDown />}
					</Button>
				</div>
			</div>
		</Container>
	);
}
