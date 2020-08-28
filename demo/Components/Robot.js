import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const Robot: () => React$Node = () => {
  let urlImage = {
    uri:
      'https://p0ct8ommu0.vcdn.com.vn/media/catalog/product/cache/95cb36d3254e0a20b33361b06e7c0ce9/magento/VECTO/RC2108/RC2108_2.jpg',
  };
  return (
    <>
      {/* <StatusBar barStyle="default"></StatusBar> */}
      <Image source={urlImage} style={{width: 300, height: 200}}></Image>
    </>
  );
};

export default Robot;
