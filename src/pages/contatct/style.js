import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

const heigh = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    height: heigh,
    padding: 16,
  },
  titleContact: {
    fontSize: 14,
    color: colors.gray,
    fontWeight: 'bold',
  },
});
