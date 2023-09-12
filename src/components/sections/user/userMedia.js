import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils/colors';
import {IconArrowRightLine} from '../../../assets';
import {Button, ImageWithNotFound} from '../../commons';

const UserMedia = ({goMoreMedia}) => {
  return (
    <Button buttonStyle={styles.container} onPress={goMoreMedia}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Media, links, and docs</Text>
        <View style={styles.count}>
          <Text style={styles.txtCount}>1</Text>
          <IconArrowRightLine color={colors.tealGreen} width={25} height={25} />
        </View>
      </View>
      <Button buttonStyle={styles.media}>
        <ImageWithNotFound />
      </Button>
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 150,
    width: '100%',
    paddingTop: 20,
    elevation: 0.8,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    color: colors.gray,
    fontWeight: '600',
  },
  count: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtCount: {
    fontSize: 14,
    color: colors.gray,
    fontWeight: '600',
  },
  media: {
    paddingHorizontal: 16,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default UserMedia;
