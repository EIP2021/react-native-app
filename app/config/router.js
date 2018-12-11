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

const AuthStack = createStackNavigator(
  {
    SignIn: {
      screen: AuthLoadingScreen,
    },
    SignUp: {
      screen: AuthLoadingScreen,
    },
  },
  {
    headerMode: 'none',
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

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: Placeholder,
    },
  },
);


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
