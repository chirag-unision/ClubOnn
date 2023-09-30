import React, { useState } from 'react';
import MainScreen from "./MainScreen";
import SearchScreen from "./Search";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Feeds() {

  const Stack = createNativeStackNavigator();
  const main = "main";
  const search = "search";

  return (
  <Stack.Navigator initialRouteName={main} screenOptions={{headerShown: false}}>
    <Stack.Screen name={main} component={MainScreen} />
    <Stack.Screen name={search} component={SearchScreen} />
  </Stack.Navigator>
  )
}
