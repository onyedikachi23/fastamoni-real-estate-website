/** @format */

import {
	Box,
	Button,
	Input,
	InputGroup,
	InputRightAddon,
	Select,
} from "@chakra-ui/react";

export default function PropertiesSearch() {
	return (
		<Box>
			<InputGroup color="grey.navGray">
				<Input
					type="search"
					placeholder="Search property state or city"
				/>
				<InputRightAddon>
					<Select
						variant="unstyled"
						placeholder="Search all filters"
						cursor="pointer"
						icon={
							<Button
								bgColor="blue.100"
								color="#fff"
								paddingY="4">
								<i
									style={{
										color: "#fff",
									}}
									className="ri-equalizer-2-fill"></i>
							</Button>
						}
						fontSize="14">
						<option value="lagos">Lagos</option>
						<option value="abuja">Abuja</option>
						<option value="enugu">Enugu</option>
					</Select>
				</InputRightAddon>
			</InputGroup>
		</Box>
	);
}
