import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { TextInput, Button } from "@react-native-material/core"
import React, { useState } from 'react'
import axios from 'axios'
import {baseURL} from '../../../app.json'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Login({navigation}:any) {
  const [loading, setLoading] = useState(false);
  const [mobileCheck, setMobileCheck]= useState(false);
  const [mobile, setMobile]= useState('');

  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem('key', value);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('key');
      if (value !== null) {
        console.log(value)
        navigation.replace('Main')

      }
    } catch (e) {
      // error reading value
    }
  };
  const handleLogin= ()=> {
    let regex= /^[6-9][0-9]{9}$/;
    if(regex.test(mobile)) {
      axios.post(baseURL+'login', {
        mobile: mobile
      })
      .then(function (response) {
        storeData(response.data.token)
        storeData(mobile)
        getData();
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.cotainer}>
        <Text style={[styles.text, {textAlign: 'center', fontSize: 20}]}>Login</Text>
        <TextInput variant="standard" label="Mobile Number" color="#fff" style={{ margin: 16, width: 300 }} onChangeText={(text)=> setMobile(text)} />
        {mobileCheck && <TextInput variant="standard" label="Enter One-Time Password" color="#fff" style={{ margin: 16, width: 300 }} />}
        <Button
          title="Login"
          loading={loading}
          loadingIndicatorPosition="overlay"
          onPress={handleLogin}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    height: Dimensions.get('screen').height
  },
  cotainer: {
    padding: 20,
    margin: 0,
    backgroundColor: 'black'
  },
  text: {
    color: '#fff'
  }
})