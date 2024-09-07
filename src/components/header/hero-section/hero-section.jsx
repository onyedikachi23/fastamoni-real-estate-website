/** @format */

import { Box, Heading, Link as ChakraLink, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function HeroSection() {
	return (
		<Box
			paddingBottom="clamp(5rem, 40%, 12rem)"
			paddingTop="clamp(5rem, 40%, 10rem)"
			paddingX="8"
			bgColor="hsla(0, 0%, 0%, .6)">
			<Heading as="h1" marginBottom="2" color="hero" maxWidth="760px">
				Exceptional Real Estate Projects by Leading Developers
			</Heading>

			<Text
				as="p"
				marginBottom="8"
				fontSize={{
					base: "texts.primary",
					smm: "md",
				}}
				lineHeight="primaryXL"
				letterSpacing="-3%"
				color="hero"
				maxWidth="760px">
				Explore premier real estate developments from top professionals,
				featuring luxurious condos, serene retreats, and cutting-edge
				commercial spaces. Experience the finest craftsmanship,
				innovative designs, and unmatched quality by renowned
				developers.
			</Text>

			<ChakraLink
				variant="outline"
				width="unset"
				height="unset"
				color="white"
				borderRadius="72"
				fontSize="12"
				_hover={{
					bgColor: "blue.100",
					transform: "scale(1.2)",
					fontWeight: "bold",
					border: "none",
				}}
				as={RouterLink}
				to="/projects-page">
				Explore
			</ChakraLink>
		</Box>
	);
}
