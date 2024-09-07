/** @format */

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import EstateProjectsList from "./estate-projects/estate-projects-list";
import { Route, Routes } from "react-router-dom";
import PageComingSoon from "../../page-coming-soon-modal/page-coming-soon-modal";

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
					fontSize={{
						base: "texts.primary",
						smm: "md",
					}}
					color="sectionDescription">
					Discover projects from leading developers in Lagos, offering
					exceptional properties tailored to your lifestyle and
					investment goals.
				</Text>
			</Flex>

			{/* estate projects */}
			<EstateProjectsList />

			<Routes>
				<Route
					path="/projects-page"
					element={<PageComingSoon pageTitle="Projects page" />}
				/>
			</Routes>
		</Flex>
	);
}
