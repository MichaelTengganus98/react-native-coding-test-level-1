import { StyleSheet } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './src/screens/home'
import { FormSubmission } from './src/screens/form_submission'
import { Catalog } from './src/screens/catalog'
import { PokeDetail } from './src/screens/poke_detail'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Form Submission" component={FormSubmission} />
        <Stack.Screen name="Catalog" component={Catalog} />
        <Stack.Screen name="Poke Detail" component={PokeDetail} />
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
