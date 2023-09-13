import React, {useRef, useState} from 'react';
import {Dimensions, ImageBackground, StyleSheet, View} from 'react-native';
import {colors} from '../../../utils/colors';
import {IconCamera, IconHappy, IconMic, IconSend} from '../../../assets';
import {TextInput} from '../../forms';
import {Button} from '../../commons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ChatButton = () => {
  const ref = useRef();

  const BackgroundChat = '../../../assets/img/bg_chat.png';
  const [newMessage, setNewMessage] = useState('');
  const [heightBox, setHeightBox] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.bgCover}
        source={require(BackgroundChat)}>
        <View style={styles.textBox}>
          <Button buttonStyle={styles.iconHappy}>
            <IconHappy color={colors.gray} width={24} height={24} />
          </Button>
          <TextInput
            editable
            multiline
            value={newMessage}
            placeholder="Input message"
            placeholderTextColor={colors.lightBlack}
            onContentSizeChange={v => {
              setHeightBox(v.nativeEvent.contentSize.height);
            }}
            onChangeText={msg => {
              if (msg !== '' && isTyping === false) {
                setIsTyping(true);
                ref.current?.animateNextTransition();
              } else if (isTyping === true && msg === '') {
                setIsTyping(false);
                ref.current?.animateNextTransition();
              }
              setNewMessage(msg);
            }}
          />
          <Button buttonStyle={styles.iconCamera}>
            <IconCamera color={colors.gray} width={24} height={24} />
          </Button>
        </View>

        <View style={styles.voiceContainer}>
          {isTyping ? (
            <Button buttonStyle={styles.voiceButton} onPress={() => {}}>
              <IconSend width={20} height={20} />
            </Button>
          ) : (
            <Button buttonStyle={styles.voiceButton} onPress={() => {}}>
              <IconMic width={20} height={20} />
            </Button>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: height * 0.06,
    minWidth: width * 0.4,
    bottom: Math.max(height * 0.02),
    position: 'absolute',
    width: width,
    alignContent: 'center',
    left: 0,
    paddingHorizontal: 8,
  },
  bgCover: {
    flex: 1,
    flexDirection: 'row',
    width: width,
    height: 80,
    position: 'absolute',
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  textBox: {
    maxHeight: height * 0.4,
    width: '85%',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    backgroundColor: colors.white,
    paddingHorizontal: 14,
    marginRight: 10,
  },
  voiceContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.tealGreen,
  },
});

export default ChatButton;
