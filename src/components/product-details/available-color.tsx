import React from "react";
import { Button } from "../ui/button";
type AvailableColorProps = {
	selectedColor: string;
	setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
};
export default function AvailableColor({
	selectedColor,
	setSelectedColor,
}: AvailableColorProps) {
	const handleSelectColor = (color: string) => {
		setSelectedColor(color);
	};
	return (
		<div className="space-y-1">
			<p>
				Available color:{" "}
				<span className="font-semibold">{selectedColor}</span>
			</p>

			<div className="flex gap-x-2">
				{["Red", "Blue", "Black", "Gray", "White"].map((color, i) => (
					<Button
						onClick={() => handleSelectColor(color)}
						key={i}
						variant={"outline"}
						className={`cursor-pointer ${
							color === selectedColor
								? "border border-secondary"
								: "border"
						}`}
					>
						{color}
					</Button>
				))}
			</div>
		</div>
	);
}
