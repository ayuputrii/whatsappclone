import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import ChatsComponent from '../../components/sections/chats/chatsComponent'
import { styles } from './styles'

const ChatsPage = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
        <ChatsComponent />
      </ScrollView>
    </SafeAreaView>
  )
}

export default ChatsPage
