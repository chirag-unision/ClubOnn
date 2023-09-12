import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { TextInput, Button } from "@react-native-material/core"
import React, { useState } from 'react'
import axios from 'axios';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [mobileCheck, setMobileCheck]= useState(false);
  const [mobile, setMobile]= useState('');

  const handleLogin= ()=> {
    axios.post('http://localhost:3100/login', {
      mobile: mobile
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
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