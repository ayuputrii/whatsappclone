import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

const heigh = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: colors.white,
    flex: 1,
    height: heigh,
    padding: 16,
    position: 'relative',
  },
  btnMessage: {
    backgroundColor: colors.tealGreen,
    width: 65,
    height: 65,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 14,
    marginBottom: 25,
    elevation: 2,
  },
});
