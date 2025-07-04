"use client";
import React, { useState } from "react";
import { Star } from "lucide-react"; // or use SVG/Emoji instead

type StarRatingProps = {
	totalStars?: number;
	value?: number;
	onChange?: (rating: number) => void;
	readOnly?: boolean;
};

export const StarRating = ({
	totalStars = 5,
	value = 0,
	onChange,
	readOnly = false,
}: StarRatingProps) => {
	const [hovered, setHovered] = useState<number | null>(null);

	const handleClick = (rating: number) => {
		if (!readOnly && onChange) onChange(rating);
	};

	return (
		<div className="flex gap-1">
			{Array.from({ length: totalStars }).map((_, index) => {
				const ratingValue = index + 1;
				const isFilled = hovered
					? ratingValue <= hovered
					: ratingValue <= value;

				return (
					<button
						key={ratingValue}
						type="button"
						onClick={() => handleClick(ratingValue)}
						onMouseEnter={() => setHovered(ratingValue)}
						onMouseLeave={() => setHovered(null)}
						className="text-yellow-400 transition-colors"
						disabled={readOnly}
					>
						<Star
							size={24}
							fill={isFilled ? "currentColor" : "none"}
							stroke="currentColor"
							strokeWidth={1.5}
							className={
								isFilled ? "text-yellow-400" : "text-gray-400"
							}
						/>
					</button>
				);
			})}
		</div>
	);
};
