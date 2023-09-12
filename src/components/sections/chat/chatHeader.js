import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils/colors';
import {
  IconArrowLeft,
  IconCall,
  IconDots,
  IconVideoCall,
} from '../../../assets';
import {Button, Photo} from '../../commons';

const ChatHeader = ({navigation, name, uri, goInformationPage}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <Button
          onPress={() => navigation.navigate('ChatsPage')}
          buttonStyle={styles.leftContent}>
          <IconArrowLeft width={32} height={32} />
          <Photo uri={uri} />
        </Button>
        <Button buttonStyle={styles.viewName} onPress={goInformationPage}>
          <Text style={styles.name}>{name}</Text>
        </Button>
      </View>
      <View style={styles.rightContent}>
        <Button buttonStyle={{marginRight: 10}}>
          <IconVideoCall width={24} height={24} />
        </Button>
        <Button>
          <IconCall width={22} height={22} />
        </Button>
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
    height: 100,
    width: '100%',
    paddingTop: 20,
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewName: {
    width: 180,
  },
  name: {
    fontSize: 20,
    color: colors.white,
    fontWeight: 'bold',
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 120,
  },
});

export default ChatHeader;
