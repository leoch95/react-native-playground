import React, { useState } from "react";
import { StyleSheet, Platform, View } from "react-native";
import Modal from "react-native-modal";
import { Card, Input, Button } from "react-native-elements";
import moment from "moment";
import DateTimePicker from "react-native-modal-datetime-picker";
import TodoListItemDTO from "../dto/TodoListItemDTO";

export default AddItemForm = ({ show, addTodoItem, dismiss }) => {
	const [title, setTitle] = useState("");
	const [deadline, setDeadline] = useState(new Date(Date.now()));
	const [showTimePicker, setShowTimePicker] = useState(false);

	const resetForm = () => {
		setTitle("");
		setDeadline(new Date(Date.now()));
		setShowTimePicker(false);
	};

	const updateDeadlineTime = (selectedTime) => {
		setShowTimePicker(Platform.OS === "ios");
		let d = deadline !== null ? deadline : new Date(Date.now());
		setDeadline(
			moment(d)
				.year(selectedTime.getFullYear())
				.month(selectedTime.getMonth())
				.date(selectedTime.getDate())
				.hour(selectedTime.getHours())
				.minute(selectedTime.getMinutes())
				.second(selectedTime.getSeconds())
				.millisecond(0)
				.toDate()
		);
	};

	return (
		<Modal
			isVisible={show}
			onBackButtonPress={dismiss}
			onBackdropPress={dismiss}
			onDismiss={resetForm}
		>
			<Card containerStyle={styles.container} title="New Todo Item">
				<View style={styles.subcontainer}>
					<Input
						label="Title"
						placeholder="Title"
						value={title}
						onChangeText={setTitle}
					/>
					<Input
						label="Deadlime"
						placeholder="Deadline"
						value={moment(deadline).format("YYYY-MM-DD HH:mm:ss")}
						rightIcon={{
							type: "font-awesome",
							name: "calendar-check-o",
							size: 20,
							onPress: () => setShowTimePicker(true),
						}}
						disabled
					/>
				</View>
				<View style={styles.subcontainer}>
					<Button
						style={styles.submitButton}
						title="Add"
						type="outline"
						onPress={() =>
							addTodoItem(
								new TodoListItemDTO(null, title, deadline)
							)
						}
					/>
				</View>
			</Card>
			<DateTimePicker
				isVisible={showTimePicker}
				mode="datetime"
				date={deadline}
				minimumDate={new Date(Date.now())}
				onChange={() => setShowTimePicker(Platform.OS === "ios")}
				onConfirm={updateDeadlineTime}
				onCancel={() => setShowTimePicker(false)}
			/>
		</Modal>
	);
};

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
		borderRadius: 30,
	},
	subcontainer: {
		padding: 10,
	},
	submitButton: {
		borderRadius: 15,
	},
});
