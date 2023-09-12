import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils/colors';
import Photo from './photo';
import Button from './button';
import {IconNoRead, IconRead} from '../../assets';

const CardChat = ({onPress, name, message, time, count, uri, isRead, from}) => {
  return (
    <Button onPress={onPress} buttonStyle={styles.container}>
      <View style={styles.leftContent}>
        <Photo uri={uri} />
        {from === 'self' ? (
          <View
            style={[
              styles.txtLeftContent,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                marginTop: 4,
              },
            ]}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.content}>
              {isRead ? (
                <IconNoRead width={22} height={22} />
              ) : (
                <IconRead width={22} height={22} />
              )}
              <Text
                style={[
                  styles.message,
                  // eslint-disable-next-line react-native/no-inline-styles
                  {
                    marginLeft: 4,
                  },
                ]}>
                {message}
              </Text>
            </View>
          </View>
        ) : (
          <View style={styles.txtLeftContent}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.message}>{message}</Text>
          </View>
        )}
      </View>
      <View style={styles.rightContent}>
        <Text style={styles.time}>{time}</Text>
        {count && (
          <View style={styles.viewCount}>
            <Text style={styles.txtCount}>{count}</Text>
          </View>
        )}
      </View>
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 24,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  txtLeftContent: {
    flexDirection: 'column',
  },
  name: {
    marginBottom: 2,
    fontWeight: 'bold',
    color: colors.black,
    fontSize: 16,
  },
  content: {
    flexDirection: 'row',
  },
  message: {
    fontSize: 14,
    color: colors.lightGray,
  },
  rightContent: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    width: '20%',
    paddingVertical: 4,
  },
  time: {
    color: colors.gray,
    marginBottom: 4,
  },
  viewCount: {
    width: 25,
    height: 25,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lighGreen,
  },
  txtCount: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 10,
  },
});
export default CardChat;
