import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { Button } from "@react-native-material/core";
import React, { useEffect, useState } from 'react'
import ChoiceButton from './components/SelectButton'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {baseURL} from '../../../app.json';

export default function Boarding() {
  const [interests, setInterests]= useState('');

  useEffect(()=> {
    createStrogare();
    axios.get(baseURL+'getCategories')
    .then(function (response) {
      console.log(response)

    })
    .catch(function (error) {
      console.log(error);
    });
  },[])

  const createStrogare= async ()=> {
    let data= await AsyncStorage.setItem('getInterests', '[]');
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Boarding</Text>
      <View style={styles.container}>
        <ChoiceButton refid={1} />
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