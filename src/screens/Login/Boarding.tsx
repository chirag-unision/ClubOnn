import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { Button } from "@react-native-material/core";
import React, { useState } from 'react'
import ChoiceButton from './components/SelectButton'

export default function Boarding() {

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Boarding</Text>
      <View style={styles.container}>
        <ChoiceButton />
        <ChoiceButton />
        <ChoiceButton />
        <ChoiceButton />
        <ChoiceButton />
        <ChoiceButton />
      </View>
      <Button variant="contained" title="Submit" />
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#1E1E1E',
        height: Dimensions.get('screen').height,
        flex: 1
    },
    container: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    text: {
        color: '#fff'
    }
})