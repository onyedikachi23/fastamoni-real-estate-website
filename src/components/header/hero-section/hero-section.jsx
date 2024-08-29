/** @format */

import { Box, Heading, Link as ChakraLink, Text } from "@chakra-ui/react";

export default function HeroSection() {
	return (
		<Box paddingY="12" paddingX="8" bgColor="hsla(0, 0%, 0%, .6)">
			<Heading as="h1" marginBottom="2" color="hero">
				Exceptional Real Estate Projects by Leading Developers
			</Heading>

			<Text
				as="p"
				marginBottom="8"
				fontSize="texts.primary"
				lineHeight="1.6"
				color="hero">
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
					transform: `scale(1.2)`,
				}}>
				Explore
			</ChakraLink>
		</Box>
	);
}