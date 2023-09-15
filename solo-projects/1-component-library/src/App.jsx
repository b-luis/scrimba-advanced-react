import React from "react";
import { ComponentContainer, BadgeContainer, Title } from "./layout";
import { Badge } from "./components";

const App = () => {
	return (
		<ComponentContainer>
			<Title>Badges</Title>
			<BadgeContainer>
				<Badge color="white" shape="square" />
				<Badge color="red" shape="square" />
				<Badge color="yellow" shape="square" />
				<Badge color="green" shape="square" />
				<Badge color="blue" shape="square" />
				<Badge color="indigo" shape="square" />
			</BadgeContainer>
			<BadgeContainer>
				<Badge color="white" shape="pill" />
				<Badge color="red" shape="pill" />
				<Badge color="yellow" shape="pill" />
				<Badge color="green" shape="pill" />
				<Badge color="blue" shape="pill" />
				<Badge color="indigo" shape="pill" />
			</BadgeContainer>
			<Title>Banners</Title>
		</ComponentContainer>
	);
};

export default App;
