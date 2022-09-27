import React from 'react';
import {StyleSheet, Image} from 'react-native';

class CustomMarkerGreenRound extends React.Component {
  render() {
    return (
      <Image
        style={{height: 25, width: 25, marginTop: 5, justifyContent: 'center'}}
        source={require('../image/green_round.png')}
        resizeMode="contain"
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 25,
    width: 25,
    marginTop: 5,
    justifyContent: 'center',
  },
});

export default CustomMarkerGreenRound;
