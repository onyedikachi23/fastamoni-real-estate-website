/** @format */

import { Box, Button, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/keyboard";
import {
	Navigation,
	Pagination,
	Scrollbar,
	Keyboard,
	Autoplay,
} from "swiper/modules";
import { useEffect, useRef, useState } from "react";

export default function SlideListsSwiper({ slides }) {
	const [currentNavBtn, setCurrentNavBtn] = useState("next");
	const swiperRef = useRef(null);

	function handleNavBtnChange(navBtn) {
		if (navBtn === "prev") {
			swiperRef.current?.slidePrev();
			setCurrentNavBtn(navBtn);
		} else if (navBtn === "next") {
			swiperRef.current?.slideNext();
			setCurrentNavBtn(navBtn);
		}
	}

	// change currentNavBtn based on extreme sides position
	useEffect(() => {
		handleSwiperEndsChange();
	}, [currentNavBtn]);

	// change currentNavBtn based on extreme sides position
	function handleSwiperEndsChange() {
		if (swiperRef.current?.isBeginning) {
			setCurrentNavBtn("next");
		} else if (swiperRef.current?.isEnd) {
			setCurrentNavBtn("prev");
		}
	}

	return (
		<Box>
			<Swiper
				breakpoints={{
					768: {
						slidesPerView: 2,
						spaceBetween: 35,
					},
					1280: {
						slidesPerView: 3,
						spaceBetween: 45,
					},
					// 992: {
					// 	slidesPerView: 4,
					// 	spaceBetween: 55,
					// },
				}}
				ref={swiperRef}
				onBeforeInit={(swiper) => {
					swiperRef.current = swiper;
				}}
				// change currentNavBtn based on extreme sides position
				onSlideChangeTransitionStart={() => {
					handleSwiperEndsChange();
				}}
				rewind={true}
				modules={[
					Navigation,
					Pagination,
					Scrollbar,
					Keyboard,
					Autoplay,
				]}
				spaceBetween={25}
				slidesPerView={1}
				autoplay={{
					delay: 3000,
					disableOnInteraction: true,
					pauseOnMouseEnter: true,
				}}
				keyboard={{
					enabled: true,
				}}
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}>
				{/* slides */}
				{slides.map((slide, index) => (
					<SwiperSlide key={index}>{slide}</SwiperSlide>
				))}
			</Swiper>

			{/* nav buttons */}
			<Flex justifyContent="space-between" marginTop={4}>
				{/* prevBtn */}
				<Button
					onClick={() => {
						handleNavBtnChange("prev");

						// call handleSwiperEndsChange() to undo any changes made by handleNavBtnChange() at slides alternate ends
						handleSwiperEndsChange();
					}}
					bgColor={
						currentNavBtn === "prev" ? "blue.100" : "grey.light"
					}
					color={
						currentNavBtn === "prev" ? "white" : "grey.opacityLight"
					}
					transition="all .25s ease-in-out"
					_hover={{
						bgColor: "blue.100",
						transform: "scale(1.2)",
						color: "white",
					}}
					borderRadius="50%"
					aspectRatio="1">
					<i className="ri-arrow-left-line"></i>
				</Button>

				{/* nextBtn */}
				<Button
					onClick={() => {
						handleNavBtnChange("next");

						// call handleSwiperEndsChange() to undo any changes made by handleNavBtnChange() at slides alternate ends
						handleSwiperEndsChange();
					}}
					bgColor={
						currentNavBtn === "next" ? "blue.100" : "grey.light"
					}
					color={
						currentNavBtn === "next" ? "white" : "grey.opacityLight"
					}
					transition="all .25s ease-in-out"
					_hover={{
						bgColor: "blue.100",
						transform: "scale(1.2)",
						color: "white",
					}}
					borderRadius="50%"
					aspectRatio="1">
					<i className="ri-arrow-right-line"></i>
				</Button>
			</Flex>
		</Box>
	);
}
