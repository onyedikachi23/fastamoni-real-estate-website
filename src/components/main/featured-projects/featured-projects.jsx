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
			<Flex direction="column" gap="3">
				{/* sectiion description */}
				<Flex direction="column" gap="2">
					<Heading as="h2" fontWeight="500">
						Featured projects
					</Heading>

					<Text
						as="p"
						fontSize="texts.primary"
						color="hsla(219, 13%, 46%, 1)"
						lineHeight="texts.primary">
						Discover your dream property from your favorite
						developers. Explore our premium listings and find the
						perfect home or investment opportunity tailored to your
						preferences. Start Your Search Today.
					</Text>
				</Flex>

				{/* featured projects tabs*/}
				<Flex direction="column" gap="3">
					<Tabs size="xs" defaultIndex={1}>
						{/* tab navigators */}
						<TabList fontSize="texts.tabs">
							<Flex gap="2">
								<Tab>All</Tab>
								<Tab>
									Lekki Gardens
									<Badge
										borderRadius="12px"
										paddingX="2"
										bgColor="hsla(219, 13%, 46%, 1)"
										color="white"
										fontWeight="light"
										fontSize="8">
										80
									</Badge>
								</Tab>
								<Tab>
									Ocean lake
									<Badge
										borderRadius="12px"
										paddingX="2"
										bgColor="hsla(219, 13%, 46%, 1)"
										color="white"
										fontWeight="light"
										fontSize="8">
										10
									</Badge>
								</Tab>
								<Tab>Swiss village</Tab>
								<Tab>
									Banna Max express
									<Badge
										borderRadius="12px"
										paddingX="2"
										bgColor="hsla(219, 13%, 46%, 1)"
										color="white"
										fontWeight="light"
										fontSize="8">
										0
									</Badge>
								</Tab>
							</Flex>
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
			</Flex>
		</Box>
	);
}
