import React from 'react'
import { StyleSheet, View } from 'react-native'

const Gap = ({style, height = 50, width = "100%"}) => {
  return (
    <View style={[styles.container, style, {height: height, width: width}]} />
  )
}

const styles = StyleSheet.create({
  container: ({height, width}) => ({
    width: width,
    height: height
  })
})

export default Gap
