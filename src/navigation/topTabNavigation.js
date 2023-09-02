import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import ChatsPage from '../pages/chats';
import StatusPage from '../pages/status';
import CallsPage from '../pages/calls';
import { StyleSheet, View } from 'react-native';
import IconTeam from '../assets/icons/ic_team.svg';
import IconTeamInActive from '../assets/icons/ic_team_inactive.svg';
import { colors } from '../utils/colors';
import CommunityPage from '../pages/community';

const TopTab = createMaterialTopTabNavigator();

const topTabNavigation = () => {
  return (
    <TopTab.Navigator 
      tabBarPosition="top" 
      initialRouteName="ChatsPage" 
      screenOptions={{
        tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
        tabBarInactiveTintColor: colors.inActiveGreen,
        tabBarActiveTintColor: colors.white,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarStyle: styles.tabBarStyle,
        tabBarItemStyle: styles.tabBarItemStyle
      }}
    >
      <TopTab.Screen 
        name="CommunityPage" 
        component={CommunityPage} 
        options={{
          tabBarIconStyle: styles.tabBarIconStyle,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <View>
              {focused ? (
                <IconTeam width={30} height={20} /> 
              ) : (
                <IconTeamInActive width={30} height={20} /> 
              )}
            </View>
          )
        }}
      />

      <TopTab.Screen 
        name="ChatsPage" 
        component={ChatsPage} 
        options={{ 
          tabBarLabelStyle: [styles.tabBarLabelStyle, {textAlign: 'left'}],
          title: "Chats",
          // tabBarBadge: () => {
          //   return (
          //     <React.Fragment>
          //       <View style={{backgroundColor: colors.white, marginTop: 28, marginRight: 18, width: 20, height: 20, borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
          //         <Text style={{fontSize: 14, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: colors.tealGreen}}>1</Text>
          //       </View>
          //     </React.Fragment>
          //   )
          // }
        }} 
      />
      <TopTab.Screen 
        name="StatusPage" 
        component={StatusPage} 
        options={{ 
          title: "Status",
          tabBarLabelStyle: [styles.tabBarLabelStyle, {textAlign: 'center', marginHorizontal: 18}]
        }} 
      />
      <TopTab.Screen 
        name="CallsPage" 
        component={CallsPage} 
        options={{ 
          title: "Calls",
          tabBarLabelStyle: [styles.tabBarLabelStyle, {textAlign: 'right', right: 0, marginHorizontal: 20}]
        }} 
      />
    </TopTab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    fontSize: 16, 
    fontWeight: "bold", 
    fontStyle: 'normal', 
    textTransform: 'capitalize', 
    lineHeight: 24,
    marginTop: 14
  },
  tabBarStyle: {
    backgroundColor: colors.tealGreen,
    borderTopWidth: 0,
  },
  tabBarIndicatorStyle: {
    backgroundColor: colors.white,
    borderTopColor: colors.tealGreen
  },
  tabBarIconStyle: {
    marginTop: 14,
    marginHorizontal: 14
  },
  tabBarItemStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row', 
    alignContent: 'space-between', 
    paddingHorizontal: 10, 
    left: 0, 
    ight: 0
  }
})

export default topTabNavigation
