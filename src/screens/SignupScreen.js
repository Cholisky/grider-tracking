import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

const SignupScreen = ({ navigation }) => {
  return <>
      <Text h3>Sign Up for Tracker</Text>
    <Input label="Email" />
    <Input label="Password" />
    <Button title="Sign Up" onPress={() => navigation.navigate('Signin')} />
    <Button title="Go to Main Flow" onPress={() => navigation.navigate('mainFlow')} />
    </>
};

const styles = StyleSheet.create({});

export default SignupScreen;
