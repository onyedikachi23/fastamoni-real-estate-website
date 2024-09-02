/** @format */

export function getRandomInt(max, min) {
	// if max and/or min is nullish, convert to zero
	// the order shouldn't matter
	if (min > max) {
		[max, min] = [min, max];
	}

	min = min ? Math.ceil(min) : 0;
	max = max ? Math.floor(max) : 0;
	return Math.floor(Math.random() * (max - min + 1)) + min;
	// return Math.floor(Math.random() * max);
}

export function isElement(element) {
	return element instanceof Element || element instanceof Document;

	/*
        got this simple solution from Stack Overflow:
        https://stackoverflow.com/a/36894871/21363556
        */
}

export function scrollElIntoView(element) {
	// check if its a valid html element
	if (!isElement(element)) {
		console.error(
			"scrollElIntoView: The provided parameter not yet a valid DOM element"
		);
		return;
	}

	element.scrollIntoView({
		behavior: "smooth",
		block: "start",
		inline: "nearest",
	});
}
