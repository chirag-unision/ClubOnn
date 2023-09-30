import React, {useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import type { PropsWithChildren } from 'react';
import {
  useColorScheme
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import MainStack from './src/stacks/MainStack';
import LoginStack from './src/stacks/LoginStack';
import BottomTabNav from './src/screens/BottomTabNav/BottomTabNav';
import AsyncStorage from '@react-native-async-storage/async-storage';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [isLogin, setIsLogin]= useState(false);

  useEffect( async () => {
    let value= await AsyncStorage.getItem('key');
    console.log(value)
    if(value) {
      setIsLogin(true)
    }
  }, [])
  
  return (
    <NavigationContainer>
      {isLogin ? <MainStack /> : <LoginStack />}
    </NavigationContainer>

  );
}

export default App;
