import React from 'react';
import {StyleSheet, Image} from 'react-native';

class CustomMarkerYellow extends React.Component {
  render() {
    // console.log('this.props', this.props);
    return (
      <Image
        style={{height: 25, width: 25, marginTop: 5, justifyContent: 'center'}}
        source={require('../image/yellow_round.png')}
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

export default CustomMarkerYellow;
