import React from 'react';
import Button from './button';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils/colors';

const Menu = ({onPress, title, icon, iconRight, styleTitle}) => {
  return (
    <Button onPress={onPress} buttonStyle={styles.container}>
      <View style={styles.leftContent}>
        <View style={styles.bgImg}>{icon}</View>
        <Text style={[styles.title, styleTitle]}>{title}</Text>
      </View>
      <View style={styles.rightContent}>{iconRight}</View>
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 24,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bgImg: {
    backgroundColor: colors.tealGreen,
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  title: {
    fontWeight: 'bold',
    color: colors.black,
    fontSize: 18,
  },
  rightContent: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    width: '20%',
    paddingVertical: 4,
  },
});

export default Menu;
