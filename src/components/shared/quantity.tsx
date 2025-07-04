import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import React from "react";
type QuantityProps = {
	quantity: number;
	setQuantity: (quantity: number) => void;
	title?: string;
	className?: string;
};
export default function Quantity({
	quantity,
	setQuantity,
	className,
	title,
}: QuantityProps) {
	const increment = () => {
		setQuantity(quantity + 1);
	};
	const decrement = () => {
		if (quantity === 1) {
			setQuantity(1);
		} else {
			setQuantity(Math.max(1, quantity - 1));
		}
	};
	return (
		<div className={cn(className, "space-y-2")}>
			{title && <p>{title}</p>}

			<div className="border p-1 rounded-full flex items-center justify-between max-w-[250px]">
				<button
					className="rounded-full bg-background p-3 cursor-pointer"
					onClick={decrement}
				>
					<Minus />
				</button>
				<span>{quantity}</span>
				<button
					className="rounded-full bg-background p-3 cursor-pointer"
					onClick={increment}
				>
					<Plus />
				</button>
			</div>
		</div>
	);
}
