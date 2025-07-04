import Link from "next/link";

import {
	Breadcrumb as BrCrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Container from "./container";

export function Breadcrumb() {
	return (
		<div className="py-3 bg-gray-200 px-3 lg:px-0">
			<Container>
				<BrCrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link href="/">Home</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>

						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link href="/">Tops</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link href="/">T-Shirt</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
					</BreadcrumbList>
				</BrCrumb>
			</Container>
		</div>
	);
}
