import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { Image, TextInput } from 'react-native'

export default function Notifications() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.card}>
            <Image style={styles.profileImg} source={{uri: 'https://img.freepik.com/premium-vector/charity-abstract-logo-healthy-lifestyle_660762-34.jpg'}} width={80} height={80} />
            <View>
              <Text style={styles.headtext}>Open Dance Society Faridabad</Text>
              <Text style={[styles.text, styles.badge]}>dsfd</Text>
            </View>
        </View>
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
        paddingVertical: 20,
        paddingHorizontal: 10,
        flex: 1
    },
    text: {
        color: 'orange',
        borderRadius: 5,
    },
    headtext: {
        color: '#fff',
        borderRadius: 5,
        fontSize: 20,
    },
    card: {
      // flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start',
      padding: 5,
      borderRadius: 10,
      margin: 5,
      maxHeight: 250,
      backgroundColor: '#272727'
    },
    profileImg: {
      borderRadius: 5,
      marginHorizontal: 5
    },
    badge: {
      padding: 5,
    }
})