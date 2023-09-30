import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainStack from './MainStack';
import LoginScreen from '../screens/Login/Login';

export default function LoginStack() {
    const Stack = createNativeStackNavigator();
    const main = "Main";
    const login = "Login";
    return (
        <Stack.Navigator initialRouteName={login} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={login} component={LoginScreen} />
            <Stack.Screen name={main} component={MainStack} />
        </Stack.Navigator>
    )
}