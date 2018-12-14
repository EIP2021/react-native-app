import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import Scanner from '../screens/Scanner';
import Product from '../screens/Product';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SignUpFirstScreen from '../screens/SignUp/SignUpFirstScreen';
import SignUpSecondScreen from '../screens/SignUp/SignUpSecondScreen';
import SignUpThirdScreen from '../screens/SignUp/SignUpThirdScreen';
import { ScannerTabBarIcon, ProfilTabBarIcon } from '../components/TabBarIcon';

const AuthStack = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
    },
    SignIn: {
      screen: SignInScreen,
    },
    SignUpFirst: {
      screen: SignUpFirstScreen,
    },
    SignUpSecond: {
      screen: SignUpSecondScreen,
    },
    SignUpThird: {
      screen: SignUpThirdScreen,
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
  tabBarOptions: {
    activeTintColor: '#2ecc71',
  },
  tabBarIcon: ScannerTabBarIcon,
};

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
    },
  },
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profil',
  tabBarOptions: {
    activeTintColor: '#2ecc71',
  },
  tabBarIcon: ProfilTabBarIcon,
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
