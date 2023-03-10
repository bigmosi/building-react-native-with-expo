import { StyleSheet } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ImageScreen from './src/screens/ImageScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="App_to_Home" >
          <Stack.Screen
             component={HomeScreen}
             name="App_to_Home"
              />
          <Stack.Screen
             component={DetailsScreen}
             name="Home_to_Details"
              />
            <Stack.Screen
             component={DetailsScreen}
             name="Details_to_Details"
              />
          <Stack.Screen
           component={ImageScreen}
           name="BigImageView"
            />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
