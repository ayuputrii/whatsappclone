import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconNotFound} from '../../assets';

const NotFoundPage = () => {
  return (
    <View style={styles.container}>
      <IconNotFound width={250} height={250} />
      <Text style={styles.notFound}>Sorry, Page Not Found!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  notFound: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default NotFoundPage;
