import React from 'react';
import {CardChat, Gap, Menu} from '../../components';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {styles} from './style';
import {IconGroup, IconStore, IconTeam, IconUserAdd} from '../../assets';

const ContactPage = ({navigation, route}) => {
  const users = route?.params?.users;

  const goToMessage = item => {
    navigation.navigate('ChatPage', {
      users: item,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        <Menu icon={<IconGroup width={25} height={25} />} title="New Group" />
        <Menu
          icon={<IconUserAdd width={25} height={25} />}
          title="New Contact"
        />
        <Menu
          icon={<IconTeam width={25} height={25} />}
          title="New Community"
        />
        <View>
          <Text style={styles.titleContact}>Discover</Text>
          <Gap height={16} />
          <Menu
            icon={<IconStore width={25} height={25} />}
            title="New Community"
          />
        </View>
        <View>
          <Text style={styles.titleContact}>Contacts on WhatsApp</Text>
          <Gap height={16} />
          {users &&
            users?.map(item => (
              <CardChat
                name={item?.displayName || '+62 ' + item?.phoneNumber}
                message={item?.status}
                onPress={() => goToMessage(item)}
                uri={item?.image}
              />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactPage;
