/** @format */

import {
	Button,
	Input,
	InputGroup,
	InputRightAddon,
	Select,
	Flex,
	filter,
	Text,
	FormLabel,
	Box,
	InputLeftElement,
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
	const [showLocationNotFound, setShowLocationNotFound] = useState(false);

	// contexts for handling scrolling to project tab index and showing it contents
	const projectTabsElementsRef = useProjectTabsElementsRef();
	const setSelectedProjectTabIndexRef = useSelectedTabIndexSetterRef();

	function getLocatiions() {
		setProjectLocations(projectsData.projectsLocations);
	}

	function filterLocationMatches(locationQuery) {
		const filteredData = projectsLocations?.[0]
			? projectsLocations.filter(
					(projectLocation) =>
						projectLocation.toLowerCase().indexOf(locationQuery) >
						-1
			  )
			: [];

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

		// scroll to project tab and show its contents
		if (projectTabElement) {
			// scroll element into view
			scrollElementIntoView(projectTabElement);
			// show project tab contents
			showProjectTabContents(projectTabIndex);
		} else {
			setShowLocationNotFound(true);
		}
	}

	function handleEnterKeyPress(event) {
		if (event.key === "Enter") {
			handleScrollToProjectTab();
		}
	}

	function handleInputFocusChange(event) {
		if (event.type === "focus") {
			filteredLocations?.length === 0 && setShowLocationNotFound(true);
		} else if (event.type === "blur") {
			setShowLocationNotFound(false);
			setShowDropdown(false);
		}
	}

	// fetch location matches on initial render
	useEffect(() => {
		getLocatiions();
	}, []);

	useEffect(() => {
		if (filteredLocations?.length === 0) {
			setShowLocationNotFound(true);
		} else {
			setShowLocationNotFound(false);
		}
	}, [filteredLocations]);

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
				<InputLeftElement>
					<i
						className="ri-search-line"
						style={{
							cursor: "pointer",

							zIndex: "10",
						}}
						onClick={handleScrollToProjectTab}></i>
				</InputLeftElement>
				<Input
					id="search-input"
					type="search"
					placeholder="Search property state or city"
					value={searchParams}
					onInput={handleInputChange}
					onKeyDown={handleEnterKeyPress}
					onFocus={handleInputFocusChange}
					onBlur={handleInputFocusChange}
					flex={1}
					_placeholder={{
						opacity: {
							base: showLocationNotFound ? 0.6 : 0,
							sm: 0.6,
						},
						fontSize: "sm",
					}}
				/>
				<FormLabel
					htmlFor="search-input"
					position="absolute"
					top="100%"
					left="0%">
					{showLocationNotFound ? (
						<Text
							as="span"
							color="red"
							fontSize="xs"
							fontWeight="semibold">
							Location not found
						</Text>
					) : (
						<Text
							as="span"
							display={{
								base: "initial",
								sm: "none",
							}}
							fontSize="sm"
							opacity={0.6}>
							Search property state or city
						</Text>
					)}
				</FormLabel>

				<InputRightAddon flex={1}>
					<Select
						id="location-filters-options"
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
					<FormLabel
						htmlFor="location-filters-options"
						position="absolute"
						bottom="85%"
						right={0}
						fontSize="xs"
						display={{
							base: "initial",
							sm: "none",
						}}>
						Filter options
					</FormLabel>
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
