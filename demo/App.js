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
import AppData from './app/Data';
const DATA = AppData;

const Item = ({item}) => (
  <TouchableOpacity onPress={() => Alert.alert(item.title)}>
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

const App = () => {
  const renderItem = ({item}) => <Item item={item} />;

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
    fontSize: 16
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

export default App;
