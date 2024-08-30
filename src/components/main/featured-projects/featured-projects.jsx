/** @format */

import {
	Badge,
	Box,
	Flex,
	Heading,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from "@chakra-ui/react";
import ProjectsList from "./projects-list/projects-list.jsx";

export default function FeaturedProjects() {
	return (
		<Box as="section">
			<Flex
				direction="column"
				gap={{
					base: "8",
					smm: "16",
				}}>
				{/* sectiion description */}
				<Flex direction="column" gap="2">
					<Heading
						as="h2"
						fontWeight="500"
						color="sectionHeading"
						maxWidth="760px">
						Featured projects
					</Heading>

					<Text
						maxWidth="760px"
						as="p"
						fontSize={{
							base: "texts.primary",
							smm: "md",
						}}
						color="sectionDescription"
						lineHeight="texts.primary">
						Discover your dream property from your favorite
						developers. Explore our premium listings and find the
						perfect home or investment opportunity tailored to your
						preferences. Start Your Search Today.
					</Text>
				</Flex>

				{/* featured projects tabs*/}
				<Tabs
					size="xs"
					defaultIndex={1}
					isFitted
					display="flex"
					flexDirection="column"
					justifyContent="center"
					gap={8}>
					{/* tab navigators */}
					<TabList
						fontSize={{
							base: "texts.secondary",
							smm: "md",
						}}
						gap={{
							base: "2",
						}}
						overflow="scroll"
						paddingBottom={4}>
						<Tab paddingX={2} gap={2} whiteSpace="nowrap">
							<Text as="span">All</Text>
						</Tab>

						<Tab paddingX={2} gap={2} whiteSpace="nowrap">
							<Text as="span">Lekki Gardens</Text>
							<Badge
								borderRadius="12px"
								paddingX="2"
								bgColor="hsla(219, 13%, 46%, 1)"
								color="white"
								fontWeight="light"
								fontSize={{
									base: "texts.tabs",
									smm: "md",
								}}>
								80
							</Badge>
						</Tab>

						<Tab paddingX={2} gap={2} whiteSpace="nowrap">
							<Text as="span">Ocean lake</Text>
							<Badge
								borderRadius="12px"
								paddingX="2"
								bgColor="hsla(219, 13%, 46%, 1)"
								color="white"
								fontWeight="light"
								fontSize={{
									base: "texts.tabs",
									smm: "md",
								}}>
								10
							</Badge>
						</Tab>

						<Tab paddingX={2} gap={2} whiteSpace="nowrap">
							<Text as="span">Swiss village</Text>
						</Tab>

						<Tab paddingX={2} gap={2} whiteSpace="nowrap">
							<Text as="span">Banna Max express</Text>
							<Badge
								borderRadius="12px"
								paddingX="2"
								bgColor="hsla(219, 13%, 46%, 1)"
								color="white"
								fontWeight="light"
								fontSize={{
									base: "texts.tabs",
									// smm: "md",
								}}>
								0
							</Badge>
						</Tab>
					</TabList>

					{/* Tab Items - Projects gallery */}
					<TabPanels>
						<TabPanel>
							{/* For All */}
							<ProjectsList noOfProjects={100} />
						</TabPanel>

						<TabPanel>
							{/* For Lekki */}
							<ProjectsList noOfProjects={80} />
						</TabPanel>

						<TabPanel>
							{/* For ocean lake */}
							<ProjectsList noOfProjects={10} />
						</TabPanel>

						<TabPanel>
							{/* For swiss village */}
							<ProjectsList noOfProjects={0} />
						</TabPanel>

						<TabPanel>
							{/* For Banana Max */}
							<ProjectsList noOfProjects={0} />
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Flex>
		</Box>
	);
}
