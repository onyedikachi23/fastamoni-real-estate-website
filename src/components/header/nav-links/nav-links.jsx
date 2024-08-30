/** @format */

import {
	Box,
	Button,
	Link as ChakraLink,
	Flex,
	ListItem,
	Tab,
	TabList,
	Tabs,
	transition,
	UnorderedList,
} from "@chakra-ui/react";
import { Route, Link as RouterLink, Routes } from "react-router-dom";
import Solutions from "../../pages-components/solutions";
import HowItWorks from "../../pages-components/howItWorks";
import About from "../../pages-components/about";
import Resources from "../../pages-components/resources";
import { useState } from "react";
import NavTabModal from "./nav-tabs-modal";

export default function NavBar() {
	const [isNavListShown, setIsNavListShown] = useState(false);

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
					base: "flex-start",
					md: "center",
				}}
				paddingX="8"
				paddingY="2"
				bgColor="white"
				zIndex={100}>
				<Box>
					<Button
						position={"relative"}
						zIndex={200}
						onClick={(event) => {
							// event bubbling causes the modal to close immediately due our setup, so stop it
							event.stopPropagation();
							setIsNavListShown((prevState) => !prevState);
						}}
						display={{
							base: "inline",
							smm: "none",
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

					{/* <UnorderedList
						transition="all 0.5s ease-in-out"
						position={{
							base: "absolute",
							smm: "unset",
						}}
						top="70%"
						left={0}
						opacity={{
							base: isNavListShown ? "1" : "0",
							smm: "1",
						}}
						transform={{
							base: isNavListShown
								? "translateX(0)"
								: "translateX(-100%)",
							smm: "translateX(0)",
						}}
						listStyleType="none"
						padding="0"
						margin={0}>
						<Flex
							flexDirection={{
								base: "column",
								smm: "row",
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
					</UnorderedList> */}

					{/* Tabs for site navigation */}
					<NavTabModal
						isNavListShown={isNavListShown}
						RouterLink={RouterLink}
						setIsNavListShown={setIsNavListShown}
					/>
				</Box>

				<ChakraLink
					variant="primary"
					position="absolute"
					top="50%"
					right={8}
					transform="translate(0, -50%)"
					transition=" all .25s ease-in-out"
					_hover={{
						transform: "scale(1.1) translate(0, -50%)",
					}}>
					Get Started
				</ChakraLink>
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
