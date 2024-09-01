/** @format */

import { Box, Button, Link as ChakraLink, Flex } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Route, NavLink as RouterLink, Routes } from "react-router-dom";
import useIsElementHeightScrolled from "../../../custom-hooks/element-height-scrolled/element-height-scrolled";
import PageComingSoon from "../../page-coming-soon-modal/page-coming-soon-modal";
import NavTabModal from "./nav-tabs-modal";

export default function NavBar() {
	const [isNavListShown, setIsNavListShown] = useState(false);
	const [navBarElRendered, setNavBarElRendered] = useState(null);
	const navBarRef = useRef(null);
	const isNavBarHeightScrolled = useIsElementHeightScrolled(navBarElRendered);

	// to handle navBarRef.current being null on first initialization of useIsElementHeightScrolled()
	useEffect(() => {
		setNavBarElRendered(navBarRef.current);
	}, []);

	return (
		<>
			{/* NavBar */}
			<Flex
				as="nav"
				ref={navBarRef}
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
						zIndex={100}
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

					{/* Tabs for site navigation */}
					<NavTabModal
						isNavListShown={isNavListShown}
						setIsNavListShown={setIsNavListShown}
						isNavBarHeightScrolled={isNavBarHeightScrolled}
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

				{/* Routers from React router */}
				<Routes>
					<Route path="/">
						<Route
							path="/solutions"
							element={
								<PageComingSoon
									setIsMobileNavBarShown={setIsNavListShown}
									pageTitle="Solutions page"
								/>
							}
						/>
						<Route
							path="/how-it-works"
							element={
								<PageComingSoon
									setIsMobileNavBarShown={setIsNavListShown}
									pageTitle={`"How it works" page`}
								/>
							}
						/>
						<Route
							path="/about"
							element={
								<PageComingSoon
									setIsMobileNavBarShown={setIsNavListShown}
									pageTitle="About page"
								/>
							}
						/>
						<Route
							path="/resources"
							element={
								<PageComingSoon
									setIsMobileNavBarShown={setIsNavListShown}
									pageTitle="Resources page"
								/>
							}
						/>
					</Route>
				</Routes>
			</Flex>
		</>
	);
}
