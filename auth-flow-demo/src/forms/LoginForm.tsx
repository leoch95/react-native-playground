import React from "react";
import { View, Button, Text } from "native-base";
import { withFormik, FormikProps, FormikBag } from "formik";
import { Input } from "react-native-elements";
import * as Yup from "yup";
import { LoginCredentials } from "../context/AuthContext";

interface LoginFromProp {
	login: (credentials: LoginCredentials) => void;
}

const validationSchema = Yup.object().shape({
	username: Yup.string()
		.label("Username")
		.required("Please enter your username"),
	password: Yup.string()
		.label("Password")
		.required("Please enter your password"),
});

interface TextInputProp {
	label: string;
	formikKey: keyof LoginCredentials;
	props: FormikProps<LoginCredentials>;
}

const TextInput = ({ label, formikKey, props }: TextInputProp) => {
	let {
		touched,
		errors,
		isSubmitting,
		values,
		handleBlur,
		handleChange,
	} = props;
	return (
		<View padder>
			<Input
				label={label}
				value={values[formikKey]}
				onChangeText={handleChange(formikKey)}
				onBlur={handleBlur(formikKey)}
				errorStyle={{ color: "#ff0000" }}
				errorMessage={
					!!(touched[formikKey] && errors[formikKey])
						? errors[formikKey]
						: undefined
				}
				editable={!isSubmitting}
			/>
		</View>
	);
};

const LoginFrom = (props: FormikProps<LoginCredentials>) => {
	let { touched, errors, isSubmitting, handleSubmit, handleReset } = props;
	return (
		<View padder>
			<TextInput label="Username" formikKey="username" props={props} />
			<TextInput label="Password" formikKey="password" props={props} />
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
						!!!touched.username ||
						!!errors.username ||
						!!!touched.password ||
						!!errors.password
					}
				>
					<Text>Submit</Text>
				</Button>
			</View>
		</View>
	);
};

export default withFormik<LoginFromProp, LoginCredentials>({
	validateOnBlur: true,
	validateOnChange: false,
	validationSchema,
	handleSubmit: (
		credentials: LoginCredentials,
		{
			props,
			setSubmitting,
			resetForm,
		}: FormikBag<LoginFromProp, LoginCredentials>
	) => {
		let { login } = props;
		setSubmitting(true);
		login(credentials);
		setSubmitting(false);
		resetForm();
	},
})(LoginFrom);
