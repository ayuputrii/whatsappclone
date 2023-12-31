import React from 'react';
import {Image, StyleSheet} from 'react-native';
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
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 14,
    resizeMode: 'cover',
  },
});

export default Photo;
