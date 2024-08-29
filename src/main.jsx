/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import customTheme from "./styles/themes.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Router>
			{/* ChakraProvider to use Chakra UI library */}
			<ChakraProvider theme={customTheme}>
				<App />
			</ChakraProvider>
		</Router>
	</StrictMode>
);
