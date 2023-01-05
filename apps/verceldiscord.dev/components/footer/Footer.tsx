import type { ReactNode } from "react";

export default function Footer({ children }: { children: ReactNode }) {
	return (
		<footer className="bg-white">
			<div className="mx-auto max-w-7xl py-12 px-6 md:flex md:items-center md:justify-between lg:px-8">
				<div className="flex justify-center space-x-6 md:order-2">
					{children}
				</div>
				<div className="mt-8 md:order-1 md:mt-0">
					<p className="text-center text-base text-gray-400">
						&copy; {new Date().getFullYear()} Ian Mitchell.
					</p>
				</div>
			</div>
		</footer>
	);
}
