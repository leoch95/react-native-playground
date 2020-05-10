import React from "react";
import { StyleSheet, Slider } from "react-native";
import { View, H3, Text } from "native-base";

interface CounterStepSetterProp {
	counterStep: number;
	updateStep: (step: number) => void;
}

const CounterStepSetter = ({
	counterStep,
	updateStep,
}: CounterStepSetterProp) => (
	<View padder style={styles.container}>
		<View padder style={styles.titleContainer}>
		<Text style={styles.titleText}>Counter step</Text>
		</View>
		<Slider
			value={counterStep}
			step={1}
			minimumValue={1}
			maximumValue={20}
			onSlidingComplete={updateStep}
		/>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "stretch",
		justifyContent: "center",
	},
	titleContainer: {
		flex: 1,
		alignItems: "stretch",
		justifyContent: "center",
	},
	titleText: {
		// color:
		fontSize: 18
	},
});

export default CounterStepSetter;
