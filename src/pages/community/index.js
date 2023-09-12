import React from 'react';
import {styles} from './styles';
import {View} from 'react-native';
import {NotFoundPage} from '../../components';

const CommunityPage = () => {
  return (
    <View style={styles.container}>
      <NotFoundPage />
    </View>
  );
};

export default CommunityPage;
