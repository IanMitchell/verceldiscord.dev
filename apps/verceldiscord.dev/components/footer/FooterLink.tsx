import type { ReactNode } from "react";

interface FooterLinkProps {
	href: string;
	name: string;
	children: ReactNode;
}

export default function FooterLink({ href, name, children }: FooterLinkProps) {
	return (
		<a href={href} className="text-gray-400 hover:text-gray-500">
			<span className="sr-only">{name}</span>
			{children}
		</a>
	);
}
