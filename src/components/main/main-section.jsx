/** @format */

import { Box, Flex } from "@chakra-ui/react";
import PropertiesSearch from "./properties-locations-search/properties-search";
import FeaturedProjects from "./featured-projects/featured-projects";
import RealEstateDevs from "./estate-developers/estate-developers";
import TestimonialsSection from "./testimonials-section/testimonials-section";

export default function MainSection() {
	return (
		<Flex as="main" direction="column" gap="8" paddingY="12" paddingX="8">
			{/* properties at locations search */}
			<PropertiesSearch />

			{/* featured projects section */}
			<FeaturedProjects />

			{/* Real Estate Devs Section */}
			<RealEstateDevs />

			{/* clients testiomoials section */}
			<TestimonialsSection />
		</Flex>
	);
}
