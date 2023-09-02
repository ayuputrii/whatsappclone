import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import topTabNavigation from "./topTabNavigation";
import ChatsPage from "../pages/chats";
import { colors } from "../utils/colors";
import { Pressable, StyleSheet, View } from "react-native";
import IconCamera from "../assets/icons/ic_camera_line.svg";
import IconSearch from "../assets/icons/ic_search.svg";
import IconDots from "../assets/icons/ic_dots.svg"

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Root" 
        component={topTabNavigation} 
        options={{
          headerRight: (props) => (
           <View style={{flexDirection: 'row', jutifyContent: 'space-between'}}>
             <Pressable 
              android_ripple={{
                color: colors.inActiveGreen,
                foreground: true,
                borderless: true,
              }}
              style={{marginRight: 34}}
              onPress={() => {}}>
              <IconCamera height={24} width={24} />
              </Pressable>
             <Pressable 
              android_ripple={{
                color: colors.inActiveGreen,
                foreground: true,
                borderless: true,
              }}
              style={{marginRight: 24}}
              onPress={() => {}}>
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
          headerTitle: "WhatsApp",
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitleStyle,
          headerTitleAlign: "left",
          
        }}
      />
      {/* <Stack.Screen name="ChatsPage" component={ChatsPage} /> */}
    </Stack.Navigator>
  )
}

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
    fontWeight: "bold",
    color: "#FFF",
    fontSize: 24,
  }
})

