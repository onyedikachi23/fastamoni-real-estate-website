/** @format */

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import SlideListsSwiper from "../../slide-lists-swiper/slide-lists-swiper";
import TestimonialItem from "./testimonial-item";
import testimonialsData from "../../../data/testimonials";

export default function TestimonialsSection() {
	return (
		<Flex direction="column" gap={8}>
			{/* section heading and description */}
			<Flex gap="2" direction="column" textAlign="center">
				<Heading
					as="h2"
					fontWeight="500"
					color="sectionHeading"
					fontSize={{
						base: "2xl",
						smm: "3xl",
					}}>
					Testimonials
				</Heading>
				<Text
					as="p"
					color="sectionDescription"
					fontSize={{
						base: "sm",
						sm: "unset",
					}}>
					Here's what our clients have to say about their real estate
					experiences with us.
				</Text>
			</Flex>

			{/* testimonials list */}
			<Box>
				<SlideListsSwiper
					slides={testimonialsData.map((testimonial, index) => (
						<TestimonialItem key={index} {...testimonial} />
					))}
				/>
			</Box>
		</Flex>
	);
}
