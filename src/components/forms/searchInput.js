import React from 'react';
import TextInput from './textInput';
import {IconArrowLeftGray} from '../../assets';
import {colors} from '../../utils/colors';
import {StyleSheet, View} from 'react-native';
import {Button} from '../commons';

const SearchInput = ({goBack, value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <Button onPress={goBack}>
        <IconArrowLeftGray width={25} height={25} />
      </Button>
      <TextInput
        placeholder="Cari..."
        placeholderTextColor={colors.black}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    borderRadius: 55,
    paddingHorizontal: 16,
  },
});

export default SearchInput;
