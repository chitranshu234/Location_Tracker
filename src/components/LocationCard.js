import React from 'react';
import { View, Text } from 'react-native';
import { mapStyles } from '../styles/mapStyles';

const LocationCard = ({ location }) => {
  return (
    <View style={mapStyles.locationCard}>
      <View style={mapStyles.cardHeader}>
        <Text style={mapStyles.cardIcon}>🎯</Text>
        <Text style={mapStyles.cardTitle}>Your Coordinates</Text>
      </View>
      
      <View style={mapStyles.coordinateRow}>
        <View style={mapStyles.coordinateItem}>
          <Text style={mapStyles.coordinateLabel}>Latitude</Text>
          <Text style={mapStyles.coordinateValue}>
            {location.latitude.toFixed(6)}°
          </Text>
        </View>
        
        <View style={mapStyles.divider} />
        
        <View style={mapStyles.coordinateItem}>
          <Text style={mapStyles.coordinateLabel}>Longitude</Text>
          <Text style={mapStyles.coordinateValue}>
            {location.longitude.toFixed(6)}°
          </Text>
        </View>
      </View>
      
      <View style={mapStyles.liveIndicator}>
        <View style={mapStyles.pulse} />
        <Text style={mapStyles.liveText}>Live Tracking</Text>
      </View>
    </View>
  );
};

export default LocationCard;