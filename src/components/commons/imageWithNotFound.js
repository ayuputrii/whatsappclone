import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {ImageNotFound} from '../../assets';

const ImageWithNotFound = ({photo, imgStyle}) => {
  return (
    <React.Fragment>
      {photo ? (
        <Image source={photo} style={[styles.img, imgStyle]} />
      ) : (
        <Image source={ImageNotFound} style={styles.img} />
      )}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 70,
    height: 70,
    marginRight: 2,
    resizeMode: 'cover',
  },
});

export default ImageWithNotFound;
