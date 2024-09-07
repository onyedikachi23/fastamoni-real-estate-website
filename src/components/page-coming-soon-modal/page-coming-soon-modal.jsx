/** @format */

import {
	Box,
	Button,
	Heading,
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";

export default function PageComingSoon({ setIsMobileNavBarShown, pageTitle }) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	useEffect(() => {
		// When the component mounts, open the modal
		onOpen();
		setIsMobileNavBarShown && setIsMobileNavBarShown(false);

		// close after 3s
		const closeTimeout = setTimeout(() => {
			onClose();
		}, 3000);

		return () => {
			clearTimeout(closeTimeout);
		};
	}, [onOpen, onClose, setIsMobileNavBarShown, pageTitle]);

	return (
		<Box>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				closeOnEsc
				closeOnOverlayClick>
				<ModalOverlay />

				<ModalContent position="relative">
					<ModalHeader>
						<Heading as="h2" color="white">
							{pageTitle}
						</Heading>
					</ModalHeader>
					<Button
						onClick={() => {
							onClose();
						}}
						position="absolute"
						top="-1rem"
						right={4}
						transform="translate(0,-50%)"
						// zIndex={100}
						display={{
							base: "inline",
							smm: "none",
						}}
						height="unset"
						padding=".5rem 1rem"
						minWidth="unset">
						{isOpen ? (
							<i className="ri-close-line"></i>
						) : (
							<i className="ri-menu-line"></i>
						)}
					</Button>

					<ModalBody>
						<Text as="p" color="white">
							Coming soon!
						</Text>
					</ModalBody>
				</ModalContent>
			</Modal>
		</Box>
	);
}
import base from "@emotion/styled/base";
import { color, transform } from "framer-motion";
import React from "react";
