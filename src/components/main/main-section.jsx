/** @format */

import { Flex } from "@chakra-ui/react";
import RealEstateDevs from "./estate-developers/estate-developers.jsx";
import FeaturedProjects from "./featured-projects/featured-projects.jsx";
import PropertiesSearch from "./properties-locations-search/properties-search.jsx";
import TestimonialsSection from "./testimonials-section/testimonials-section.jsx";
import ProjectTabsContextProvider from "../../context-providers/nav-tabs-ref-provider/nav-tabs-ref-provider.jsx";

export default function MainSection() {
	return (
		<Flex as="main" direction="column" gap="8" paddingY="12" paddingX="8">
			{/* ProjectTabsContextProvider to provide projects tab refs list context between properties search section and featured-projects section */}
			<ProjectTabsContextProvider>
				{/* properties at locations search */}
				<PropertiesSearch />

				{/* featured projects section */}
				<FeaturedProjects />

				{/* Real Estate Devs Section */}
				<RealEstateDevs />

				{/* clients testiomoials section */}
				<TestimonialsSection />
			</ProjectTabsContextProvider>
		</Flex>
	);
}
