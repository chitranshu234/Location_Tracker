import * as Location from 'expo-location';

export const LOCATION_CONFIG = {
  accuracy: Location.Accuracy.BestForNavigation,
  timeInterval: 1000,
  distanceInterval: 1,
};

export const MAP_DELTA = {
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
};