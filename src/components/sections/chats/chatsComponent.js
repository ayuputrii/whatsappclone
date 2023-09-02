import React from 'react'
import Card from '../../commons/card'
import { StyleSheet } from 'react-native'

const ChatsComponent = () => {
  return (
    <React.Fragment>
      <Card 
        onPress={() => {}}
        name="Group" 
        message="Hallo" 
        countMessage={1} 
        time="13:42" 
      />
      <Card 
        onPress={() => {}}
        name="Group" 
        message="Hallo" 
        countMessage={1} 
        time="13:42" 
      />
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
})

export default ChatsComponent
