import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { TextInput, Button } from "@react-native-material/core"
import React, { useState } from 'react'

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [emailCheck, setEmailCheck]= useState(false);
  return (
    <View style={styles.wrapper}>
      <View style={styles.cotainer}>
        <Text style={[styles.text, {textAlign: 'center', fontSize: 20}]}>Login</Text>
        <TextInput variant="standard" label="Email" color="#fff" style={{ margin: 16, width: 300 }} />
        {emailCheck && <TextInput variant="standard" label="Enter One-Time Password" color="#fff" style={{ margin: 16, width: 300 }} />}
        <Button
          title="Login"
          loading={loading}
          loadingIndicatorPosition="overlay"
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