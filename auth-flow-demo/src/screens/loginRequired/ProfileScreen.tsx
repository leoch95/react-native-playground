import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Container, Body, View, Text } from "native-base";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Header } from "../../components/header";
import { AuthDrawerNavParamList } from "../../navigation/loginRequired/AuthNavigation";
import { AuthContext } from "../../context";

interface ProfileScreenProp {}

type ProfileScreenDrawerNavigationProp = DrawerNavigationProp<
	AuthDrawerNavParamList
>;

const ProfileScreen = ({}: ProfileScreenProp) => {
	const { signOut } = useContext(AuthContext);

	const drawerNav = useNavigation<ProfileScreenDrawerNavigationProp>();

	return (
		<Container>
			<Header
				leftIcon="menu"
				onLeftIconPress={drawerNav.toggleDrawer}
				title="Profile"
				rightIcon="power"
				onRightIconPress={signOut}
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
