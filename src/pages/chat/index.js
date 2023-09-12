import React from 'react';
import {ImageBackground, ScrollView, View} from 'react-native';
import {ChatButton, ChatMessage, Gap} from '../../components';
import {styles} from './styles';
import dayjs from 'dayjs';

const ChatPage = ({route}) => {
  const BackgroundChat = '../../assets/img/bg_chat.png';

  const message = route?.params?.data?.messages;

  return (
    <View style={styles.flex1}>
      <ImageBackground
        resizeMode="cover"
        style={styles.flex1}
        source={require(BackgroundChat)}>
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
          <Gap height={16} />
          {message &&
            message?.map((item, index) => {
              const time = dayjs(item?.created_at)
                .subtract(7, 'hours')
                .format('HH:mm');

              return (
                <View key={index}>
                  <ChatMessage
                    content={item?.content}
                    sender={item?.from === 'self'}
                    receive={item?.from === 'other'}
                    isRead={item?.isReaded}
                    reaction={item?.reaction}
                    time={time}
                  />
                </View>
              );
            })}
        </ScrollView>
        <Gap height={70} />
        <ChatButton />
      </ImageBackground>
    </View>
  );
};

export default ChatPage;
