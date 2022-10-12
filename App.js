import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import home from './src/screens/homeScreen';
import payment from './src/screens/payment';

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={home} />
          <Stack.Screen name="payment" component={payment} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
