/** @format */

import { getRandomInt } from "../helper-functions/helper-functions";

const projectsDescriptions = [
	{
		// title: "Grenadines Heights",
		projectBannerImg: "/assets/images/project-lagos-banner.png",
		houseDescription: {
			bathRooms: getRandomInt(10, 1),
			bedRooms: getRandomInt(10, 1),
		},
		likes: getRandomInt(1000),
	},
	{
		// title: "GRA Enugu",
		projectBannerImg: "/assets/images/project-enugu-banner.jpg",
		houseDescription: {
			bathRooms: getRandomInt(10, 1),
			bedRooms: getRandomInt(10, 1),
		},
		likes: getRandomInt(1000),
	},
	{
		// title: "Grenadines Heights",
		projectBannerImg: "/assets/images/project-lagos-banner.png",
		houseDescription: {
			bathRooms: getRandomInt(10, 1),
			bedRooms: getRandomInt(10, 1),
		},
		likes: getRandomInt(1000),
	},
	{
		// title: "GRA Enugu",
		projectBannerImg: "/assets/images/project-enugu-banner.jpg",
		houseDescription: {
			bathRooms: getRandomInt(10, 1),
			bedRooms: getRandomInt(10, 1),
		},
		likes: getRandomInt(1000),
	},
	{
		// title: "Grenadines Heights",
		projectBannerImg: "/assets/images/project-lagos-banner.png",
		houseDescription: {
			bathRooms: getRandomInt(10, 1),
			bedRooms: getRandomInt(10, 1),
		},
		likes: getRandomInt(1000),
	},
	{
		// title: "GRA Enugu",
		projectBannerImg: "/assets/images/project-enugu-banner.jpg",
		houseDescription: {
			bathRooms: getRandomInt(10, 1),
			bedRooms: getRandomInt(10, 1),
		},
		likes: getRandomInt(1000),
	},
];

const projectsLocations = [
	"Lekki Gardens",
	"Ocean lake",
	"Swiss village",
	"Banna Max express",
];

const projectsData = {
	projectsDescriptions,
	projectsLocations,
};

export default projectsData;
