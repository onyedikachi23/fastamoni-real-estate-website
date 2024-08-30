/** @format */

import "@fontsource-variable/inter";
import { extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import base from "@emotion/styled/base";

const themes = {
	colors: {
		grey: {
			900: "#101928",
			500: "#667185",
			75: "#F7F9FC",
			navGray: "#7D7F88",
			black: "hsla(160, 82%, 2%, 1)",
			light: "hsla(0, 0%, 96%, 0.64)",
			opacityLight: "hsla(0, 0%, 17%, 0.6)",
		},
		blue: {
			100: "#007BFF",
			900: "hsla(234, 45%, 12%, 1)",
		},
		hero: "#F2F2F2",
		sectionHeading: "hsla(0, 0%, 0%, 1)",
		sectionDescription: "hsla(219, 13%, 46%, 1)",
		white: {
			100: "hsla(0, 0%, 100%, 1)",
			200: "hsla(0, 0%, 97%, 1)",
		},
	},
	fonts: {
		// h1: "PP Neue Montreal",
	},
	fontSizes: {
		texts: {
			primary: "14px",
			secondary: "12px",
			tabs: "10px",
		},
	},
	lineHeights: {
		texts: {
			primary: "1.45",
			primaryXL: "1.6"
		},
	},
	spaces: {
		sm: "8px",
	},
	breakpoints: {
		base: "0em", // 0px
		sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
		smm: "40em", // 640px
		md: "48em", // ~768px
		lg: "62em", // ~992px
		xl: "80em", // ~1280px
		"2xl": "96em", // ~1536px
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
					width: "fit-content",
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
