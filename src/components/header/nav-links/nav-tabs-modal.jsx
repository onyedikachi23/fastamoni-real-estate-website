/** @format */

import { Tab, TabList, Tabs } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavTabModal({
	isNavListShown,
	setIsNavListShown,
	isNavBarHeightScrolled,
}) {
	const [selectedTab, setSelectedTab] = useState(null);
	const modalRef = useRef(null);

	// create a useEffect for handling outside modal click events
	useEffect(() => {
		if (isNavListShown) {
			window.addEventListener("click", (event) => {
				handleClickOutside(event);
			});
		}

		// Cleanup: Remove the event listener when component unmounts
		return () => {
			window.removeEventListener("click", handleClickOutside);
		};
	}, [isNavListShown]);

	function handleOnClose() {
		setIsNavListShown(false);
	}

	function handleClickOutside(event) {
		if (!modalRef.current?.contains(event.target)) handleOnClose();
	}

	return (
		<Tabs
			borderBottom={{
				smm: isNavBarHeightScrolled
					? "1px solid hsla(219, 33%, 17%, 1)"
					: "none",
			}}
			index={selectedTab}
			onChange={(index) => setSelectedTab(index)}
			variant="unstyled"
			width={{
				base: "100vw",
				smm: "unset",
			}}
			height={{
				base: "100vh",
				smm: "unset",
			}}
			transition="all 0.5s ease-in-out, border-bottom-width 0s linear"
			opacity={{
				base: isNavListShown ? "1" : "0",
				smm: "1",
			}}
			bg={{
				base: "rgba(0, 0, 0, 0.5)",
				smm: "unset",
			}}
			transform={{
				base: isNavListShown ? "translateX(0)" : "translateX(-100%)",
				smm: "translateX(0)",
			}}
			position={{
				base: "absolute",
				smm: "unset",
			}}
			top="0"
			left={0}>
			
			{/* nav headers */}
			<TabList
				ref={modalRef}
				position={{
					base: "absolute",
					smm: "unset",
				}}
				top="70"
				left={2}
				width="fit-content"
				bgColor="white"
				borderRadius="md"
				flexDirection={{
					base: "column",
					smm: "row",
				}}>
				<Tab
					padding={0}
					transition="border-bottom-color 0.25s ease-in-out">
					<NavLink
						className={({ isActive }) =>
							isActive || selectedTab === 0
								? "active nav-link"
								: "nav-link"
						}
						to="/solutions">
						Solutions
						<i className="ri-arrow-down-s-line"></i>
					</NavLink>
				</Tab>

				<Tab
					padding={0}
					transition="border-bottom-color 0.25s ease-in-out">
					<NavLink
						className={({ isActive }) =>
							isActive || selectedTab === 1
								? "active nav-link"
								: "nav-link"
						}
						to="/how-it-works">
						How it works
						<i className="ri-arrow-down-s-line"></i>
					</NavLink>
				</Tab>

				<Tab
					padding={0}
					transition="border-bottom-color 0.25s ease-in-out">
					<NavLink
						className={({ isActive }) =>
							isActive || selectedTab === 2
								? "active nav-link"
								: "nav-link"
						}
						to="/about">
						About
						<i className="ri-arrow-down-s-line"></i>
					</NavLink>
				</Tab>

				<Tab
					padding={0}
					transition="border-bottom-color 0.25s ease-in-out">
					<NavLink
						className={({ isActive }) =>
							isActive || selectedTab === 3
								? "active nav-link"
								: "nav-link"
						}
						to="/resources">
						Resources
					</NavLink>
				</Tab>
			</TabList>
		</Tabs>
	);
}
