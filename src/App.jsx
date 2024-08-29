/** @format */

import { Box } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/header/header";
import MainSection from "./components/main/main-section";

function App() {
	return (
		<Box bgColor="white">
			{/* header section */}
			<Header></Header>

			{/* main content */}
			<MainSection />
		</Box>
	);
}

export default App;
