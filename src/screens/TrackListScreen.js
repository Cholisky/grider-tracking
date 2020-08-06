import React from 'react';
import { Button, StyleSheet, Text } from 'react-native';

const TrackListScreen = ({ navigation }) => {
  return <>
    <Text>TrackListScreen</Text>
    <Button title="Go to Track Detail" onPress={() => navigation.navigate('TrackDetail')} />
  </>
};

const styles = StyleSheet.create({});

export default TrackListScreen;
