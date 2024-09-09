/** @format */

import {
	border,
	color,
	Flex,
	ListItem,
	position,
	Text,
	transition,
	UnorderedList,
} from "@chakra-ui/react";
import { useCallback, useEffect, useRef } from "react";

export default function Suggestions({
	filteredSuggestions,
	setShowSuggestions,
	setInputParams,
}) {
	/* 	const [suggestionsWillClose, setSuggestionsWillClose] = useState(true);
	 */ /* 	const [timeoutID, setTimeoutID] = useState(null);
	 */ const fadeElRef = useRef(null);

	const handleClickOutside = useCallback(
		(event) => {
			if (!fadeElRef.current?.contains(event.target)) {
				setShowSuggestions(false);
			}
		},
		[setShowSuggestions]
	);

	function handleSuggestionClick(suggestion) {
		setInputParams(suggestion);
		setShowSuggestions(false);
	}

	/* function handleMouseMove(movement) {
		movement && movement === "enter"
			? setSuggestionsWillClose(false)
			: setSuggestionsWillClose(true);
	} */

	/* const handleTimeoutClose = useCallback(() => {
		if (suggestionsWillClose) {
			const closeTimeout = setTimeout(() => {
				setShowSuggestions(false);
				window.removeEventListener("click", handleClickOutside);
			}, 2000);

			setTimeoutID(closeTimeout);
		} else {
			clearTimeout(timeoutID);
			console.log("no timeout");
		}
	}, [
		handleClickOutside,
		setShowSuggestions,
		suggestionsWillClose,
		timeoutID,
	]);
 */
	useEffect(() => {
		// add an event listener to close on outside click
		document.addEventListener("click", handleClickOutside);

		// close after 15s
		// handleTimeoutClose();
		const closeTimeout = setTimeout(() => {
			setShowSuggestions(false);
			document.removeEventListener("click", handleClickOutside);
		}, 159000);

		// Cleanup: Remove the event listener and Timeout when component unmounts
		return () => {
			clearTimeout(closeTimeout);
			document.removeEventListener("click", handleClickOutside);
		};
	}, [setShowSuggestions, handleClickOutside]);

	return (
		filteredSuggestions.length > 0 && (
			<UnorderedList
				zIndex={10}
				position="absolute"
				top="100%"
				left="0%"
				margin={0}
				listStyleType="none"
				/* onMouseOver={() => handleMouseMove("enter")}
			onMouseOut={() => handleMouseMove("leave")} */
			>
				<Flex
					direction="column"
					justifyContent="center"
					gap={2}
					border="1px solid black"
					borderColor="gray.900"
					boxShadow="md"
					backgroundColor="black"
					borderRadius="md"
					padding={4}>
					{filteredSuggestions.map((suggestion, index) => (
						<ListItem
							key={index}
							width="fit-content"
							onMouseDown={() =>
								handleSuggestionClick(suggestion)
							}>
							<Text
								color="white.100"
								as="span"
								cursor="pointer"
								transition="all 0.25s ease-in-out"
								transformOrigin="center"
								fontWeight="semibold"
								_hover={{
									color: "blue.100",
								}}>
								{suggestion}
							</Text>
						</ListItem>
					))}
				</Flex>
			</UnorderedList>
		)
	);
}
