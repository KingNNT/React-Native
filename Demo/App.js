/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *ZP
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const DATA = [
  {
    id: '1',
    title: 'Thể thao',
    subtitle: 'Tin tức về thể thao...',
    urlimage:
      'https://i1-vnexpress.vnecdn.net/2019/03/02/bai-toan-3768-1551057063-6906-1551496131.png?w=680&h=0&q=100&dpr=2&fit=crop&s=RB0E7t9Wamfp3EmE4PDPeQ',
  },
  {
    id: '2',
    title: 'Văn hóa',
    subtitle: 'Tin tức về văn hóa...',
    urlimage: 'https://www.goldlogo.xyz/images/LogoBoVanHoaTTVN.jpg',
  },
  {
    id: '3',
    title: 'Đời sống',
    subtitle: 'Tin tức về đời sống...',
    urlimage:
      'https://cunghocvui.com/storage/caches/image_show_small/uploads/university/ce5e4430e08000ff5c6ca828b4df3ffc.jpg',
  },
];

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

      {/*đây là cột thứ 2*/}
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
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  title: {
    fontSize: 32,
  },
  subtitle: {
    fontSize: 18,
  },
  tinyLogo: {
    height: 48,
    width: 48,
  },
  ranger: {
    padding: 10,
  },
});

export default App;
