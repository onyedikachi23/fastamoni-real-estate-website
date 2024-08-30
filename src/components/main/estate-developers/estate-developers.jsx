/** @format */

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import EstateProjectsList from "./estate-projects/estate-projects-list";

export default function RealEstateDevs() {
	return (
		<Flex direction="column" gap={4}>
			{/* section heading and description */}
			<Flex gap="2" direction="column">
				<Heading as="h2" fontWeight="500" color="sectionHeading">
					Top Real Estate Developers
				</Heading>
				<Text
					as="p"
					fontSize="texts.primary"
					color="sectionDescription">
					Discover projects from leading developers in Lagos, offering
					exceptional properties tailored to your lifestyle and
					investment goals.
				</Text>
			</Flex>

			{/* estate projects */}
			<EstateProjectsList />
		</Flex>
	);
}
