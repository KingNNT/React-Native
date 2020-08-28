import React from 'react';
import {Text, View, Button} from 'react-native';
const util = require('util');

class DetailMenuScreen extends React.Component {
  static navigationOptions = {
    title: 'Second Screen',
  };
  render() {
    return (
      <View>
        <Text>This is Second Screen</Text>
      </View>
    );
  }
}
export default DetailMenuScreen;
