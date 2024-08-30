/** @format */

import {
	Box,
	Card,
	CardBody,
	CardHeader,
	Heading,
	Text,
} from "@chakra-ui/react";

export default function TestimonialItem({ clientName, title, comment }) {
	return (
		<Box>
			{/* testiomonial card */}
			<Card
				variant="unstyled"
				display="flex"
				flexDirection="column"
				gap={2}
				bgColor="white.200"
				borderRadius="xl"
				paddingX={8}
				paddingY={16}>
				<CardHeader>
					<Heading
						as="h4"
						fontSize="md"
						fontWeight="500"
						color="sectionHeading">{`${clientName}, ${title}`}</Heading>
				</CardHeader>

				<CardBody>
					<Text
						as="p"
						fontSize="texts.primary"
						lineHeight={1.8}
						letterSpacing=".5px"
						color="sectionDescription">
						{comment}
					</Text>
				</CardBody>
			</Card>
		</Box>
	);
}
