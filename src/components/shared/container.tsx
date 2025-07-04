import { cn } from "@/lib/utils";
import React from "react";
type ContainerProps = {
	children: Readonly<React.ReactNode>;
	className?: string;
};
export default function Container({ children, className }: ContainerProps) {
	return (
		<div
			className={cn(className, "container w-full max-w-[1280px] mx-auto")}
		>
			{children}
		</div>
	);
}
