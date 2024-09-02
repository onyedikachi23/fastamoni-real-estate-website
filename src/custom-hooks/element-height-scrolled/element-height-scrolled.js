/** @format */

import { useCallback, useEffect, useState } from "react";

export default function useIsElementHeightScrolled(element) {
	// element must be a HTML element referenced using useRef.current

	const [isTotalHeightScrolled, setIsTotalHeightScrolled] = useState(false);

	// to check if element is a valid html element
	function isElement(element) {
		return element instanceof Element || element instanceof Document;

		/*
        got this simple solution from Stack Overflow:
        https://stackoverflow.com/a/36894871/21363556
        */
	}

	// check if the window's scrolled height has reached element's total height
	const handleScroll = useCallback(() => {
		const scrolledHeight = document.documentElement.scrollTop;
		const elementHeight = element?.getBoundingClientRect().height;

		setIsTotalHeightScrolled(scrolledHeight >= elementHeight);
	}, [element]);

	// add event listener for window scroll event
	useEffect(() => {
		// element must be a HTML element referenced using useRef.current
		if (!isElement(element)) {
			console.error(
				"isElement: The provided parameter not yet a valid DOM element"
			);
			return;
		} else console.log("isElement: parameter correct");

		// call handleScroll on initial render
		handleScroll();

		window.addEventListener("scroll", handleScroll);

		// return a cleanup function that removes the scroll event listener when the component is unmounted
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [element]);

	return isTotalHeightScrolled;
}
