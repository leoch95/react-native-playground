import React from "react";
import { View, StyleSheet } from "react-native";
import { Slider, Text } from "react-native-elements";
import { State } from "../store";
import { Dispatch } from "redux";
import { updateUnit } from "../store/counter";
import { connect } from "react-redux";

interface UpdateUnitProps {
	unit: number;
	updateUnit: (unit: number) => void;
}

const UpdateUnit = ({ unit, updateUnit }: UpdateUnitProps) => (
	<View style={styles.container}>
		<Slider
			value={unit}
			onValueChange={updateUnit}
			minimumValue={0}
			maximumValue={20}
			step={1}
			style={[]}
		/>
		<Text>{"Current step up/down unit : " + unit}</Text>
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

const mapStateToProps = (state: State) => ({ unit: state.counter.unit });

const mapDispatchToProps = (dispatch: Dispatch) => ({
	updateUnit: (unit: number) => dispatch(updateUnit(unit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUnit);
