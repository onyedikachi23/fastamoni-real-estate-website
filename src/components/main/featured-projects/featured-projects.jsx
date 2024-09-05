/** @format */

import {
	Badge,
	Box,
	Flex,
	Heading,
	ListItem,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	UnorderedList,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import {
	useProjectTabsElementsRef,
	useSelectedTabIndexSetterRef,
} from "../../../context-providers/nav-tabs-ref-provider/nav-tabs-ref-provider.jsx";
import projectsData from "../../../data/projects.js";
import {
	getRandomInt,
	isElement,
} from "../../../helper-functions/helper-functions.js";
import ProjectsList from "./projects-list/projects-list.jsx";

export default function FeaturedProjects() {
	const [projectTabIndex, setProjectTabIndex] = useState(1);

	// to make the project tabs elements' ref available to all components using the context API
	const projectTabsElementsRef = useProjectTabsElementsRef();

	// to make setProjectTabIndex() available to other components using the context API
	const selectedTabIndexSetterRef = useSelectedTabIndexSetterRef();

	// to dynamically hold projectTabs' elements' ref for each project
	const locationsRef = useRef({});
	/* 
	example structure: locationsRef.current = {
		location: {
			tabIndex,
			tabElement
		}
	}
	*/

	function handleUpdateRefsObj(locationTabDetails) {
		// element should be valid HTML element
		if (isElement(locationTabDetails.element)) {
			const projectLocation = locationTabDetails.projectLocation
				.toLowerCase()
				.trim();

			locationsRef.current[projectLocation] = {
				tabIndex: locationTabDetails.index,
				tabElement: locationTabDetails.element,
			};

			console.log(locationsRef.current);
		}
	}

	// to generate dummy numbers of projects at projectsLocations in any page visit
	const projectsNumbersInprojectsLocationsRef = useRef(
		generateRandomProjectsNumbers()
	);

	// generate random number of projects at projectsLocations
	function generateRandomProjectsNumbers() {
		// total number of projectsLocations = projectsData.projectsLocations.length
		const projectsNumbersList = [];
		for (let i = 0; i < projectsData.projectsLocations.length; i++) {
			const projectsNumber = getRandomInt(100);
			projectsNumbersList.push(projectsNumber);
		}
		return projectsNumbersList;
	}

	function numbersSum(numArray) {
		const sum = numArray.reduce((a, b) => a + b);
		return sum;
	}

	// format the value for the projectsDataItem prop in ProjectsList component where each object in the projectsDescriptions array is paired with the projectsLocation string into separate objects, then listed into an array of objects
	function formatProjectsDataForListing(projectLocation) {
		const result = projectsData.projectsDescriptions.map((project) => ({
			projectLocation,
			projectDescriptionsItem: project,
		}));

		/* 
		expected output structure example:
		[
  			{ projectsLocation: "YourprojectsLocationString", projectDescriptionsItem: { title: "Project 1", description: "Description 1" } },
  			{ projectsLocation: "YourprojectsLocationString", projectDescriptionsItem: { title: "Project 2", description: "Description 2" } },
  			// More objects as needed
		]
		*/

		return result;
	}

	// useEffect for updating ProjectTabsContext and SelectedTabIndexSetterContext after initial render
	useEffect(() => {
		projectTabsElementsRef.current = locationsRef.current;
		selectedTabIndexSetterRef.current = setProjectTabIndex;
	}, []);

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
					index={projectTabIndex}
					onChange={(index) => setProjectTabIndex(index)}
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
						overflow="auto"
						paddingBottom={4}>
						<Tab paddingX={2} gap={2} whiteSpace="nowrap">
							<Text as="span">All</Text>
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
								{numbersSum(
									projectsNumbersInprojectsLocationsRef.current
								)}
							</Badge>
						</Tab>

						{/* map out other tabs from imported projectsData */}
						{projectsData.projectsLocations.map(
							(projectLocation, index) => (
								<Tab
									ref={(element) =>
										handleUpdateRefsObj({
											element,
											projectLocation,
											index: index + 1,
										})
									}
									key={index}
									paddingX={2}
									gap={2}
									whiteSpace="nowrap">
									<Text as="span">{projectLocation}</Text>
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
										{
											projectsNumbersInprojectsLocationsRef
												.current[index]
										}
									</Badge>
								</Tab>
							)
						)}
					</TabList>

					{/* Tab Items - Projects gallery */}
					<TabPanels>
						<TabPanel>
							{/* For All tab 
							Each projectsLocation's project would be listed here in ascending order
							*/}
							<UnorderedList
								listStyleType="none"
								padding="0"
								margin={0}
								maxHeight="68rem"
								overflow="auto"
								paddingX={4}>
								<Flex
									gap={14}
									direction="column"
									alignItems="center"
									justifyContent="center">
									{projectsData.projectsLocations.map(
										(projectLocation, index) => (
											<ListItem key={index}>
												<Flex
													paddingBottom={14}
													borderBottom="1px solid #7D7F88"
													direction="column"
													justifyContent="center"
													gap={{
														base: 6,
														smm: 8,
													}}>
													<Heading
														alignSelf="center"
														as="h3"
														fontSize={{
															base: "xl",
															smm: "2xl",
														}}
														color="hsla(0, 0%, 17%, 1)">
														{projectLocation}
													</Heading>

													<ProjectsList
														noOfProjects={
															projectsNumbersInprojectsLocationsRef
																.current[index]
														}
														projectsDataItem={formatProjectsDataForListing(
															projectLocation
														)}
														maxHeight="none"
													/>
												</Flex>
											</ListItem>
										)
									)}
								</Flex>
							</UnorderedList>
						</TabPanel>

						{/* panel for each projectsLocation tab */}
						{projectsData.projectsLocations.map(
							(projectLocation, index) => (
								<TabPanel key={index}>
									<ProjectsList
										noOfProjects={
											projectsNumbersInprojectsLocationsRef
												.current[index]
										}
										projectsDataItem={formatProjectsDataForListing(
											projectLocation
										)}
										maxHeight="68rem"
									/>
								</TabPanel>
							)
						)}
					</TabPanels>
				</Tabs>
			</Flex>
		</Box>
	);
}
