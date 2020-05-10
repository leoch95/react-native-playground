import React, { useState } from "react";
import { View, Button, Text, Toast } from "native-base";
import { withFormik, FormikProps, FormikBag } from "formik";
import { Input } from "react-native-elements";
import * as Yup from "yup";
import { DatetimeUtils } from "../../utils";
import { TodoItem } from "../../dto";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Platform } from "react-native";

interface FormProp {
	addItem: (item: TodoItem) => void;
	navigation: StackNavigationProp<ParamListBase>;
}

interface FormValues {
	title: string;
	deadlineDateTime: string;
	location: string;
	description: string;
}

const validationSchema = Yup.object().shape({
	title: Yup.string().label("Title").required("Please enter a title"),
	deadlineDateTime: Yup.date()
		.label("Deadline")
		.required("Please select the time of deadline")
		.min(DatetimeUtils.now(), "Please select a future time"),
	location: Yup.string().label("Location").notRequired().nullable(),
	description: Yup.string().label("Description").notRequired().nullable(),
});

const InnerForm = ({
	touched,
	errors,
	isSubmitting,
	values,
	handleBlur,
	handleChange,
	handleSubmit,
	handleReset,
	setFieldValue,
	setFieldTouched,
}: FormikProps<FormValues>) => {
	const [showDatetimePicker, setShowDatetimePicker] = useState<boolean>(
		false
	);

	const displayDatetimePicker = () => setShowDatetimePicker(true);

	const hideDatetimePicker = () => setShowDatetimePicker(false);

	const onDatetimePicked = (datetime: Date | number | string) => {
		setShowDatetimePicker(Platform.OS === "ios");
		setFieldTouched("deadlineDateTime");
		setFieldValue(
			"deadlineDateTime",
			DatetimeUtils.formatDateTimeLocalized(datetime),
			true
		);
	};

	return (
		<View padder>
			<View padder>
				<Input
					label="Title"
					value={values.title}
					onChangeText={handleChange("title")}
					onBlur={handleBlur("title")}
					errorStyle={{ color: "#ff0000" }}
					errorMessage={
						!!(touched.title && errors.title)
							? errors.title
							: undefined
					}
					editable={!isSubmitting}
					autoFocus
				/>
			</View>
			<View padder>
				<Input
					label="Deadline"
					value={values.deadlineDateTime}
					onBlur={handleBlur("deadlineDateTime")}
					errorStyle={{ color: "#ff0000" }}
					errorMessage={
						!!(touched.deadlineDateTime && errors.deadlineDateTime)
							? errors.deadlineDateTime
							: undefined
					}
					editable={!isSubmitting}
					onFocus={displayDatetimePicker}
				/>
				<DateTimePickerModal
					isVisible={showDatetimePicker}
					mode="datetime"
					onConfirm={onDatetimePicked}
					onCancel={hideDatetimePicker}
				/>
			</View>
			<View padder>
				<Input
					label="Location"
					value={values.location}
					onChangeText={handleChange("location")}
					onBlur={handleBlur("location")}
					errorStyle={{ color: "#ff0000" }}
					errorMessage={
						!!(touched.location && errors.location)
							? errors.location
							: undefined
					}
					editable={!isSubmitting}
				/>
			</View>
			<View padder>
				<Input
					label="Description"
					value={values.description}
					onChangeText={handleChange("description")}
					onBlur={handleBlur("description")}
					errorStyle={{ color: "#ff0000" }}
					errorMessage={
						!!(touched.description && errors.description)
							? errors.description
							: undefined
					}
					editable={!isSubmitting}
					multiline
				/>
			</View>
			<View
				padder
				style={{
					flexDirection: "row",
					justifyContent: "space-around",
				}}
			>
				<Button light onPress={handleReset}>
					<Text>Reset</Text>
				</Button>
				<Button
					primary
					onPress={handleSubmit}
					disabled={
						isSubmitting ||
						!!!touched.title ||
						!!errors.title ||
						!!!touched.deadlineDateTime ||
						!!errors.deadlineDateTime ||
						!!errors.location ||
						!!errors.description
					}
				>
					<Text>Submit</Text>
				</Button>
			</View>
		</View>
	);
};

const FormikForm = withFormik<FormProp, FormValues>({
	validationSchema: validationSchema,
	validateOnBlur: true,
	validateOnChange: false,
	handleSubmit: (
		{ title, deadlineDateTime, location, description }: FormValues,
		{ props, setSubmitting, resetForm }: FormikBag<FormProp, FormValues>
	) => {
		setSubmitting(true);
		let { addItem, navigation } = props;
		addItem(
			new TodoItem(
				title,
				new Date(deadlineDateTime),
				location,
				description
			)
		);
		setSubmitting(false);
		resetForm();
		Toast.show({
			text: "Item added",
		});
		navigation.goBack();
	},
})(InnerForm);

export default FormikForm;
