"use client";
import React, { useState } from "react";
import Container from "../shared/container";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../ui/button";

export default function Description() {
	const [isExpanded, setIsExpanded] = useState(false);
	const handleToggle = () => {
		setIsExpanded((prev) => !prev);
	};
	return (
		<Container>
			<div className="text-muted max-w-5xl w-full rounded bg-white p-5 space-y-3">
				<h4 className="text-heading text-2xl font-medium">
					Description
				</h4>
				<p>
					Just as a book is judged by its cover, the first thing you
					notice when you pick up a modern smartphone is the display.
					Nothing surprising, because advanced technologies allow you
					to practically level the display frames and cutouts for the
					front camera and speaker, leaving no room for bold design
					solutions. And how good that in such realities Apple
					everything is fine with displays.
					<br /> Advanced technologies allow you to practically level
					the display frames and cutouts for the front camera and
					speaker, leaving no room for bold design solutions. And how
					good that in such realities Apple everything
				</p>
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
