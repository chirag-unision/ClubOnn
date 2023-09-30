import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabNav from '../screens/BottomTabNav/BottomTabNav';
import LoginStack from './LoginStack';

export default function MainStack() {
  const Stack = createNativeStackNavigator();
  const main = "Main";
  const login = "Login";
  return (
      <Stack.Navigator initialRouteName={main} screenOptions={{ headerShown: false }}>
          <Stack.Screen name={main} component={BottomTabNav} />
          <Stack.Screen name={login} component={LoginStack} />
      </Stack.Navigator>
      // <BottomTabNav />
  )
}