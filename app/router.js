import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import AuthLoading from './containers/Authentification/AuthLoading';
import Welcome from './containers/Authentification/Welcome';
import SignIn from './containers/Authentification/SignIn';
import SignUp from './containers/Authentification/SignUp';
import Forgotten from './containers/Authentification/Forgotten';
import Finalize from './containers/Authentification/Finalize';
import Reinitialize from './containers/Authentification/Reinitialize';
import Profile from './containers/Profile';
import Scanner from './containers/Scanner';
import Product from './containers/Product';
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
    Forgotten: {
      screen: Forgotten,
    },
    Reinitialize: {
      screen: Reinitialize,
    },
    Finalize: {
      screen: Finalize,
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
