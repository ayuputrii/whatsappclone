import React from 'react';
import ChatBubble from './chatBubble';

const ChatMessage = ({receive, sender, isRead, time, content, reaction}) => {
  return (
    <ChatBubble
      receive={receive}
      sender={sender}
      isRead={isRead}
      time={time}
      content={content}
      reaction={reaction}
    />
  );
};

export default ChatMessage;
