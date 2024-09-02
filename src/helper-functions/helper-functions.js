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
