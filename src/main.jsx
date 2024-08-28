/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import themes from "./styles/themes.js";

const theme = extendBaseTheme({ themes });

createRoot(document.getElementById("root")).render(
	<StrictMode>
		{/* ChakraBaseProvider to use Chakra UI library */}
		<ChakraBaseProvider theme={theme}>
			<App />
		</ChakraBaseProvider>
	</StrictMode>
);
