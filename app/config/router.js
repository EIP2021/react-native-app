import React from 'react';
import {
createStackNavigator,
createBottomTabNavigator,
createSwitchNavigator,
createAppContainer,
} from 'react-navigation';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

const AuthStack = createStackNavigator(
	{
		SignIn: {
			screen: AuthLoadingScreen
		},
		SignUp: {
			screen: AuthLoadingScreen
		},
	},
	{
		headerMode: 'none',
	}
);

const ScanStack = createStackNavigator(
	{
		Scan: AuthLoadingScreen,
	}
);

const ProfileStack = createStackNavigator(
	{
		Profile: AuthLoadingScreen,
	}
);


const AppStack = createBottomTabNavigator(
	{
		Scan: {
			screen: ScanStack,
		},
		Profile: {
			screen: ProfileStack,
		}
	}
);


const AppRoot = createSwitchNavigator(
	{
		AuthLoading: AuthLoadingScreen,
		App: AppStack,
		Auth: AuthStack,
	},
	{
		initialRouteName: 'AuthLoading',
	}
);

export default RootStack = createAppContainer(AppRoot);