import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    StyleSheet,
    View,
    AsyncStorage
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
    },
});

export default class AuthLoadingScreen extends React.Component {
    static KEY_LOGGED_IN_USER = 'loggedInUser';

    constructor(props) {
        super(props);
        this.navigateAsync = this.navigateAsync.bind(this);
        this.navigateAsync();
    }

    async navigateAsync() {
        console.log("navigateasync")
        AuthLoadingScreen.isLoggedIn().then(() => {
            this.props.navigation.navigate('App');
        }, () => {
            this.props.navigation.navigate('Auth');
        });
    }

    static isLoggedIn() {
        return new Promise(((resolve, reject) => {
            AsyncStorage.getItem(AuthLoadingScreen.KEY_LOGGED_IN_USER, (exception, userObj) => {
                if (userObj) {
                    resolve(userObj);
                }
                reject(userObj);
            });
        }));
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large"/>
                <StatusBar barStyle="default" />
            </View>
        );
    }
}
