import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

const DATA = require('./Data/Data.js');
const styles = require('./Styles/Styles.App.js');

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

export default App;
