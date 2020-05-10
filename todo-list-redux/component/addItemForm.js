import React, { useState } from "react";
import {
	Platform,
	StyleSheet,
	View,
	// Modal,
} from "react-native";
import TodoListItemDTO from "../dto/todoListItemDTO";
import { Input, Divider, Button, Text, Card } from "react-native-elements";
import Moment from "moment";
import Icon from "react-native-vector-icons/FontAwesome";
import Modal from "react-native-modal";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default AddItemForm = ({ display, addItem, closeForm }) => {
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
			Moment(d)
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
			visible={display}
			onDismiss={resetForm}
			onBackButtonPress={() => {
				closeForm();
			}}
			onBackdropPress={() => {
				closeForm();
			}}
		>
			<Card title="New Item" containerStyle={{ borderRadius: 20 }}>
				<View style={{ paddingBottom: 10 }}>
					<Input
						label="Title"
						placeholder="Title"
						value={title}
						onChangeText={setTitle}
					/>
					<Input
						label="Deadline"
						placeholder="Deadline"
						value={
							deadline === null
								? ""
								: Moment(deadline).format("YYYY-MM-DD HH:mm:ss")
						}
						onChangeText={setTitle}
						rightIcon={
							<Icon
								name="calendar-check-o"
								size={20}
								onPress={() => setShowTimePicker(true)}
							/>
						}
						disabled
					/>
				</View>
				<Divider />
				<View style={{ padding: 10, alignSelf: "center" }}>
					<Button
						title="Add"
						// buttonStyle={{ padding: 10, alignSelf: "center" }}
						onPress={() => {
							addItem(new TodoListItemDTO(title, deadline));
							resetForm();
							closeForm();
						}}
					/>
				</View>
			</Card>
			<DateTimePickerModal
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
	raised: {
		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		elevation: 2, // Android	},
	},
});
