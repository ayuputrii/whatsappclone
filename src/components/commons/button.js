import React from 'react'
import { TouchableOpacity } from 'react-native'

const Button = ({onPress, children, buttonStyle}) => {
  return (
    <TouchableOpacity
      onPress={onPress} 
      style={buttonStyle}
    >
      {children}
    </TouchableOpacity>
  )
}

export default Button
