import React from "react";
import { Header, Button, Icon, Body, Title, Subtitle } from "native-base";

interface IconButtonProp {
	name: string;
	onPress?: () => void;
}

const IconButton = ({ name, onPress }: IconButtonProp) => (
	<Button transparent onPress={onPress}>
		<Icon type="MaterialCommunityIcons" name={name} />
	</Button>
);

interface HeaderProp {
	leftIcon?: string | null;
	onLeftIconPress?: () => void;
	title: string;
	subtitle?: string | null;
	rightIcon?: string | null;
	onRightIconPress?: () => void;
	transparent?: boolean | null;
}

export default ({
	leftIcon,
	onLeftIconPress,
	title,
	subtitle,
	rightIcon,
	onRightIconPress,
	transparent,
}: HeaderProp) => (
	<Header transparent={!!transparent} noLeft={!leftIcon}>
		{!leftIcon ? null : (
			<IconButton name={leftIcon} onPress={onLeftIconPress} />
		)}
		<Body>
			<Title>{title}</Title>
			{!subtitle ? null : <Subtitle>{subtitle}</Subtitle>}
		</Body>
		{!rightIcon ? null : (
			<IconButton name={rightIcon} onPress={onRightIconPress} />
		)}
	</Header>
);
