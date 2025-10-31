import React from 'react';
import { View, Text } from 'react-native';
import { mapStyles } from '../styles/mapStyles';

const Header = () => {
  return (
    <View style={mapStyles.header}>
      <Text style={mapStyles.headerIcon}>📍</Text>
      <Text style={mapStyles.headerTitle}>Live Location Tracker</Text>
    </View>
  );
};

export default Header;  