import { StyleSheet } from 'react-native';
import { colors, commonStyles } from './commonStyles';

export const errorStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.error,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    ...commonStyles.card,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FADBD8',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  icon: {
    fontSize: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.error,
    marginBottom: 12,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
  hint: {
    fontSize: 14,
    color: colors.textLight,
    textAlign: 'center',
    lineHeight: 20,
  },
});