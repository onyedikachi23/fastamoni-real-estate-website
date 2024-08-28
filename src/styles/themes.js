/** @format */

import { extendTheme } from "@chakra-ui/react";

const themes = {
	colors: {
		grey: {
			900: "#101928",
			500: "#667185",
			75: "#F7F9FC",
		},
	},
	fontSize: {
		texts: {
			primary: "14px",
		},
	},
	lineHeight: {
		texts: {
			primary: "1.45",
		},
	},
};

const customTheme = extendTheme({ themes });

export default customTheme;
