import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import Scanner from '../screens/Scanner';
import Product from '../screens/Product';
import Placeholder from '../screens/Placeholder';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';

const AuthStack = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
    },
    SignIn: {
      screen: SignInScreen,
    },
    SignUp: {
      screen: Placeholder,
    },
  },
);

const ScanStack = createStackNavigator(
  {
    Scan: {
      screen: Scanner,
    },
    Product: {
      screen: Product,
    },
  },
);

ScanStack.navigationOptions = {
  tabBarLabel: 'Scan',
};

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: Placeholder,
    },
  },
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
};


const AppStack = createBottomTabNavigator(
  {
    Scan: {
      screen: ScanStack,
    },
    Profile: {
      screen: ProfileStack,
    },
  },
);


const AppRoot = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

const RootStack = createAppContainer(AppRoot);

export default RootStack;
