import React from "react";
import {
	Container,
	Header,
	Title,
	Content,
	Footer,
	FooterTab,
	Button,
	Left,
	Right,
	Body,
	Icon,
	Text,
	Grid,
	Row,
} from "native-base";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Counter } from "../components";
import { increment, decrement, reset } from "../redux/reducers/counter";
import { RootState } from "../redux/reducers";

type CounterScreenNavigationProp = DrawerNavigationProp<ParamListBase>;

interface CounterScreenProp {
	count: number;
	step: number;
	incrementCounter: (step: number) => void;
	decrementCounter: (step: number) => void;
	resetCounter: () => void;
}

const CounterScreen = ({
	count,
	step,
	incrementCounter,
	decrementCounter,
	resetCounter,
}: CounterScreenProp) => {
	const navigation = useNavigation<CounterScreenNavigationProp>();

	const toggleDrawer = navigation.toggleDrawer;

	const _increment = () => incrementCounter(step);
	const _decrement = () => decrementCounter(step);
	const _reset = () => resetCounter();

	return (
		<Container>
			<Header>
				<Left>
					<Button transparent onPress={toggleDrawer}>
						<Icon type="MaterialCommunityIcons" name="menu" />
					</Button>
				</Left>
				<Body>
					<Title>Counter</Title>
				</Body>
				<Right>
					<Button transparent onPress={_reset}>
						<Icon type="MaterialCommunityIcons" name="restore" />
					</Button>
				</Right>
			</Header>
			<Content>
				<Grid>
					<Row size={1} />
					<Row size={1}>
						<Counter
							count={count}
							increment={_increment}
							decrement={_decrement}
						/>
					</Row>
					<Row size={1} />
				</Grid>
			</Content>
			<Footer />
		</Container>
	);
};

const mapStateToProps = ({ counter, settings }: RootState) => ({
	count: counter,
	step: settings.counterStep,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	incrementCounter: (step: number) => dispatch(increment(step)),
	decrementCounter: (step: number) => dispatch(decrement(step)),
	resetCounter: () => dispatch(reset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterScreen);
