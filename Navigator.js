import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import LoginPage from './app/components/account/LoginPage';
import AuthLoadingScreen from './app/components/account/AuthLoadingScreen';
import WelcomeScreen from './app/components/account/WelcomeScreen';

const privateAppStack = createStackNavigator(
    {
        'WelcomeScreen': {
            screen: WelcomeScreen,
            navigationOptions: {
                headerTitle: 'Welcome'
            },
        },
    }
);

const publicAuthenticationStack = createStackNavigator(
    { Login: { screen: LoginPage, navigationOptions: { header: null } } },
);

export default createSwitchNavigator(
    {
        AuthLoading: { screen: AuthLoadingScreen, navigationOptions: { header: null } },
        App: privateAppStack,
        Auth: publicAuthenticationStack,
    },
    {
        initialRouteName: 'AuthLoading',
    },
);
