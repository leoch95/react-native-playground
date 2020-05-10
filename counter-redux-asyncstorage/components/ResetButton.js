import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import { Dispatch } from "redux";
import { reset } from "../store/counter";
import { connect } from "react-redux";
import { State } from "../store";

interface ResetButtonProps {
	reset: () => void;
}

const ResetButton = ({ reset }: ResetButtonProps) => (
	<View style={styles.container}>
		<Button title="Reset" type="outline" onPress={reset} />
	</View>
);

const styles = StyleSheet.create({
	center: {
		alignItems: "center",
		justifyContent: "center",
	},
	container: {
		backgroundColor: "#ffffff",
		flex: 1,
		flexDirection: "column",
		// flexWrap: "wrap",
		alignItems: "stretch",
		justifyContent: "center",
		padding: 10,
	},
});

const mapStateToProps = (state: State) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	reset: () => dispatch(reset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetButton);
