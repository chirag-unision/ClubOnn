import React, { useState } from 'react';
import { MainScreen, Timeline } from "./StackScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home() {

  const Stack = createNativeStackNavigator();
  const main = "main";
  const search = "search";

  return (
  <Stack.Navigator initialRouteName={main} screenOptions={{headerShown: false}}>
    <Stack.Screen name={main} component={MainScreen} />
    <Stack.Screen name={search} component={Timeline} />
  </Stack.Navigator>
  )
}
