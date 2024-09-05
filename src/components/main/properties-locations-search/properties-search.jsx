/** @format */

import {
	Button,
	Input,
	InputGroup,
	InputRightAddon,
	Select,
	Flex,
	filter,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import projectsData from "../../../data/projects";
import Suggestions from "./suggestions-list";
import {
	useProjectTabsElementsRef,
	useSelectedTabIndexSetterRef,
} from "../../../context-providers/nav-tabs-ref-provider/nav-tabs-ref-provider";
import { scrollElementIntoView } from "../../../helper-functions/helper-functions";

export default function PropertiesSearch() {
	const [projectsLocations, setProjectLocations] = useState(null);
	const [searchParams, setSearchParams] = useState("");
	const [filteredLocations, setFilteredLocations] = useState(null);
	const [showDropdown, setShowDropdown] = useState(false);

	// contexts for handling scrolling to project tab index and showing it contents
	const projectTabsElementsRef = useProjectTabsElementsRef();
	const setSelectedProjectTabIndexRef = useSelectedTabIndexSetterRef();

	function getLocatiions() {
		setProjectLocations(projectsData.projectsLocations);
	}

	function filterLocationMatches(locationQuery) {
		console.log(locationQuery);

		const filteredData = projectsLocations?.[0]
			? projectsLocations.filter(
					(projectLocation) =>
						projectLocation.toLowerCase().indexOf(locationQuery) >
						-1
			  )
			: [];

		console.log(filteredData);

		setFilteredLocations(filteredData);
	}

	function handleInputChange(event) {
		const searchQuery = event.target.value.toLowerCase();
		setSearchParams(searchQuery);

		// filter projects based on searchQuery
		if (searchQuery.length > 0) {
			filterLocationMatches(searchQuery);
			setShowDropdown(true);
		} else {
			setShowDropdown(false);
		}
	}

	function handleScrollToProjectTab() {
		// scroll to project tab index and show its panel contents
		/*
		example structure: projectTabsElementsRef.current = {
			location: {
				tabIndex,
				tabElement
			}, ...
		}
		*/
		const location = searchParams.toLocaleLowerCase().trim();

		const projectTabElement =
			projectTabsElementsRef.current?.[location]?.tabElement;
		const projectTabIndex =
			projectTabsElementsRef.current?.[location]?.tabIndex;
		const showProjectTabContents = setSelectedProjectTabIndexRef.current;
		console.log(projectTabElement, projectTabIndex, showProjectTabContents);

		// scroll to project tab and show its contents
		if (projectTabElement) {
			// scroll element into view
			scrollElementIntoView(projectTabElement);
			// show project tab contents
			showProjectTabContents(projectTabIndex);
		}
	}

	// fetch location matches on initial render
	useEffect(() => {
		getLocatiions();
	}, []);

	return (
		<Flex
			direction="column"
			gap={3}
			alignItems="center"
			position="relative">
			<InputGroup
				borderRadius="lg !important"
				color="grey.navGray"
				display="flex"
				justifyContent="space-between"
				alignItems="center">
				<Input
					type="search"
					placeholder="Search property state or city"
					value={searchParams}
					onInput={handleInputChange}
					flex={1}
					paddingLeft="9%"
				/>
				<i
					className="ri-search-line"
					style={{
						cursor: "pointer",
						position: "absolute",
						top: "50%",
						left: "2%",
						transform: "translateY(-50%)",
						zIndex: "10",
					}}
					onClick={handleScrollToProjectTab}></i>

				<InputRightAddon flex={1}>
					<Select
						variant="unstyled"
						placeholder="Search all filters"
						cursor="pointer"
						icon={
							<Button
								bgColor="blue.100"
								color="#fff"
								paddingY="4">
								<i
									style={{
										color: "#fff",
									}}
									className="ri-equalizer-2-fill"></i>
							</Button>
						}
						fontSize="14">
						<option value="lagos">Lagos</option>
						<option value="abuja">Abuja</option>
						<option value="enugu">Enugu</option>
					</Select>
				</InputRightAddon>
			</InputGroup>

			{showDropdown && (
				<Suggestions
					filteredSuggestions={filteredLocations}
					setShowSuggestions={setShowDropdown}
					setInputParams={setSearchParams}
				/>
			)}
		</Flex>
	);
}
