/** @format */

import "@fontsource-variable/inter";
import { extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";

const themes = {
	colors: {
		grey: {
			900: "#101928",
			500: "#667185",
			75: "#F7F9FC",
		},
		blue: {
			100: "#007BFF",
		},
		hero: "#F2F2F2",
	},
	fonts: {
		// h1: "PP Neue Montreal",
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
	components: {
		Link: {
			variants: {
				primary: {
					paddingX: "16px",
					paddingY: "8px",
					fontSize: "14px",
					lineHeight: "texts.primary",
					color: "#fff",
					fontWeight: "semibold",
					fontFamily: `"Inter", sans-serif`,
					bgColor: "blue.100",
					borderRadius: "8px",
				},
				outline: {
					border: "1px solid white",
					paddingX: "32px",
					paddingY: "12px",
				},
			},
		},
	},
};

const customTheme = extendTheme(themes);

// for fonts with @font-face
export const Font = () => (
	<Global
		styles={`
	@font-face {
        font-family: 'PP Neue Montreal';
		src: url('src/assets/fonts/pp-neue-montreal-cufonfonts-webfont/ppneuemontreal-medium.woff') format('woff');
		}
	`}
	/>
);

export default customTheme;
