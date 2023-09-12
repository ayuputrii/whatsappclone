/* eslint-disable no-shadow */
import React from 'react';
import {CardChat} from '../../commons';
import {View} from 'react-native';
import dayjs from 'dayjs';

const ChatsComponent = ({navigation, data}) => {
  return (
    <React.Fragment>
      {data &&
        data?.map((item, index) => {
          const message = item?.messages[0]?.content;
          const photo = item?.image;
          const from_self = item?.messages[0]?.from === 'self';

          const time = dayjs(item?.created_at)
            .subtract(7, 'hours')
            .format('HH:mm');

          const goRoomChat = item => {
            navigation.navigate('ChatPage', {
              data: item,
            });
          };

          return (
            <View key={index}>
              <CardChat
                onPress={() => goRoomChat(item)}
                name={item?.displayName}
                uri={photo}
                message={message}
                time={time}
                from={from_self}
              />
            </View>
          );
        })}
    </React.Fragment>
  );
};

export default ChatsComponent;
