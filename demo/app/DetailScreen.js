import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import AppData from './Data';
const DATA = AppData;

const DetailScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.a}>
        <Text style={styles.a}>Test</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#d1e0de',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
  },
  subtitle: {
    fontSize: 12,
  },
  tinyLogo: {
    height: 90,
    width: 90,
  },
  ranger: {
    padding: 5,
  },
});

export default DetailScreen;
