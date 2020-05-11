import { createContext } from "react";

export interface AuthContextMethod {
	signIn: (data: LoginCredentials) => Promise<void>;
	signOut: () => void;
	signUp: (data: LoginCredentials) => Promise<void>;
}

export type LoginCredentials = {
	username: string;
	password: string;
};

export default createContext<AuthContextMethod>({
	signIn: () => Promise.resolve(),
	signOut: () => {},
	signUp: () => Promise.resolve(),
});
