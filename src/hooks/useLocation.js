import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { LOCATION_CONFIG } from '../constants/locationConfig';

const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [permissionStatus, setPermissionStatus] = useState('pending');
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    let locationSubscription = null;

    const getUserLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        
        if (status !== 'granted') {
          setPermissionStatus('denied');
          setErrorMsg('Permission to access location was denied');
          return;
        }

        setPermissionStatus('granted');
        
        const currentPos = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.BestForNavigation,
        });
        
        setLocation(currentPos.coords);
        
        locationSubscription = await Location.watchPositionAsync(
          LOCATION_CONFIG,
          (updatedLocation) => {
            setLocation(updatedLocation.coords);
          }
        );
        
      } catch (err) {
        console.error('Error getting location:', err);
        setPermissionStatus('denied');
        setErrorMsg('Failed to access location. Please check your settings.');
      }
    };

    getUserLocation();

    return () => {
      if (locationSubscription) {
        locationSubscription.remove();
      }
    };
  }, []);

  return { location, permissionStatus, errorMsg };
};

export default useLocation;