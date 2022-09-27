import React from 'react';
import {StyleSheet, Image} from 'react-native';

class CustomMarkerRed extends React.Component {
  render() {
    // console.log('this.props', this.props);
    return (
      <Image
        style={{height: 25, width: 25, marginTop: 5, justifyContent: 'center'}}
        source={require('../image/red_round.png')}
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

export default CustomMarkerRed;
