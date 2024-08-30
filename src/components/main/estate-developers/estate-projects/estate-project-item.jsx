/** @format */

import { Link as ChakraLink, Flex, Heading, Text } from "@chakra-ui/react";

export default function EstateProject({ bgImgUrl }) {
	return (
		<Flex
			direction="column"
			gap={4}
			bgImage={`url("${bgImgUrl}")`}
			bgSize="cover"
			bgPosition="center center"
			padding="10rem 2rem 2rem 2rem"
			borderRadius="xl">
			{/* estate project header and description */}
			<Flex direction="column" gap={2} color="white.100">
				<Heading as="h4" fontWeight="500">
					PrimewaterView Limited
				</Heading>
				<Text as="p">
					Specializing in high-end residential properties,
					PrimewaterView Limited has established itself as a leader in
					luxury living.
				</Text>
			</Flex>

			{/* Link to view projects */}
			<ChakraLink variant="primary" bgColor="white.100" color="blue.900">
				View Projects
			</ChakraLink>
		</Flex>
	);
}