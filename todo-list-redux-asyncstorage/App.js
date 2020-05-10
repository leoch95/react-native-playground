import React from "react";
import Root from "./components/Root";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

export default App = () => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<Root />
		</PersistGate>
	</Provider>
);
