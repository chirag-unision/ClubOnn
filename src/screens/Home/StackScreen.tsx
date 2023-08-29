import { Pressable, StyleSheet, Text, TextInput, View, Dimensions, Keyboard } from 'react-native';
import React, { useState } from 'react';
import { Path, Svg } from 'react-native-svg';

export function MainScreen({ navigation }:any) {
    const [showList, setShowList]= useState(false);
    const [location, setLocation]= useState('');
    const [mode, setMode]= useState(0);
  
    const handleFocus= ()=> {
      setShowList(true);
    }
  
    const handleBlur= ()=> {
      setShowList(false);
    }
  
    const locations= [
      {
        title: 'Karnal'
      },
      {
        title: 'Goa'
      }
    ]
  
    const setModeToOne= ()=> {
      setMode(1);
    }
    const setModeToTwo= ()=> {
      setMode(2);
    }
  
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.locationInput}>
            <TextInput 
              style={{flex: 6, color: '#fff', paddingHorizontal: 10, fontSize: 16}}
              placeholder='Your Location' 
              value={location} 
              placeholderTextColor={'#ccc'}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <Pressable style={{flex: 1}}>
              <Svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M22.4442 30.5999H7.20001C6.24523 30.5999 5.32955 30.2206 4.65442 29.5455C3.97929 28.8704 3.60001 27.9547 3.60001 26.9999V8.0999C3.60001 7.38382 3.88447 6.69706 4.39082 6.19071C4.89717 5.68437 5.58392 5.3999 6.30001 5.3999H18.9C19.6161 5.3999 20.3028 5.68437 20.8092 6.19071C21.3155 6.69706 21.6 7.38382 21.6 8.0999V10.7999H29.6712C31.05 10.8413 32.4 11.8799 32.4 13.6475V22.4999C32.4 23.216 32.1155 23.9027 31.6092 24.4091C31.1028 24.9154 30.4161 25.1999 29.7 25.1999H25.9092L25.1478 28.4813C24.8058 29.9483 23.616 30.6359 22.4442 30.5999ZM27.018 12.5999H21.6V27.8675C21.6 28.9475 23.1498 29.1275 23.3946 28.0745L26.892 13.0139C26.928 12.8681 26.9694 12.7313 27.018 12.5999ZM9.90001 12.5999C10.1387 12.5999 10.3676 12.5051 10.5364 12.3363C10.7052 12.1675 10.8 11.9386 10.8 11.6999C10.8 11.4612 10.7052 11.2323 10.5364 11.0635C10.3676 10.8947 10.1387 10.7999 9.90001 10.7999C9.66131 10.7999 9.43239 10.8947 9.26361 11.0635C9.09483 11.2323 9.00001 11.4612 9.00001 11.6999C9.00001 11.9386 9.09483 12.1675 9.26361 12.3363C9.43239 12.5051 9.66131 12.5999 9.90001 12.5999ZM9.00001 17.9999C9.00001 18.2386 9.09483 18.4675 9.26361 18.6363C9.43239 18.8051 9.66131 18.8999 9.90001 18.8999H15.3C15.5387 18.8999 15.7676 18.8051 15.9364 18.6363C16.1052 18.4675 16.2 18.2386 16.2 17.9999C16.2 17.7612 16.1052 17.5323 15.9364 17.3635C15.7676 17.1947 15.5387 17.0999 15.3 17.0999H9.90001C9.66131 17.0999 9.43239 17.1947 9.26361 17.3635C9.09483 17.5323 9.00001 17.7612 9.00001 17.9999ZM9.00001 24.2999C9.00001 24.5386 9.09483 24.7675 9.26361 24.9363C9.43239 25.1051 9.66131 25.1999 9.90001 25.1999H15.3C15.5387 25.1999 15.7676 25.1051 15.9364 24.9363C16.1052 24.7675 16.2 24.5386 16.2 24.2999C16.2 24.0612 16.1052 23.8323 15.9364 23.6635C15.7676 23.4947 15.5387 23.3999 15.3 23.3999H9.90001C9.66131 23.3999 9.43239 23.4947 9.26361 23.6635C9.09483 23.8323 9.00001 24.0612 9.00001 24.2999Z" fill="#ccc" />
              </Svg>
            </Pressable>
          </View>
          {showList &&
          <View style={styles.listbox}>
            {locations.map((item)=> {
              return <Text 
              onPress={()=> {
                setLocation(item.title); 
                Keyboard.dismiss();
              }} 
              style={[styles.text, styles.locationName]}>{item.title}</Text>
            })}
          </View>}
          <View></View>
          <View style={styles.selectBtnContainer}>
            <Pressable style={[styles.selectBtns, mode===1?styles.set:styles.unset]} onPress={setModeToOne}>
              <Text style={styles.text}>Going</Text>
            </Pressable>
            <Pressable style={[styles.selectBtns, mode===2?styles.set:styles.unset]} onPress={setModeToTwo}>
              <Text style={styles.text}>Present</Text>
            </Pressable>
          </View>
          <Pressable>
            <Text style={styles.button} onPress={() => navigation.navigate('search')}>Let's Go!</Text>
          </Pressable>
        </View>
      </View>
    )
}


export function SearchScreen() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
        </View>
      </View>
    )
  }

const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: '#1E1E1E',
      height: Dimensions.get('screen').height
    },
    container: {
      flex: 1,
      padding: 20,
      borderRadius: 20,
      margin: 15,
      maxHeight: 250,
      backgroundColor: '#272727'
    },
    button: {
      backgroundColor: '#793BF7',
      padding: 15,
      color: '#fff',
      borderRadius: 40,
    },
    text: {
      color: '#fff',
    },
    locationInput: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      maxHeight: 60,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 15,
      zIndex: 10
    },
    selectBtnContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    selectBtns: {
      flexGrow: 1,
      flexBasis: 0,
      padding: 20,
      margin: 5,
      borderRadius: 40,
      color: '#fff'
    },
    listbox: {
      position: 'absolute',
      zIndex: 5,
      width: Dimensions.get('screen').width-70,
      minHeight: Dimensions.get('screen').height-500,
      marginHorizontal: 20,
      marginVertical: 20,
      borderRadius: 20,
      backgroundColor: '#000',
      paddingTop: 60
    },
    set: {
      backgroundColor: "#793BF7",
    },
    unset: {
      backgroundColor: "#1F1F1F",
    },
    locationName: {
      paddingHorizontal: 10,
      paddingVertical: 5
    }
})