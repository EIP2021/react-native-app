import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import AuthLoading from './containers/AuthLoading';
import Scanner from './containers/Scanner';
import Product from './containers/Product';
import Welcome from './containers/Welcome';
import SignIn from './containers/SignIn';
import Profile from './containers/Profile';
import SignUp from './containers/SignUp';
import ModifyProfile from './containers/ModifyProfile';
import { ScannerTabBarIcon, ProfilTabBarIcon } from './components/TabBarIcon';

const AuthStack = createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
    },
    SignIn: {
      screen: SignIn,
    },
    SignUp: {
      screen: SignUp,
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
      screen: Profile,
    },
    ModifyProfile: {
      screen: ModifyProfile,
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
    AuthLoading,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

const RootStack = createAppContainer(AppRoot);

export default RootStack;
