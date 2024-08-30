/** @format */

import {
	Box,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Flex,
	Heading,
	ListItem,
	Text,
	UnorderedList,
	Link as ChakraLink,
	Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import projectsData from "../../../../data/projects";

export default function ProjectsList({ noOfProjects }) {
	const [projects, setProjects] = useState(null);
	const [projectsCount, setProjectsCount] = useState(0);
	const [isLoadMoreActive, setIsLoadMoreActive] = useState(true);

	function fetchProjects() {
		const fetchedProjects = projectsData;

		setProjects((prevData) => {
			if (prevData) {
				return [...prevData, ...fetchedProjects];
			}

			return [...fetchedProjects];
		});
	}

	function handleLoadMore() {
		setProjectsCount((prevCount) => prevCount + 6);
	}

	// useEffect to fetch projects
	useEffect(() => {
		fetchProjects();

		if (projectsCount === noOfProjects) {
			setIsLoadMoreActive(false);
		}

		return () => {};
	}, [projectsCount, noOfProjects]);

	return (
		<Box>
			<UnorderedList
				listStyleType="none"
				padding="0"
				margin={0}
				marginBottom={4}>
				<Flex wrap="wrap" gap={8}>
					{projects && projects[0].title
						? projects.map((project, index) => (
								<ListItem key={projectsCount + index}>
									<Card boxShadow="none" variant="unstyled">
										<Flex
											direction="column"
											justifyContent="center"
											alignItems="flex-start"
											gap={2}>
											<CardHeader>
												<Box
													marginBottom="2"
													aspectRatio="1"
													borderRadius="16px"
													width="100%">
													<Image
														src={
															project.projectBannerImg
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
														fontSize="texts.primary"
														color="hsla(0, 0%, 17%, 1)">
														{project.title}
													</Heading>
													<Text
														as="span"
														fontSize="texts.secondary">
														<i className="ri-heart-3-line"></i>
														<Text as="span">
															{project.likes}
														</Text>
													</Text>
												</Flex>
											</CardHeader>

											<CardBody
												fontSize="texts.secondary"
												marginBottom={1}>
												<Flex
													color="blue.100"
													alignItems="center"
													gap="4"
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
																project
																	.description
																	.location
															}
														</Text>
													</Flex>

													<Flex
														gap="1"
														justifyContent="space-between"
														alignItems="center">
														<svg
															width="15"
															height="15"
															viewBox="0 0 15 15"
															fill="none"
															xmlns="http://www.w3.org/2000/svg">
															<path
																fillRule="evenodd"
																clipRule="evenodd"
																d="M5.75001 10.4167C5.75001 10.7389 5.48884 11 5.16667 11C4.84451 11 4.58334 10.7389 4.58334 10.4167C4.58334 10.0945 4.84451 9.83337 5.16667 9.83337C5.48884 9.83337 5.75001 10.0945 5.75001 10.4167ZM4.58334 12.75C4.58334 13.0722 4.32217 13.3334 4.00001 13.3334C3.67784 13.3334 3.41667 13.0722 3.41667 12.75C3.41667 12.4279 3.67784 12.1667 4.00001 12.1667C4.32217 12.1667 4.58334 12.4279 4.58334 12.75ZM7.5 11C7.82217 11 8.08334 10.7389 8.08334 10.4167C8.08334 10.0945 7.82217 9.83337 7.5 9.83337C7.17784 9.83337 6.91667 10.0945 6.91667 10.4167C6.91667 10.7389 7.17784 11 7.5 11ZM6.91667 12.75C6.91667 13.0722 6.6555 13.3334 6.33334 13.3334C6.01117 13.3334 5.75001 13.0722 5.75001 12.75C5.75001 12.4279 6.01117 12.1667 6.33334 12.1667C6.6555 12.1667 6.91667 12.4279 6.91667 12.75ZM9.83334 11C10.1555 11 10.4167 10.7389 10.4167 10.4167C10.4167 10.0945 10.1555 9.83337 9.83334 9.83337C9.51117 9.83337 9.25 10.0945 9.25 10.4167C9.25 10.7389 9.51117 11 9.83334 11ZM9.25 12.75C9.25 13.0722 8.98884 13.3334 8.66667 13.3334C8.34451 13.3334 8.08334 13.0722 8.08334 12.75C8.08334 12.4279 8.34451 12.1667 8.66667 12.1667C8.98884 12.1667 9.25 12.4279 9.25 12.75ZM11 13.3334C11.3222 13.3334 11.5833 13.0722 11.5833 12.75C11.5833 12.4279 11.3222 12.1667 11 12.1667C10.6778 12.1667 10.4167 12.4279 10.4167 12.75C10.4167 13.0722 10.6778 13.3334 11 13.3334Z"
																fill="#007BFF"
															/>
															<path
																fillRule="evenodd"
																clipRule="evenodd"
																d="M3.41666 1.66663C3.0945 1.66663 2.83333 1.92779 2.83333 2.24996C2.83333 2.57213 3.0945 2.83329 3.41666 2.83329H6.33333C6.65549 2.83329 6.91666 3.09446 6.91666 3.41663V3.99996C6.91666 4.32213 7.17783 4.58329 7.5 4.58329C7.82216 4.58329 8.08333 4.32213 8.08333 3.99996V3.41663C8.08333 2.45013 7.29983 1.66663 6.33333 1.66663H3.41666ZM4.58333 5.74996C3.61683 5.74996 2.83333 6.53346 2.83333 7.49996C2.83333 7.82213 3.0945 8.08329 3.41666 8.08329H11.5833C11.9055 8.08329 12.1667 7.82213 12.1667 7.49996C12.1667 6.53346 11.3832 5.74996 10.4167 5.74996H4.58333Z"
																fill="#007BFF"
															/>
														</svg>
														<Text
															as="span"
															color="grey.black">
															{
																project
																	.description
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
																	.description
																	.bedRooms
															}{" "}
															beds
														</Text>
													</Flex>
												</Flex>
											</CardBody>

											<CardFooter>
												<ChakraLink color="blue.100">
													View Details
												</ChakraLink>
											</CardFooter>
										</Flex>
									</Card>
								</ListItem>
						  ))
						: null}
				</Flex>
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
				transition="all .25s ease-in-out">
				Load more
			</Box>
		</Box>
	);
}
