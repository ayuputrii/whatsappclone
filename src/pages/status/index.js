import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {NotFoundPage} from '../../components';

const StatusPage = () => {
  return (
    <View style={styles.container}>
      <NotFoundPage />
    </View>
  );
};

export default StatusPage;
