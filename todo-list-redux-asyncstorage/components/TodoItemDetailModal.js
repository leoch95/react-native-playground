import React from "react";
import { StyleSheet, View } from "react-native";
import Modal from "react-native-modal";
import { Card, Input, CheckBox, Button } from "react-native-elements";
import moment from "moment";

export default TodoItemDetailModal = ({ show, item, dismiss }) => (
	<Modal
		isVisible={show}
		onBackButtonPress={dismiss}
		onBackdropPress={dismiss}
	>
		<Card containerStyle={styles.container} title="Todo Item Details">
			<View styles={styles.subcontainer}>
				<Input label="Title" value={item.title} disabled />
				<Input
					label="Deadline"
					value={moment(item.deadline).format("YYYY-MM-DD HH:mm:ss")}
					disabled
				/>
				<CheckBox
					checked={item.completed}
					title={
						item.completed
							? "This item is completed"
							: "This item is not completed"
					}
					disabled
				/>
			</View>
			<View style={styles.subcontainer}>
				<Button
					style={styles.closeButton}
					title="Close"
					type="outline"
					onPress={dismiss}
				/>
			</View>
		</Card>
	</Modal>
);

const styles = StyleSheet.create({
	center: {
		alignItems: "center",
		justifyContent: "center",
	},
	container: {
		// backgroundColor: "#dcdcdc",
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
	},
	subcontainer: {
		padding: 10,
	},
	closeButton: {
		borderRadius: 15,
	},
});
