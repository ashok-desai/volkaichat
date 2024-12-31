import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {scale} from 'react-native-size-matters';
import ButtonPrimary from '../components/button/ButtonPrimary';
import Button from '../components/button/Button';
import Input from '../components/input/Input';
import globalStyles from '../styles/globalStyles';
import Icon from '../assets/Icons';

const LoginScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={[globalStyles.newContainer, {}]}>
      <View style={styles.container}>
        <View style={styles.maiddleContainer}>
          <Text style={styles.text}>Welcome back to login!</Text>
          <Text style={styles.text1}>
            Login to your account. Get easier than search engines results.
          </Text>
          <Input
            label="Email"
            placeholder="Enter your email"
            icon={<Icon.Mail width={scale(20)} height={scale(20)} />}
          />
          <Input
            label="Password"
            placeholder="Create your password"
            secureTextEntry
            secureIcon={<Icon.EyeClose width={scale(20)} height={scale(20)} />}
            icon={<Icon.PasswordIcon width={scale(20)} height={scale(20)} />}
          />
          <Text style={styles.resetPasswordText}>Reset password</Text>
          <View style={styles.footer}>
            <Button title="Login" onPress={() => navigation.navigate('Main')} />
            <ButtonPrimary
              title="Sign Up With Email"
              icon={<Icon.Mail width={20} height={20} color="#5956FC" />}
              style={styles.emailLoginButton}
              textStyle={styles.emailLoginButtonText}
              onPress={() => navigation.navigate('SignUpScreen')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: scale(20),
    marginRight: 30,
  },
  maiddleContainer: {
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 100,
  },
  footer: {
    marginBottom: 70,
    marginTop: 160,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 30,
  },
  text1: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
  },
  resetPasswordText: {
    fontSize: 16,
    color: 'red',
    marginBottom: 40,
    marginLeft: 190,
  },
  emailLoginButton: {
    marginTop: 10,
  },
  emailLoginButtonText: {
    color: '#6495ed',
  },
});

export default LoginScreen;
