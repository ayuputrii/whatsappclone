import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconNoRead, IconRead, IconDotsGray} from '../../../assets';
import {colors} from '../../../utils/colors';
import {Reaction} from 'react-native-reactions';

const ReactionItems = [
  {
    id: 0,
    emoji: '😇',
    title: 'like',
  },
  {
    id: 1,
    emoji: '🥰',
    title: 'love',
  },
  {
    id: 2,
    emoji: '🤗',
    title: 'care',
  },
  {
    id: 3,
    emoji: '😘',
    title: 'kiss',
  },
  {
    id: 4,
    emoji: '😂',
    title: 'laugh',
  },
  {
    id: 5,
    emoji: '😎',
    title: 'cool',
  },
];

const ChatBubble = ({receive, sender, content, time, isRead, reaction}) => {
  const [selectedEmoji, setSelectedEmoji] = useState();

  return (
    <View
      style={[
        styles.container,
        {marginBottom: reaction || selectedEmoji ? 24 : 8},
      ]}>
      {receive && (
        <View style={styles.flexRow}>
          <View style={styles.containerReceive}>
            <View style={styles.leftMessage} />
            <View style={styles.contentMessage}>
              <Text style={styles.textMessage}>{content}</Text>
              <View style={styles.timeRead}>
                <Text style={styles.timeText}>{time}</Text>
              </View>
            </View>
          </View>

          <Reaction
            opacityRange={[1, 1, 1]}
            showPopupType="onPress"
            items={ReactionItems}
            onTap={setSelectedEmoji}>
            <IconDotsGray width={24} height={24} />
          </Reaction>
          {(reaction || selectedEmoji) && (
            <View style={styles.emojiWrapper}>
              <Text style={styles.emojiPosition}>
                {selectedEmoji?.emoji || reaction}
              </Text>
            </View>
          )}
        </View>
      )}
      {sender && (
        <View style={styles.containerSender}>
          <View style={styles.contentMessageRight}>
            <Text style={styles.textMessageRight}>{content}</Text>
            <View style={styles.timeReadRight}>
              <Text style={styles.timeTextRight}>{time}</Text>
              <View style={styles.viewReadUnRead}>
                {isRead ? (
                  <IconNoRead width={24} height={24} />
                ) : (
                  <IconRead width={24} height={24} />
                )}
              </View>
              <Reaction
                opacityRange={[1, 1, 1]}
                showPopupType="onPress"
                items={ReactionItems}
                onTap={setSelectedEmoji}>
                <IconDotsGray
                  style={{transform: [{translateY: -6}], zIndex: 100}}
                  width={24}
                  height={24}
                />
              </Reaction>
            </View>
            {(reaction || selectedEmoji) && (
              <View style={styles.emojiWrapper}>
                <Text style={styles.emojiPosition}>
                  {reaction ? reaction : selectedEmoji?.emoji}
                </Text>
              </View>
            )}
          </View>
          <View style={styles.rightMessage} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
  flexRow: {
    width: '65%',
    backgroundColor: colors.white,
    borderRadius: 14,
    flexDirection: 'row',
    paddingVertical: 10,
    elevation: 0.6,
    position: 'relative',
  },
  containerReceive: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  emojiWrapper: {
    height: 28,
    width: 28,
    backgroundColor: colors.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    position: 'absolute',
    left: 0,
    bottom: -20,
  },
  emojiPosition: {
    fontSize: 20,
    zIndex: 10,
  },
  leftMessage: {
    width: 0,
    height: 0,
    bottom: 10,
    right: 10,
    borderLeftWidth: 20,
    borderLeftColor: 'transparent',
    borderTopWidth: 20,
    borderTopColor: colors.white,
    alignSelf: 'flex-start',
    borderRightColor: colors.black,
  },
  contentMessage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginRight: 8,
  },
  textMessage: {
    fontSize: 16,
    color: colors.black,
    width: '80%',
  },
  timeRead: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 10,
    marginBottom: -6,
  },
  timeText: {
    fontSize: 12,
    color: colors.gray,
  },
  containerSender: {
    width: '65%',
    backgroundColor: colors.msgGreen,
    borderRadius: 14,
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    alignSelf: 'flex-end',
    elevation: 2,
  },
  rightMessage: {
    width: 0,
    height: 0,
    bottom: 18,
    left: 20,
    right: 0,
    borderRightWidth: 40,
    borderRightColor: 'transparent',
    borderTopWidth: 20,
    borderTopColor: colors.msgGreen,
    alignSelf: 'flex-end',
    borderLeftColor: colors.black,
  },
  contentMessageRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 8,
  },
  textMessageRight: {
    fontSize: 16,
    color: colors.black,
    width: '75%',
    marginRight: 6,
  },
  timeReadRight: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 10,
    marginBottom: -6,
    width: '100%',
    textAlign: 'right',
  },
  timeTextRight: {
    fontSize: 12,
    color: colors.gray,
    marginRight: 2,
  },
});

export default ChatBubble;
