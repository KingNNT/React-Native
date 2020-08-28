import React from 'react';
import {Text, View, Button} from 'react-native';
const util = require('util');

class MenuScreen extends React.Component {
  static navigationOptions = {
    title: 'First Screen',
  };
  render() {
    return (
      <View>
        <Text>This is Fisrt Screen</Text>
        <Button
          // onPress={}
          title="Go To Second Screen"
        />
      </View>
    );
  }
}

export default MenuScreen;