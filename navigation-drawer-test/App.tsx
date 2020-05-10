import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './navigation/AppNavigation';
import { enableScreens } from "react-native-screens";

enableScreens();

const App = () => <AppNavigation />
export default App;

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
