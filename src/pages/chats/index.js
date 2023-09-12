import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {styles} from './styles';
import {Button, ChatsComponent} from '../../components';
import {IconMessageWhite} from '../../assets';
import {getData} from '../../api';

const ChatsPage = ({navigation}) => {
  const [users, setUsers] = useState([]);
  const [dataChat, setDataChat] = useState([]);

  const getUsers = async () => {
    const data = await getData(
      'https://private-30e04-ayu.apiary-mock.com/users',
    );
    setUsers(data);
  };

  const getDataChat = async () => {
    const data = await getData(
      'https://private-30e04-ayu.apiary-mock.com/messages',
    );
    setDataChat(data);
  };

  const goToContact = () => {
    navigation.navigate('ContactPage', {
      userCount: users?.length,
      users: users,
    });
  };

  useEffect(() => {
    getUsers();
    getDataChat();
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
        <ChatsComponent data={dataChat} navigation={navigation} />
      </ScrollView>
      <Button buttonStyle={styles.btnMessage} onPress={goToContact}>
        <IconMessageWhite width={25} height={25} />
      </Button>
    </SafeAreaView>
  );
};

export default ChatsPage;
