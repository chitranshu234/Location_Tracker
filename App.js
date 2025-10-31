import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import LoadingScreen from './src/components/LoadingScreen';
import ErrorScreen from './src/components/ErrorScreen';
import MapContainer from './src/components/MapContainer';
import useLocation from './src/hooks/useLocation';

export default function App() {
  const { location, permissionStatus, errorMsg } = useLocation();

  if (permissionStatus === 'pending') {
    return <LoadingScreen message="Requesting permission..." icon="📍" />;
  }

  if (permissionStatus === 'denied') {
    return <ErrorScreen errorMsg={errorMsg} />;
  }

  if (permissionStatus === 'granted' && !location) {
    return <LoadingScreen message="Getting Your Location" icon="🗺️" />;
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <MapContainer location={location} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
});