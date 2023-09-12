import React, {useEffect, useState} from 'react';
import {SearchComponent} from '../../components';
import {getData} from '../../api';

const SearchChatPage = ({navigation}) => {
  const [dataChat, setDataChat] = useState([]);

  const getChat = async text => {
    const queryParams = `message=${text}&displayName=${text}`;
    try {
      const response = await getData(
        'https://private-30e04-ayu.apiary-mock.com/search?' + queryParams,
      );
      setDataChat(response);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeQuerySearch = text => {
    getChat(text);
  };

  useEffect(() => {
    getChat();
  }, []);

  return (
    <SearchComponent
      goBack={() => navigation.navigate('ChatsPage')}
      data={dataChat}
      navigation={navigation}
      onChangeText={text => onChangeQuerySearch(text)}
    />
  );
};

export default SearchChatPage;
