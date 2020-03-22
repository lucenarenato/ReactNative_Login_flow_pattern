import React from 'react';
import {View, Text, TouchableOpacity, AsyncStorage, StyleSheet} from 'react-native';
import AuthLoadingScreen from './AuthLoadingScreen';

const styles = StyleSheet.create({
    button: {
        marginBottom: 20,
        //width: window.width - 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        height: 50,
        backgroundColor: '#53A4E7',
    },
    logoutText: {
        color: '#ffffff',
    },
});

export default class WelcomeScreen extends React.Component {
    handleLogout() {
        AsyncStorage.removeItem(AuthLoadingScreen.KEY_LOGGED_IN_USER);
        this.props.navigation.navigate('Auth');
    }

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                backgroundColor: '#ffff',
            }}
            >
            <View style={{
                flex: 1,
                backgroundColor: '#ffff',
            }}
            >
                <Text >
                    Welcome User
                </Text>
            </View>
            <View style={{
                flex: 1,
                backgroundColor: '#ffff',
            }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { this.handleLogout() }}
                >
                    <Text style={styles.loginText}>
                        LOG OUT
                    </Text>
                </TouchableOpacity>
            </View>
            </View>
        );
    }
}