/** @format */

import { Box } from "@chakra-ui/react";
import EstateProject from "./estate-project-item";
import SlideListsSwiper from "../../../slide-lists-swiper/slide-lists-swiper";

export default function EstateProjectsList() {
	const estateProjectsList = [
		<EstateProject
			key={1}
			bgImgUrl="/assets/images/estate-projects-banner.png"
		/>,

		<EstateProject
			key={2}
			bgImgUrl="/assets/images/project-enugu-banner.jpg"
		/>,

		<EstateProject
			key={3}
			bgImgUrl="/assets/images/estate-projects-banner.png"
		/>,

		<EstateProject
			key={4}
			bgImgUrl="/assets/images/project-enugu-banner.jpg"
		/>,
	];

	return (
		<Box>
			<SlideListsSwiper slides={estateProjectsList} />
		</Box>
	);
}
