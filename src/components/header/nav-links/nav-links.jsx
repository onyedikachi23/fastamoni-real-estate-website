/** @format */

import {
	Box,
	Button,
	Link as ChakraLink,
	Flex,
	ListItem,
	UnorderedList,
} from "@chakra-ui/react";
import { Route, Link as RouterLink, Routes } from "react-router-dom";
import Solutions from "../../pages-components/solutions";
import HowItWorks from "../../pages-components/howItWorks";
import About from "../../pages-components/about";
import Resources from "../../pages-components/resources";
import { useState } from "react";

export default function NavBar() {
	const [isNavListShown, setIsNavListShown] = useState(false);

	function handleShowMobileNavBar() {
		setIsNavListShown((prevState) => !prevState);
	}

	return (
		<>
			{/* NavBar */}
			<Flex
				as="nav"
				position="fixed"
				top="0"
				left="0"
				width="100%"
				alignItems="center"
				justifyContent={{
					base: "space-between",
					sm: "center",
				}}
				paddingX="8"
				paddingY="2"
				bgColor="white">
				<Box>
					<Button
						onClick={handleShowMobileNavBar}
						display={{
							base: "inline",
							sm: "none",
						}}
						height="unset"
						padding=".5rem 1rem"
						minWidth="unset">
						{isNavListShown ? (
							<i className="ri-close-line"></i>
						) : (
							<i className="ri-menu-line"></i>
						)}
					</Button>

					<UnorderedList
						transition="all 0.5s ease-in-out"
						position={{
							base: "absolute",
							sm: "unset",
						}}
						top="70%"
						left={0}
						opacity={{
							base: isNavListShown ? "1" : "0",
							sm: "1",
						}}
						transform={{
							base: isNavListShown
								? "translateX(0)"
								: "translateX(-100%)",
							sm: "translateX(0)",
						}}
						listStyleType="none"
						padding="0"
						margin={0}>
						<Flex
							flexDirection={{
								base: "column",
								sm: "row",
							}}>
							<ListItem>
								<ChakraLink as={RouterLink} to="/solutions">
									Solutions
									<i className="ri-arrow-down-s-line"></i>
								</ChakraLink>
							</ListItem>
							<ListItem>
								<ChakraLink as={RouterLink} to="/how-it-works">
									How it works.
									<i className="ri-arrow-down-s-line"></i>
								</ChakraLink>
							</ListItem>
							<ListItem>
								<ChakraLink as={RouterLink} to="/about">
									About
									<i className="ri-arrow-down-s-line"></i>
								</ChakraLink>
							</ListItem>
							<ListItem>
								<ChakraLink as={RouterLink} to="/resources">
									Resources
								</ChakraLink>
							</ListItem>
						</Flex>
					</UnorderedList>
				</Box>

				<ChakraLink variant="primary">Get Started</ChakraLink>
			</Flex>

			{/* Routers from React router */}
			<Routes>
				<Route path="/solutions" element={<Solutions />} />
				<Route path="/how-it-works" element={<HowItWorks />} />
				<Route path="/about" element={<About />} />
				<Route path="/resources" element={<Resources />} />
				{/* <Route path="/" exact element={<Header />} /> */}
			</Routes>
		</>
	);
}
