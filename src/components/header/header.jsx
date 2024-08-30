/** @format */

import { Box } from "@chakra-ui/react";
import NavBar from "./nav-links/nav-links";
import HeroSection from "./hero-section/hero-section";

export default function Header() {
	return (
		<Box
			as="header"
			bgImage="url('/assets/images/hero-img-mansion-banner.png')
			"
			bgSize="cover"
			bgColor="hsla(0,0%,0%,0.6)"
			paddingTop="10%">
			{/* NavBar section */}
			<NavBar />

			{/* Hero section */}
			<HeroSection />
		</Box>
	);
}
