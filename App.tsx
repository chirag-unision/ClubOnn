import React, {useState} from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Svg, Path, Mask} from 'react-native-svg'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Home from './src/screens/Home/Home';
import Feeds from './src/screens/Feeds/Feeds';
import Chats from './src/screens/Chats/Chats';
import Profile from './src/screens/Profile/Profile';
import Notifications from './src/screens/Notifications/Notifications';
import LoginScr from './src/screens/Login/Login';
import Boarding from './src/screens/Login/Boarding';

const Tab = createBottomTabNavigator();

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [isLogin, setIsLogin]= useState(async() => {
    const value= await AsyncStorage.getItem('key')
    if(value) {
      return true;
    } else {
      return false;
    }
  });

  const validationCheck= ()=> {
    setIsLogin(true);
  }

  return (
    <>
      {isLogin ? <NavigationContainer>
      <Tab.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#F4717F',
          tabBarInactiveTintColor: 'grey',
          tabBarLabelStyle: {
            fontFamily: 'Poppins-Regular',
            paddingBottom: 10
          },
          tabBarStyle: {
            backgroundColor: '#000',
            padding: 20,
          },
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return <Svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M2.40426 10.2147V18.002C2.40426 19.1065 3.29969 20.002 4.40426 20.002H14.4468C15.5514 20.002 16.4468 19.1065 16.4468 18.002V10.2147H16.6566C17.5373 10.2147 17.9879 9.15866 17.3786 8.52281L9.91955 0.739466C9.53166 0.334712 8.88687 0.327853 8.49045 0.724265L0.707107 8.50761C0.077142 9.13758 0.523308 10.2147 1.41421 10.2147H2.40426Z" fill="white"/>
              </Svg>              

            },
          }}
          name={'Home'}
          component={() => <Home />}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return <Svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Mask id="path-1-inside-1_2364_11200" fill="white">
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M17.452 26.002C23.251 26.002 27.952 21.3009 27.952 15.502C27.952 9.70296 23.251 5.00195 17.452 5.00195C11.653 5.00195 6.95203 9.70296 6.95203 15.502C6.95203 21.3009 11.653 26.002 17.452 26.002ZM15.202 13.252L22.702 10.252L19.702 17.752L12.202 20.752L15.202 13.252ZM18.577 15.5031C18.577 16.1244 18.0733 16.6281 17.452 16.6281C16.8307 16.6281 16.327 16.1244 16.327 15.5031C16.327 14.8818 16.8307 14.3781 17.452 14.3781C18.0733 14.3781 18.577 14.8818 18.577 15.5031Z"/>
                </Mask>
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M17.452 26.002C23.251 26.002 27.952 21.3009 27.952 15.502C27.952 9.70296 23.251 5.00195 17.452 5.00195C11.653 5.00195 6.95203 9.70296 6.95203 15.502C6.95203 21.3009 11.653 26.002 17.452 26.002ZM15.202 13.252L22.702 10.252L19.702 17.752L12.202 20.752L15.202 13.252ZM18.577 15.5031C18.577 16.1244 18.0733 16.6281 17.452 16.6281C16.8307 16.6281 16.327 16.1244 16.327 15.5031C16.327 14.8818 16.8307 14.3781 17.452 14.3781C18.0733 14.3781 18.577 14.8818 18.577 15.5031Z" fill="white"/>
                <Path d="M22.702 10.252L23.6305 10.6233L24.4971 8.4569L22.3306 9.32348L22.702 10.252ZM15.202 13.252L14.8306 12.3235L14.4327 12.4826L14.2735 12.8806L15.202 13.252ZM19.702 17.752L20.0734 18.6804L20.4713 18.5213L20.6305 18.1233L19.702 17.752ZM12.202 20.752L11.2735 20.3806L10.407 22.547L12.5734 21.6804L12.202 20.752ZM26.952 15.502C26.952 20.7487 22.6987 25.002 17.452 25.002V27.002C23.8033 27.002 28.952 21.8532 28.952 15.502H26.952ZM17.452 6.00195C22.6987 6.00195 26.952 10.2552 26.952 15.502H28.952C28.952 9.15068 23.8033 4.00195 17.452 4.00195V6.00195ZM7.95203 15.502C7.95203 10.2552 12.2053 6.00195 17.452 6.00195V4.00195C11.1008 4.00195 5.95203 9.15068 5.95203 15.502H7.95203ZM17.452 25.002C12.2053 25.002 7.95203 20.7487 7.95203 15.502H5.95203C5.95203 21.8532 11.1008 27.002 17.452 27.002V25.002ZM22.3306 9.32348L14.8306 12.3235L15.5734 14.1804L23.0734 11.1804L22.3306 9.32348ZM20.6305 18.1233L23.6305 10.6233L21.7736 9.88056L18.7736 17.3806L20.6305 18.1233ZM12.5734 21.6804L20.0734 18.6804L19.3306 16.8235L11.8306 19.8235L12.5734 21.6804ZM14.2735 12.8806L11.2735 20.3806L13.1305 21.1233L16.1305 13.6233L14.2735 12.8806ZM17.452 17.6281C18.6256 17.6281 19.577 16.6767 19.577 15.5031H17.577C17.577 15.5722 17.5211 15.6281 17.452 15.6281V17.6281ZM15.327 15.5031C15.327 16.6767 16.2784 17.6281 17.452 17.6281V15.6281C17.383 15.6281 17.327 15.5722 17.327 15.5031H15.327ZM17.452 13.3781C16.2784 13.3781 15.327 14.3295 15.327 15.5031H17.327C17.327 15.4341 17.383 15.3781 17.452 15.3781V13.3781ZM19.577 15.5031C19.577 14.3295 18.6256 13.3781 17.452 13.3781V15.3781C17.5211 15.3781 17.577 15.4341 17.577 15.5031H19.577Z" fill="white" mask="url(#path-1-inside-1_2364_11200)"/>
              </Svg>              

            },
          }}
          name={'Feeds'}
          component={() => <Feeds />}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return <Svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M22.4442 30.5999H7.20001C6.24523 30.5999 5.32955 30.2206 4.65442 29.5455C3.97929 28.8704 3.60001 27.9547 3.60001 26.9999V8.0999C3.60001 7.38382 3.88447 6.69706 4.39082 6.19071C4.89717 5.68437 5.58392 5.3999 6.30001 5.3999H18.9C19.6161 5.3999 20.3028 5.68437 20.8092 6.19071C21.3155 6.69706 21.6 7.38382 21.6 8.0999V10.7999H29.6712C31.05 10.8413 32.4 11.8799 32.4 13.6475V22.4999C32.4 23.216 32.1155 23.9027 31.6092 24.4091C31.1028 24.9154 30.4161 25.1999 29.7 25.1999H25.9092L25.1478 28.4813C24.8058 29.9483 23.616 30.6359 22.4442 30.5999ZM27.018 12.5999H21.6V27.8675C21.6 28.9475 23.1498 29.1275 23.3946 28.0745L26.892 13.0139C26.928 12.8681 26.9694 12.7313 27.018 12.5999ZM9.90001 12.5999C10.1387 12.5999 10.3676 12.5051 10.5364 12.3363C10.7052 12.1675 10.8 11.9386 10.8 11.6999C10.8 11.4612 10.7052 11.2323 10.5364 11.0635C10.3676 10.8947 10.1387 10.7999 9.90001 10.7999C9.66131 10.7999 9.43239 10.8947 9.26361 11.0635C9.09483 11.2323 9.00001 11.4612 9.00001 11.6999C9.00001 11.9386 9.09483 12.1675 9.26361 12.3363C9.43239 12.5051 9.66131 12.5999 9.90001 12.5999ZM9.00001 17.9999C9.00001 18.2386 9.09483 18.4675 9.26361 18.6363C9.43239 18.8051 9.66131 18.8999 9.90001 18.8999H15.3C15.5387 18.8999 15.7676 18.8051 15.9364 18.6363C16.1052 18.4675 16.2 18.2386 16.2 17.9999C16.2 17.7612 16.1052 17.5323 15.9364 17.3635C15.7676 17.1947 15.5387 17.0999 15.3 17.0999H9.90001C9.66131 17.0999 9.43239 17.1947 9.26361 17.3635C9.09483 17.5323 9.00001 17.7612 9.00001 17.9999ZM9.00001 24.2999C9.00001 24.5386 9.09483 24.7675 9.26361 24.9363C9.43239 25.1051 9.66131 25.1999 9.90001 25.1999H15.3C15.5387 25.1999 15.7676 25.1051 15.9364 24.9363C16.1052 24.7675 16.2 24.5386 16.2 24.2999C16.2 24.0612 16.1052 23.8323 15.9364 23.6635C15.7676 23.4947 15.5387 23.3999 15.3 23.3999H9.90001C9.66131 23.3999 9.43239 23.4947 9.26361 23.6635C9.09483 23.8323 9.00001 24.0612 9.00001 24.2999Z" fill="#F8F8F8" />
              </Svg>

            },
          }}
          name={'Notifications'}
          component={Notifications}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return <Svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M9.90405 8.82031V8.82031C9.90405 7.71574 10.7995 6.82031 11.9041 6.82031H24.9041C26.0086 6.82031 26.9041 7.71574 26.9041 8.82031V16.3203C26.9041 17.4249 26.0086 18.3203 24.9041 18.3203H24.4041V22.1171C24.4041 23.0455 23.249 23.4727 22.6448 22.7678L21.4041 21.3203" stroke="white" stroke-width="1.2"/>
                <Path d="M14.4041 21.6824L9.90792 24.3051C9.24127 24.694 8.40405 24.2131 8.40405 23.4413V21.6824H7.90405C6.79948 21.6824 5.90405 20.7869 5.90405 19.6824V11.8203C5.90405 10.7157 6.79948 9.82031 7.90405 9.82031H20.4041C21.5086 9.82031 22.4041 10.7157 22.4041 11.8203V19.6824C22.4041 20.787 21.5086 21.6824 20.4041 21.6824H14.4041Z" fill="white" stroke="white" stroke-width="1.2"/>
              </Svg>                      

            },
          }}
          name={'Chats'}
          component={Chats}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return <Svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M15 0C16.9891 0 18.8968 0.790176 20.3033 2.1967C21.7098 3.60322 22.5 5.51088 22.5 7.5C22.5 9.48912 21.7098 11.3968 20.3033 12.8033C18.8968 14.2098 16.9891 15 15 15C13.0109 15 11.1032 14.2098 9.6967 12.8033C8.29018 11.3968 7.5 9.48912 7.5 7.5C7.5 5.51088 8.29018 3.60322 9.6967 2.1967C11.1032 0.790176 13.0109 0 15 0ZM15 18.75C23.2875 18.75 30 22.1062 30 26.25V30H0V26.25C0 22.1062 6.7125 18.75 15 18.75Z" fill="white" />
              </Svg>
            },
          }}
          name={'Profile'}
          component={Profile}
        />
      </Tab.Navigator>
      </NavigationContainer> :
      <LoginScr validationCheck={validationCheck} /> }
    </>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
