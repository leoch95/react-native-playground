# Instructions to init a Expo React-Native project

## 1. Install Node.js

## 2. Install <code>yarn</code>

	npm install -g yarn

## 3. Install <code>expo-cli</code>

	yarn global add expo-cli

## 4. Initiate new project

	expo init <project dir>

## 5. Add dependency packages

### UI components

	expo add react-native-elements react-native-modal # react-native-vector-icons native-base
	yarn add --dev @types/react-native-vector-icons

### Application state management

	expo add react-redux redux-logger redux-persist @reduxjs/toolkit # redux redux-thunk
	yarn add --dev @types/react-redux @types/redux-logger

### Navigation

	expo add @react-navigation/native @react-navigation/stack @react-navigation/drawer
	expo add react-native-gesture-handler react-native-reanimated react-native-safe-area-context @react-native-community/masked-view # react-native-screens

### Input form & form validation

	expo add formik yup
	yarn add --dev @types/yup

### String utils

	expo add voca
	yarn add --dev @types/voca

### Date utils

	expo add moment

### Datetime picker

	expo add react-native-modal-datetime-picker @react-native-community/datetimepicker
