import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {PhotoProfileNotFound} from '../../assets';

const Photo = ({uri, imgStyle}) => {
  return (
    <React.Fragment>
      {uri ? (
        <Image source={{uri: uri}} style={[styles.photoProfile, imgStyle]} />
      ) : (
        <Image source={PhotoProfileNotFound} style={styles.photoProfile} />
      )}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  photoProfile: {
    width: 45,
    height: 45,
    borderRadius: 45,
    marginRight: 14,
    resizeMode: 'cover',
  },
});

export default Photo;
