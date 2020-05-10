import React from "react";
import { StyleSheet } from "react-native";
import { Container, Body, View, Text } from "native-base";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Header } from "../../components/header";
import { AuthDrawerNavParamList } from "../../navigation/loginRequired/AuthNavigation";

interface ProfileScreenProp {
	logout: () => void;
}

type ProfileScreenDrawerNavigationProp = DrawerNavigationProp<
	AuthDrawerNavParamList
>;

const ProfileScreen = ({ logout }: ProfileScreenProp) => {
	const drawerNav = useNavigation<ProfileScreenDrawerNavigationProp>();

	return (
		<Container>
			<Header
				leftIcon="menu"
				onLeftIconPress={drawerNav.toggleDrawer}
				title="Profile"
				rightIcon="power"
				onRightIconPress={logout}
			/>
			<Body>
				<View style={styles.container}>
					<Text>Profile</Text>
				</View>
			</Body>
		</Container>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default ProfileScreen;
