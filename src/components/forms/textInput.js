import React from 'react'
import { StyleSheet, TextInput as InputText } from 'react-native';
import { colors } from '../../utils/colors';

const TextInput = ({editable, multiline, value, onContentSizeChange, onChangeText, placeholder}) => {
  return (
    <InputText
      editable={editable}
      multiline={multiline}
      style={styles.textInput}
      value={value}
      placeholder={placeholder}
      onContentSizeChange={onContentSizeChange}
      onChangeText={onChangeText}
    />
  )
}

const styles = StyleSheet.create({
  textInput: {
    width: '80%',
    marginHorizontal: "2%",
    fontSize: 16,
    opacity: 0.4,
    color: colors.black
  },
})

export default TextInput
