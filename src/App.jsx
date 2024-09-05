/** @format */

import { Box } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/header/header";
import MainSection from "./components/main/main-section";
import Footer from "./components/footer/footer";
import ProjectTabsContextProvider from "./context-providers/nav-tabs-ref-provider/nav-tabs-ref-provider";

function App() {
	return (
		<Box bgColor="white">
			{/* header section */}
			<Header></Header>

			{/* main content */}
			<MainSection />

			{/* footer section */}
			<Footer />
		</Box>
	);
}

export default App;
