import React from 'react';
import { StackNavigator } from '@react-navigation/stack';

import MenuScreen from './Screens/MenuScreen/MenuScreen';
import DetailMenuScreen from './Screens/DetailMenuScreen/DetailMenuScreen';

const Stack = StackNavigator();

const App: () => React$Node = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MenuScreen" component={MenuScreen} />
      <Stack.Screen name="DetailMenuScreen" component={DetailMenuScreen} />
    </Stack.Navigator>
  );
}

export default App;
