import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { increment, decrement } from "../store/counter";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { State } from "../store";

interface CounterProps {
	count: number;
	increment: () => void;
	decrement: () => void;
}

const iconSize: number = 30;

const iconColor: string = "#708090";

const Counter = ({ count, increment, decrement }: CounterProps) => (
	<View style={styles.container}>
		<TouchableOpacity
			style={[styles.plusMinusButton, styles.center]}
			onPress={decrement}
		>
			<Icon name="minus-square" size={iconSize} color={iconColor} />
		</TouchableOpacity>
		<View style={[styles.counterDisplay, styles.center]}>
			<Text h1>{count}</Text>
		</View>
		<TouchableOpacity
			style={[styles.plusMinusButton, styles.center]}
			onPress={increment}
		>
			<Icon name="plus-square" size={iconSize} color={iconColor} />
		</TouchableOpacity>
	</View>
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
	plusMinusButton: {
		flex: 1,
	},
	counterDisplay: {
		flex: 2,
	},
	counterText: {
		fontStyle: "normal",
		fontWeight: "900",
	},
});

const mapStateToProps = (state: State) => ({
	count: state.counter.count,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	increment: () => dispatch(increment()),
	decrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
