import React from 'react';
import {View, Text, StatusBar} from 'react-native';

class Greeting extends React.Component {
  render() {
    let greetingString = `Hello ${this.props.name}`;
    return <Text>{greetingString}</Text>;
  }
}

const MultipleGreetings: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{ alignItems: 'center' }}>
        <Greeting name="KingNNT"></Greeting>
      </View>
    </>
  );
};

export default MultipleGreetings;
