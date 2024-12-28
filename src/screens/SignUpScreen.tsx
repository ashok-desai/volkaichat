import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from '../assets/Icons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {scale} from 'react-native-size-matters';
import globalStyles from '../styles/globalStyles';
import Input from '../components/input/Input';
import Button from '../components/button/Button';

const SignUpScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={[globalStyles.newContainer]}>
      <View style={styles.container}>
        <View style={styles.maiddleContainer}>
          <Text style={styles.text}>Create an account</Text>
          <Text style={styles.text1}>
            Login to your account. Get easier than search engines results.
          </Text>
          <Input
            label="Name"
            placeholder="Enter your name"
            icon={
              <Icon.User color="#757070" width={scale(20)} height={scale(20)} />
            }
          />
          <Input
            label="Email"
            placeholder="Enter your email"
            icon={<Icon.Mail width={scale(20)} height={scale(20)} />}
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            secureTextEntry
            secureIcon={<Icon.EyeClose width={scale(20)} height={scale(20)} />}
            icon={<Icon.PasswordIcon width={scale(20)} height={scale(20)} />}
          />
          <View style={styles.footer}>
            <Button
              title="Create Account"
              onPress={() => navigation.navigate('LoginScreen')}
            />
            <Text style={styles.text2}>
              Already have an account?{' '}
              <Text
                style={styles.text3}
                onPress={() => navigation.navigate('LoginScreen')}>
                Login
              </Text>
            </Text>
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
  },
  maiddleContainer: {
    justifyContent: 'center',
    flexDirection: 'column',
  },
  footer: {
    marginTop: 200,
    marginBottom: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  text1: {
    fontSize: 18,
    color: '#333',
    marginBottom: 0,
  },
  text2: {
    fontSize: 18,
    color: '#6C6AF4',
    marginTop: 10,
    marginBottom: 50,
    marginRight: 80,
    textAlign: 'center',
  },
  text3: {
    fontWeight: 'bold',
    marginRight: 50,
  },
  button: {
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputContainer1: {
    alignItems: 'center',
    marginBottom: 10,
  },
  emailInput: {
    height: 50,
    borderColor: '#0000ff',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 65,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  passwordInput: {
    height: 50,
    borderColor: '#0000ff',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 65,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
});

export default SignUpScreen;
