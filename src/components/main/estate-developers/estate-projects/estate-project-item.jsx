/** @format */

import { Link as ChakraLink, Flex, Heading, Text } from "@chakra-ui/react";
import { Route, Link as RouterLink, Routes } from "react-router-dom";
import PageComingSoon from "../../../page-coming-soon-modal/page-coming-soon-modal";

export default function EstateProject({ bgImgUrl }) {
	return (
		<Flex
			direction="column"
			gap={4}
			bgImage={`url("${bgImgUrl}")`}
			bgSize="cover"
			bgPosition="center center"
			paddingTop={{
				base: "min(40%, 8rem)",
				sm: "10rem",
			}}
			paddingBottom="2rem"
			paddingX="min(10%, 2rem)"
			borderRadius="xl">
			{/* estate project header and description */}
			<Flex direction="column" gap={2} color="white.100">
				<Heading
					as="h4"
					fontWeight="500"
					fontSize={{
						base: "2xl",
						smm: "3xl",
					}}>
					PrimewaterView Limited
				</Heading>
				<Text
					as="p"
					fontSize={{
						base: "sm",
						sm: "unset",
					}}>
					Specializing in high-end residential properties,
					PrimewaterView Limited has established itself as a leader in
					luxury living.
				</Text>
			</Flex>

			{/* Link to view projects */}
			<ChakraLink
				variant="primary"
				bgColor="white.100"
				color="blue.900"
				as={RouterLink}
				to="/projects-page"
				transition="all.25s ease-in-out"
				_hover={{
					textDecoration: "none",
					transform: "scale(1.1)",
				}}>
				View Projects
			</ChakraLink>
		</Flex>
	);
}
