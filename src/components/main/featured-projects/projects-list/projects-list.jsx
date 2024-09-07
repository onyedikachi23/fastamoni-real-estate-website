/** @format */

import {
	Box,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Link as ChakraLink,
	Flex,
	Grid,
	GridItem,
	Heading,
	Image,
	ListItem,
	Text,
	UnorderedList,
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { ShowerIcon } from "../../../../svg-icons/icons";
import { Route, Link as RouterLink, Routes } from "react-router-dom";
import PageComingSoon from "../../../page-coming-soon-modal/page-coming-soon-modal";

export default function ProjectsList({
	noOfProjects,
	projectsDataItem,
	maxHeight,
}) {
	const [projects, setProjects] = useState(null);
	const [projectsCount, setProjectsCount] = useState(
		// we start with an increment value of 6, or noOfProjects is < 6
		noOfProjects < 6 ? noOfProjects : 6
	);
	const [isLoadMoreActive, setIsLoadMoreActive] = useState(true);

	function fetchProjects() {
		setProjects((prevData) => {
			if (prevData) {
				return [...prevData, ...projectsDataItem];
			}

			return [...projectsDataItem];
		});
	}

	function handleLoadMore() {
		// projectsCount shouldn't exceed noOfProjects
		let count = projectsCount + 6;
		setProjectsCount(count < noOfProjects ? count : noOfProjects);
	}

	function isProjectsCountWithInRange(rangeType) {
		switch (rangeType) {
			case "projectsCount":
				return projectsCount < noOfProjects;

			case "projects.length":
				if (projects) {
					return projects?.length <= projectsCount;
				} else return true;

			default:
				break;
		}
	}

	// useEffect to fetch projects
	useEffect(() => {
		if (!isProjectsCountWithInRange("projectsCount") && !projects) {
			// if projectsCount >= noOfProjects on initial render, allow projects to be fetched, but load more btn becomes inactive

			setIsLoadMoreActive(false);
		} else if (!isProjectsCountWithInRange("projectsCount")) {
			// if projectsCount >= noOfProjects on subsequent rerenders, no more projects is to be fetched and load more btn inactive.

			setIsLoadMoreActive(false);
			// don't fetch more projects
			return;
		}

		// number of projects shown, shouldn't exceed projectsCount
		if (!isProjectsCountWithInRange("projects.length")) {
			return;
		}

		// when all is fine, fetch more projects
		// fetch projects on initial render and when projectsCount increases
		fetchProjects();
	}, [projectsCount, noOfProjects, projects?.length]);

	return (
		<Flex
			direction="column"
			justifyContent="center"
			alignItems="center"
			gap={8}
			maxHeight={maxHeight ? maxHeight : "none"}
			overflow="auto">
			<UnorderedList
				paddingX={4}
				overflow="auto"
				listStyleType="none"
				margin={0}
				marginBottom={4}>
				<Grid
					gap={8}
					rowGap={12}
					templateColumns={{
						base: "2fr",
						sm: "repeat(4, 1fr)",
						lg: "repeat(6, 1fr)",
					}}>
					{projects?.[0]?.projectLocation // checks if projects has at least 1 item and if the item has a description
						? projects.map((project, index) => {
								// check if index is within the projectsCount range
								if (
									index >= projectsCount ||
									index >= noOfProjects
								) {
									return;
								}

								const item = (
									<GridItem
										key={index + projectsCount}
										gridColumn="span 2">
										<ListItem key={projectsCount + index}>
											<Card
												boxShadow="none"
												variant="unstyled">
												<Flex
													direction="column"
													justifyContent="center"
													gap={2}>
													<CardHeader>
														<Box
															marginBottom="2"
															aspectRatio="1"
															borderRadius="16px"
															width="100%">
															<Image
																src={
																	project
																		.projectDescriptionsItem
																		.projectBannerImg
																}
																alt="project banner image"
																objectFit="cover"
																objectPosition="center"
																width="100%"
																height="100%"
																borderRadius="16px"
															/>
														</Box>

														<Flex
															justifyContent="space-between"
															alignItems="center">
															<Heading
																as="h4"
																fontSize={{
																	base: "texts.primary",
																	smm: "md",
																}}
																color="hsla(0, 0%, 17%, 1)">
																{
																	project.projectLocation
																}
															</Heading>
															<Text
																as="span"
																fontSize="texts.secondary">
																<i className="ri-heart-3-line"></i>
																<Text as="span">
																	{
																		project
																			.projectDescriptionsItem
																			.likes
																	}
																</Text>
															</Text>
														</Flex>
													</CardHeader>

													<CardBody
														fontSize={{
															base: "texts.secondary",
															smm: "texts.primary",
														}}
														marginBottom={1}>
														<Flex
															color="blue.100"
															alignItems="center"
															gap="4"
															rowGap={2}
															wrap="wrap">
															<Flex
																gap="1"
																justifyContent="space-between"
																alignItems="center">
																<i className="ri-map-pin-2-fill"></i>
																<Text
																	as="span"
																	color="grey.black">
																	{
																		project.projectLocation
																	}
																</Text>
															</Flex>

															<Flex
																gap="1"
																justifyContent="space-between"
																alignItems="center">
																<ShowerIcon />

																<Text
																	as="span"
																	color="grey.black">
																	{
																		project
																			.projectDescriptionsItem
																			.houseDescription
																			.bathRooms
																	}{" "}
																	baths
																</Text>
															</Flex>

															<Flex
																gap="1"
																justifyContent="space-between"
																alignItems="center">
																<i className="ri-hotel-bed-fill"></i>
																<Text
																	as="span"
																	color="grey.black">
																	{
																		project
																			.projectDescriptionsItem
																			.houseDescription
																			.bedRooms
																	}{" "}
																	beds
																</Text>
															</Flex>
														</Flex>
													</CardBody>

													<CardFooter>
														<ChakraLink
															color="blue.100"
															as={RouterLink}
															to="/project-details">
															View Details
														</ChakraLink>
													</CardFooter>
												</Flex>
											</Card>
										</ListItem>
									</GridItem>
								);

								return item;
						  })
						: null}
				</Grid>
			</UnorderedList>

			<Box
				as="button"
				onClick={handleLoadMore}
				disabled={!isLoadMoreActive}
				paddingX={6}
				paddingY={2}
				bgColor="blue.100"
				color="white"
				borderRadius={12}
				fontWeight="semibold"
				fontSize="texts.primary"
				_hover={{
					transform: `scale(1.1)`,
					bgColor: "hsla(211, 100%, 50%, .8)",
				}}
				_disabled={{
					opacity: 0.5,
					cursor: "not-allowed",
					transform: `scale(1)`,
					bgColor: "blue.100",
				}}
				transition="all .25s ease-in-out">
				Load more
			</Box>
		</Flex>
	);
}
