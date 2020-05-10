import { LoginCredentials } from "../context/AuthContext";
import { AsyncStorage } from "react-native";

const USER_TOKEN = "userToken";

export const createToken = async (credential: LoginCredentials) => {
	await AsyncStorage.setItem(USER_TOKEN, credential.username);
	return credential.username;
};

export const retrieveToken = async () => AsyncStorage.getItem(USER_TOKEN);

export const clearToken = async () => AsyncStorage.removeItem(USER_TOKEN);
