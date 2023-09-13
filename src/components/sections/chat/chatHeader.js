/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils/colors';
import {
  IconArrowLeft,
  IconCall,
  IconDots,
  IconVideoCall,
} from '../../../assets';
import {Button, Gap, Photo} from '../../commons';

const ChatHeader = ({navigation, name, uri, goInformationPage}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <Button
          onPress={() => navigation.navigate('ChatsPage')}
          buttonStyle={styles.leftContent}>
          <IconArrowLeft width={30} height={30} />
          <Gap width={8} />
          <Photo uri={uri} />
        </Button>
        <Button buttonStyle={styles.viewName} onPress={goInformationPage}>
          <Text style={styles.name}>{name?.substring(0, 10) + '...'}</Text>
        </Button>
      </View>
      <View style={styles.rightContent}>
        <Button buttonStyle={{marginRight: 10}}>
          <IconVideoCall width={22} height={22} />
        </Button>
        <Gap width={16} />
        <Button>
          <IconCall width={22} height={22} />
        </Button>
        <Gap width={16} />
        <Button>
          <IconDots width={22} height={22} />
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
  viewName: {
    width: '45%',
  },
  name: {
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold',
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default ChatHeader;
