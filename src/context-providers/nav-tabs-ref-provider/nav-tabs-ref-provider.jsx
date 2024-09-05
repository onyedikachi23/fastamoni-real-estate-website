/** @format */

import { createContext, useContext, useRef } from "react";

const [ProjectTabsValueContext, SelectedTabIndexSetterContext] = [
	createContext(null),
	createContext(null),
];

export default function ProjectTabsContextProvider({ children }) {
	// to access and update ProjectTabs contexts
	// will be updated by the FeaturedProjects component;
	const projectTabsElementsRef = useRef(null);
	const selectedTabIndexSetterRef = useRef(null);
	return (
		<ProjectTabsValueContext.Provider value={projectTabsElementsRef}>
			<SelectedTabIndexSetterContext.Provider
				value={selectedTabIndexSetterRef}>
				{children}
			</SelectedTabIndexSetterContext.Provider>
		</ProjectTabsValueContext.Provider>
	);
}

// custom hook to easily access the contexts value
export function useProjectTabsElementsRef() {
	return useContext(ProjectTabsValueContext);
}

export function useSelectedTabIndexSetterRef() {
	return useContext(SelectedTabIndexSetterContext);
}
