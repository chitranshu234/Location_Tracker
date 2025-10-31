import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { errorStyles } from '../styles/errorStyles';

const ErrorScreen = ({ errorMsg }) => {
  return (
    <View style={errorStyles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#E74C3C" />
      <View style={errorStyles.card}>
        <View style={errorStyles.iconCircle}>
          <Text style={errorStyles.icon}>⚠️</Text>
        </View>
        <Text style={errorStyles.title}>Permission Denied</Text>
        <Text style={errorStyles.message}>{errorMsg}</Text>
        <Text style={errorStyles.hint}>
          Please enable location access in your device settings to use this app.
        </Text>
      </View>
    </View>
  );
};

export default ErrorScreen;