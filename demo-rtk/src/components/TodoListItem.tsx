import React, { useState, useEffect } from "react";
import { TodoItem } from "../dto";
import {
	ListItem,
	Left,
	Button,
	Icon,
	Body,
	Text,
	Right,
	View,
} from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";
import { DatetimeUtils } from "../utils";
import { SwipeRow } from "react-native-swipe-list-view";

interface TodoListItemProp {
	item: TodoItem;
	removeItem: (id: number) => void;
	toggleItem: (id: number) => void;
	onTouch?: () => void;
}

const TodoListItem = ({
	item,
	removeItem,
	toggleItem,
	onTouch,
}: TodoListItemProp) => {
	const [checked, setChecked] = useState<boolean>(item.isCompleted);

	const toggleChecked = () => toggleItem(item.id);

	useEffect(() => {
		setChecked(item.isCompleted);
	}, [item]);

	const removeThis = () => removeItem(item.id);

	const FrontComponent = () => (
		<ListItem noIndent icon style={{ backgroundColor: "#ffffff" }}>
			<Left>
				<Button onPress={toggleChecked} transparent>
					{checked ? <CheckedIcon /> : <UncheckedIcon />}
				</Button>
			</Left>
			<Body>
				<TouchableOpacity
					onPress={onTouch}
					style={{ flexWrap: "wrap" }}
				>
					<Text>{item.title}</Text>
				</TouchableOpacity>
			</Body>
			<Right>
				<View>
					<Text note>
						{DatetimeUtils.formatDateLocalized(
							item.deadlineDateTime
						)}
					</Text>
					<Text note>
						{DatetimeUtils.formatTimeLocalized(
							item.deadlineDateTime
						)}
					</Text>
				</View>
			</Right>
		</ListItem>
	);

	interface HiddenComponentProp {
		onRightPress?: () => void;
	}

	const HiddenComponent = ({ onRightPress }: HiddenComponentProp) => (
		<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
			<Button success>
				<Icon
					type="MaterialCommunityIcons"
					name="trash-can"
					color="#ffffff"
				/>
			</Button>
			<Button danger onPress={onRightPress}>
				<Icon
					type="MaterialCommunityIcons"
					name="trash-can"
					color="#ffffff"
				/>
			</Button>
		</View>
	);

	return (
		<SwipeRow disableRightSwipe rightOpenValue={-54}>
			<HiddenComponent onRightPress={removeThis} />
			<FrontComponent />
		</SwipeRow>
	);
};

const UncheckedIcon = () => (
	<Icon
		type="MaterialCommunityIcons"
		name="checkbox-blank-outline"
		active={false}
		style={[styles.checkbox, styles.unchecked]}
	/>
);

const CheckedIcon = () => (
	<Icon
		type="MaterialCommunityIcons"
		name="check-box-outline"
		active
		style={[styles.checkbox, styles.checked]}
	/>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "stretch",
		justifyContent: "center",
	},
	checkbox: { fontSize: 20 },
	checked: {
		color: "#2e8b57",
	},
	unchecked: {},
	titleText: {
		// color:
		fontSize: 18,
	},
});

export default TodoListItem;
