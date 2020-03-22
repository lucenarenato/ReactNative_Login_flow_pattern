import React from 'react';
import {
    View, TextInput, TouchableOpacity,
    ScrollView, StyleSheet, Text, Dimensions, AsyncStorage
} from 'react-native';
import AuthLoadingScreen from './AuthLoadingScreen';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 50,
        backgroundColor: 'rgba(225,225,225,0.2)',
        color: '#000000',
        borderRadius: 6,
        marginHorizontal: 10,
        marginVertical: 5,
        width: window.width - 100,
    },
    button: {
        marginBottom: 20,
        width: window.width - 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        height: 50,
        backgroundColor: '#53A4E7',
    },
    loginText: {
        color: '#ffffff',
    },
});

export default class LoginPage extends React.Component {
    updateText(text, name) {
        this.setState({ [name]: text });
    }

    handleLogin() {
        AsyncStorage.setItem(AuthLoadingScreen.KEY_LOGGED_IN_USER, this.state.username);
        this.props.navigation.navigate('App');
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center' }}>

                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    autoCorrect={false}
                    keyboardType="email-address"
                    returnKeyType="next"
                    placeholder="Username"
                    placeholderTextColor="rgba(225,225,225,0.7)"
                    onChangeText={(text) => { this.updateText(text, 'username'); }}
                    underlineColorAndroid="rgba(0,0,0,0)"
                />
                <TextInput
                    style={styles.input}
                    returnKeyType="go"
                    ref={(input) => { this.passwordInput = input; }}
                    placeholder="Password"
                    placeholderTextColor="rgba(225,225,225,0.7)"
                    onChangeText={(text) => { this.updateText(text, 'password'); }}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    onSubmitEditing={this.handleLogin}
                    secureTextEntry
                />
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => { this.handleLogin() }}
                    >
                        <Text style={styles.loginText}>
                            LOGIN
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}