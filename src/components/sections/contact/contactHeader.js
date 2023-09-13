import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils/colors';
import {IconArrowLeft, IconDots, IconSearch} from '../../../assets';
import {Button, Gap} from '../../commons';

const ContactHeader = ({navigation, count}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <Button
          onPress={() => navigation.navigate('ChatsPage')}
          buttonStyle={styles.leftContent}>
          <IconArrowLeft width={30} height={30} />
        </Button>
        <View style={styles.viewContact}>
          <Text style={styles.name}>Choose Contact</Text>
          <Text style={styles.txtCount}>{count || 0} Contact</Text>
        </View>
      </View>
      <View style={styles.rightContent}>
        <Button>
          <IconSearch width={24} height={24} />
        </Button>
        <Gap width={24} />
        <Button>
          <IconDots width={24} height={24} />
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.tealGreen,
    height: 80,
    width: '100%',
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewContact: {
    flexDirection: 'column',
    paddingHorizontal: 16,
  },
  name: {
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold',
  },
  txtCount: {
    fontSize: 12,
    color: colors.white,
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default ContactHeader;
