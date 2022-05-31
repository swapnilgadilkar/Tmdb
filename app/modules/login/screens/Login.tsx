import React from 'react';
import {StyleSheet, Text, TextInput, View, Dimensions} from 'react-native';
import {LoginButton, AccessToken} from 'react-native-fbsdk-next';

const screenWidth = Dimensions.get('screen').width;

const Login = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.helloText}>Hello There!</Text>
        <TextInput placeholder="email" style={styles.textInput} />
        <TextInput
          placeholder="password"
          secureTextEntry
          style={styles.textInput}
        />
        <Text style={styles.loginBtn}>Login</Text>
      </View>
      <LoginButton
        onLoginFinished={(error, result) => {
          if (error && result) {
            console.log('login has error: ' + result.error);
          } else if (result.isCancelled) {
            console.log('login is cancelled.');
          } else {
            AccessToken.getCurrentAccessToken().then((data: any) => {
              console.log(data.accessToken.toString());
            });
          }
        }}
        onLogoutFinished={() => console.log('logout.')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    alignItems: 'center',
    paddingTop: 250,
  },
  helloText: {
    color: 'white',
    marginBottom: 20,
    fontSize: 30,
  },
  textInput: {
    padding: 5,
    paddingStart: 15,
    backgroundColor: '#3b3b3b',
    width: screenWidth * 0.8,
    borderRadius: 25,
    marginBottom: 15,
    color: 'white',
    fontWeight: '600',
  },
  loginBtn: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: '#ff1178',
    borderRadius: 25,
    color: 'white',
    textAlign: 'center',
  },
});

export {Login};
