import { Fragment, ReactNode } from "react";
import Footer from "../components/footer/Footer";
import FooterLink from "../components/footer/FooterLink";
import GitHub from "../components/icons/GitHub";
import Discord from "../components/icons/Discord";
import Twitter from "../components/icons/Twitter";
import "../styles/tailwind.css";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<Fragment>
			{children}

			<Footer>
				<FooterLink name="Twitter" href="https://twitter.com/ianmitchel1">
					<Twitter className="h-6 w-6" ariaHidden />
				</FooterLink>
				<FooterLink name="Discord" href="https://discord.gg/ian">
					<Discord className="h-6 w-6" ariaHidden />
				</FooterLink>
				<FooterLink
					name="GitHub"
					href="https://github.com/ianmitchell/verceldiscord.dev"
				>
					<GitHub className="h-6 w-6" ariaHidden />
				</FooterLink>
			</Footer>
		</Fragment>
	);
}
