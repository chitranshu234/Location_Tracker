import { Dimensions } from 'react-native';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

export const colors = {
  primary: '#4A90E2',
  error: '#E74C3C',
  success: '#4CAF50',
  text: '#2C3E50',
  textLight: '#7F8C8D',
  background: '#F5F7FA',
  white: '#FFFFFF',
};

export const commonStyles = {
  card: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 40,
    alignItems: 'center',
    width: screenWidth * 0.85,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
};