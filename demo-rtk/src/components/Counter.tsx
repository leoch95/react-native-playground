import React from "react";
import { StyleSheet } from "react-native";
import { View, Button, Icon, H2 } from "native-base";

interface CounterProp {
	count: number;
	increment: () => void;
	decrement: () => void;
}

const Counter = ({ count, increment, decrement }: CounterProp) => (
	<View padder style={styles.container}>
		<View padder style={styles.button}>
			<Button transparent onPress={decrement}>
				<Icon type="MaterialCommunityIcons" name="minus-box-outline" />
			</Button>
		</View>
		<View padder style={styles.display}>
			<H2 style={styles.counterText}>{count}</H2>
		</View>
		<View padder style={styles.button}>
			<Button transparent onPress={increment}>
				<Icon type="MaterialCommunityIcons" name="plus-box-outline" />
			</Button>
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
	},
	button: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	display: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	counterText: {
		// color:
	},
});

export default Counter;
