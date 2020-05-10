import React, { useState } from "react";
import {
	StyleSheet,
	// Text,
	View,
} from "react-native";
import TodoListItemDTO from "../dto/todoListItemDTO";
import { Input } from "react-native-elements";

export default SearchInput = ({ submitEditing }) => {
	const [title, setTitle] = useState("");

	return (
		<View>
			<Input
				containerStyle={styles.input}
				leftIcon={{ type: "font-awesome", name: "search" }}
				leftIconContainerStyle={{paddingRight: 5}}
				// secureTextEntry
				value={title}
				placeholder={"Search..."}
				onChangeText={setTitle}
				onSubmitEditing={() => {
					submitEditing(new TodoListItemDTO(title, Date.now()));
					setTitle("");
				}}
				returnKeyType="search"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		borderColor: "grey",
		// borderRadius: 5,
		borderStyle: "solid",
		borderWidth: 1,
		padding: 10,
		// flex: 1,
		// backgroundColor: "#fff",
		// alignItems: "stretch",
		// justifyContent: "stretch",
	},
});
