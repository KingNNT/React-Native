import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AppData from './Data';

const DATA = AppData;

const Item = ({item}, {onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.item}>
        <View>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: item.urlimage,
            }}
          />
        </View>

        <View style={styles.ranger}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const MenuScreen = () => {
  const renderItem = ({item}) => {
    <Item
      item={item}
      onPress={() => this.props.navigation.navigate('DetailScr')}
    />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
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

export default MenuScreen;
