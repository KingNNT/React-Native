import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

import AppData from './Data';

const DATA = AppData;

const Item = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.item}>
        <View style={styles.logo}>
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

const MenuScreen = (props) => {
  const renderItem = ({item}) => (
    <Item
      item={item}
      onPress={() => props.navigation.navigate('Detail', item)}
    />
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    flexWrap: 'nowrap',
    width: 300,
    textAlign: 'justify',
  },
  subtitle: {
    fontSize: 12,
    flexWrap: 'nowrap',
    width: 300,
    textAlign: 'justify',
  },
  tinyLogo: {
    height: 48,
    width: 48,
  },
  ranger: {
    padding: 5,
    justifyContent: 'flex-end',
  },
});

export default MenuScreen;
