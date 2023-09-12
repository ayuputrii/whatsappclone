import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {NotFoundPage} from '../../components';

const CallsPage = () => {
  return (
    <View style={styles.container}>
      <NotFoundPage />
    </View>
  );
};

export default CallsPage;
