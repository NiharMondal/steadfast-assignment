import React from "react";
import { Button } from "../ui/button";
type AvailableSizesProps = {
	selectedSize: string;
	setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
};
export default function AvailableSizes({
	selectedSize,
	setSelectedSize,
}: AvailableSizesProps) {
	const handleSelectSize = (size: string) => {
		setSelectedSize(size);
	};
	return (
		<div className="space-y-1">
			<p>
				Available Size:{" "}
				<span className="font-semibold">{selectedSize}</span>
			</p>

			<div className="flex gap-x-2">
				{["XL", "XS", "S", "M", "L"].map((size, i) => (
					<Button
						onClick={() => handleSelectSize(size)}
						key={i}
						variant={"outline"}
						className={`cursor-pointer ${
							size === selectedSize
								? "border border-secondary"
								: "border"
						}`}
					>
						{size}
					</Button>
				))}
			</div>
		</div>
	);
}
