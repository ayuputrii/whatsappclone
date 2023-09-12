import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SearchInput} from '../../forms';
import {CardChat} from '../../commons';

const SearchComponent = ({goBack, data, navigation, value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewSearch}>
        <SearchInput
          goBack={goBack}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
      {data &&
        data?.map((item, index) => {
          const message = item?.messages[0]?.content;
          const photo = item?.image;

          const goRoomChat = item => {
            navigation.navigate('ChatPage', {
              data: item,
            });
          };

          return (
            <View key={index} style={styles.padding}>
              <CardChat
                onPress={() => goRoomChat(item)}
                name={item?.displayName}
                uri={photo}
                message={message}
              />
            </View>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  viewSearch: {
    elevation: 5,
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 3.84,
    shadowOpacity: 0.3,
    minHeight: 100,
    paddingHorizontal: 4,
    paddingVertical: 16,
  },
  padding: {
    padding: 16,
  },
});
export default SearchComponent;
