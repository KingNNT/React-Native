import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import AppData from './Data';
const DATA = AppData;

const DetailScreen = ({item}) => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>{DATA[0].title}</Text>
      </View>
      <View>
        <Text style={styles.paragraph}>{DATA[0].data[0].content[0].value}</Text>
        <Text style={styles.paragraph}>{DATA[0].data[0].content[1].value}</Text>
        <Text style={styles.paragraph}>{DATA[0].data[0].content[2].value}</Text>
      </View>
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={{
            uri: DATA[0].urlimage,
          }}
        />
      </View>
      <View>
        <Text style={styles.paragraph}>{DATA[0].data[0].content[3].value}</Text>
        <Text style={styles.paragraph}>{DATA[0].data[0].content[4].value}</Text>
        <Text style={styles.paragraph}>{DATA[0].data[0].content[5].value}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    marginHorizontal: 10,
    fontSize: 20,
    textAlign: 'center',
    color: '#9e4e3e',
    textShadowColor: '#474241',
  },
  paragraph: {
    marginVertical: 10,
    marginHorizontal: 5,
    fontSize: 14,
    textAlign: 'justify',
    color: '#000000',
  },
  containerImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 150,
  },
});

export default DetailScreen;
