import React from 'react';
import { View, Text, ActivityIndicator, StatusBar } from 'react-native';
import { loadingStyles } from '../styles/loadingStyles';

const LoadingScreen = ({ message, icon }) => {
  return (
    <View style={loadingStyles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4A90E2" />
      <View style={loadingStyles.card}>
        <View style={loadingStyles.iconCircle}>
          <Text style={loadingStyles.iconText}>{icon}</Text>
        </View>
        <Text style={loadingStyles.title}>{message}</Text>
        <Text style={loadingStyles.subtitle}>This may take a few seconds...</Text>
        <ActivityIndicator size="large" color="#4A90E2" style={loadingStyles.spinner} />
      </View>
    </View>
  );
};

export default LoadingScreen;