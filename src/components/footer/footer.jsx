/** @format */

import {
	Box,
	Flex,
	Heading,
	Link,
	ListItem,
	Text,
	UnorderedList,
} from "@chakra-ui/react";

export default function Footer() {
	return (
		<Box as="footer" bgColor="sectionHeading" paddingX={10}>
			{/* top footer section */}
			<Flex direction="column" gap={4} textAlign="center" paddingY={10}>
				<Text
					as="span"
					color="hsla(216, 45%, 98%, 1)"
					fontSize="texts.primary">
					CONVINCED?
				</Text>

				<Heading as="h2" color="white.100">
					Let’s create magic together
				</Heading>

				<Text
					as="p"
					color="hsla(216, 45%, 98%, 1)"
					fontSize="sm"
					fontWeight="400">
					Let us unleash our creativity and expertise to create
					designs that deliver extraordinary results.
				</Text>
			</Flex>

			{/* bottom footer section */}
			<UnorderedList
				listStyleType="none"
				padding={0}
				margin={0}
				borderTop="1px solid hsla(219, 33%, 17%, 1)"
				paddingY={8}>
				<Flex gap={4} justifyContent="center" alignItems="center">
					<ListItem
						maxWidth="24px"
						height="24px"
						padding={0}
						fontSize="sm"
						boxSizing="border-box"
						aspectRatio="1/1"
						flex={1}
						display="flex"
						justifyContent="center"
						alignItems="center"
						borderRadius="50%"
						color="white.100"
						bgColor="blue.100">
						<Link
							href="https://web.facebook.com/"
							isExternal
							_hover={{
								textDecor: "none",
							}}>
							<i className="ri-facebook-circle-fill"></i>
						</Link>
					</ListItem>
					<ListItem
						maxWidth="24px"
						height="24px"
						padding={0}
						fontSize="sm"
						boxSizing="border-box"
						aspectRatio="1/1"
						flex={1}
						display="flex"
						justifyContent="center"
						alignItems="center"
						borderRadius="50%"
						color="white.100"
						bgColor="blue.100">
						<Link
							href="https://x.com/"
							isExternal
							_hover={{
								textDecor: "none",
							}}>
							<i className="ri-twitter-x-fill"></i>
						</Link>
					</ListItem>
					<ListItem
						maxWidth="24px"
						height="24px"
						padding={0}
						fontSize="sm"
						boxSizing="border-box"
						aspectRatio="1/1"
						flex={1}
						display="flex"
						justifyContent="center"
						alignItems="center"
						borderRadius="50%"
						color="white.100"
						bgColor="blue.100">
						<Link
							href="https://www.instagram.com/"
							isExternal
							_hover={{
								textDecor: "none",
							}}>
							<i className="ri-instagram-line"></i>
						</Link>
					</ListItem>
					<ListItem
						maxWidth="24px"
						height="24px"
						padding={0}
						fontSize="sm"
						boxSizing="border-box"
						aspectRatio="1/1"
						flex={1}
						display="flex"
						justifyContent="center"
						alignItems="center"
						borderRadius="50%"
						color="white.100"
						bgColor="blue.100">
						<Link
							href="https://www.linkedin.com/"
							isExternal
							_hover={{
								textDecor: "none",
							}}>
							<i className="ri-linkedin-fill"></i>
						</Link>
					</ListItem>
				</Flex>
			</UnorderedList>
		</Box>
	);
}
