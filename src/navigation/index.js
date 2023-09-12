import React, {useState} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import topTabNavigation from './topTabNavigation';
import {colors} from '../utils/colors';
import {Pressable, StyleSheet, View} from 'react-native';
import {IconCameraWhite, IconDots, IconSearch} from '../assets/icons';
import {ChatPage, UserInformationPage} from '../pages';
import {ChatHeader, ContactHeader} from '../components';
import ContactPage from '../pages/contatct';
import SearchChatPage from '../pages/chats/searchChat';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState(false);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="topTabNavigation"
        component={topTabNavigation}
        options={{
          headerRight: props => (
            <View style={styles.headerRight}>
              <Pressable
                android_ripple={{
                  color: colors.inActiveGreen,
                  foreground: true,
                  borderless: true,
                }}
                onPress={() => {}}>
                <IconCameraWhite height={24} width={24} />
              </Pressable>
              <Pressable
                android_ripple={{
                  color: colors.inActiveGreen,
                  foreground: true,
                  borderless: true,
                }}
                onPress={() => navigation.navigate('SearchChatPage')}>
                <IconSearch height={24} width={24} />
              </Pressable>
              <Pressable
                android_ripple={{
                  color: colors.inActiveGreen,
                  foreground: true,
                  borderless: true,
                }}
                onPress={() => {}}>
                <IconDots height={24} width={24} />
              </Pressable>
            </View>
          ),
          headerShadowVisible: false,
          headerShown: true,
          headerTitle: 'WhatsApp',
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitleStyle,
          headerTitleAlign: 'left',
        }}
      />
      <Stack.Screen
        name="ChatPage"
        component={ChatPage}
        options={{
          headerBackTitle: '',
          headerStyle: {
            backgroundColor: colors.tealGreen,
          },
          header: ({navigation, route}) => {
            const displayName =
              route?.params?.data?.displayName ||
              route?.params?.users?.displayName?.slice(0, 14);
            const photo =
              route?.params?.data?.image || route?.params?.users?.image;

            const goInformationPage = route => {
              navigation.navigate('UserInformationPage', {
                data: route?.params?.data,
                users: route?.params?.users,
              });
            };

            return (
              <ChatHeader
                goInformationPage={() => goInformationPage({...route})}
                navigation={navigation}
                name={displayName}
                uri={photo}
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="UserInformationPage"
        component={UserInformationPage}
        options={{
          headerBackTitle: '',
          headerStyle: {
            backgroundColor: colors.tealGreen,
          },
          headerShown: false,
          fullScreenGestureEnabled: true,
        }}
      />
      <Stack.Screen
        name="ContactPage"
        component={ContactPage}
        options={{
          headerBackTitle: '',
          headerStyle: {
            backgroundColor: colors.tealGreen,
          },
          header: ({navigation, route}) => {
            const userCount = route?.params?.users?.length;

            return <ContactHeader navigation={navigation} count={userCount} />;
          },
        }}
      />

      <Stack.Screen
        name="SearchChatPage"
        component={SearchChatPage}
        options={{
          headerBackTitle: '',
          headerStyle: {
            backgroundColor: colors.tealGreen,
          },
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.tealGreen,
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 24,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 120,
  },
});
