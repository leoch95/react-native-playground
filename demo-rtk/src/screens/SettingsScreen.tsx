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
	Separator,
	H3,
} from "native-base";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { CounterStepSetter } from "../components";
import { StyleSheet } from "react-native";
import { RootState } from "../redux/reducers";
import {
	updateCounterStep,
	restoreDefaultSettings,
} from "../redux/reducers/settings";

type SettingsScreenNavigationProp = DrawerNavigationProp<ParamListBase>;

interface SettingsScreenProp {
	step: number;
	updateCounterStep: (step: number) => void;
	restoreDefaultSettings: () => void;
}

const SettingsScreen = ({
	step,
	updateCounterStep,
	restoreDefaultSettings,
}: SettingsScreenProp) => {
	const navigation = useNavigation<SettingsScreenNavigationProp>();

	const toggleDrawer = navigation.toggleDrawer;

	return (
		<Container>
			<Header>
				<Left>
					<Button transparent onPress={toggleDrawer}>
						<Icon type="MaterialCommunityIcons" name="menu" />
					</Button>
				</Left>
				<Body>
					<Title>Settings</Title>
				</Body>
				<Right>
					<Button transparent onPress={restoreDefaultSettings}>
						<Icon type="MaterialCommunityIcons" name="restore" />
					</Button>
				</Right>
			</Header>
			<Content>
				<Separator bordered>
					<Text style={styles.subtitleText}>Counter</Text>
				</Separator>
				<CounterStepSetter
					counterStep={step}
					updateStep={updateCounterStep}
				/>
			</Content>
			<Footer />
		</Container>
	);
};

const styles = StyleSheet.create({
	subtitleText: {
		fontSize: 18,
	},
});

const mapStateToProps = ({ settings }: RootState) => ({
	step: settings.counterStep,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	updateCounterStep: (step: number) => dispatch(updateCounterStep(step)),
	restoreDefaultSettings: () => dispatch(restoreDefaultSettings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
