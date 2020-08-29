import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MenuScreen from './app/MenuScreen';
import DetailScreen from './app/DetailScreen';

const Stack = createStackNavigator();
const MenuScr = MenuScreen;
const DetailScr = DetailScreen;

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu Screen">
        <Stack.Screen
          name="Menu Screen"
          component={MenuScr}
          // navigation="DetailScreen"
        />
        <Stack.Screen name="Detail" component={DetailScr} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
