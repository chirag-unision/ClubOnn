import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { Button } from "@react-native-material/core";
import React, { useEffect, useState } from 'react'
import ChoiceButton from './components/SelectButton'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {baseURL} from '../../../app.json';

export default function Boarding() {
  const [uid, setUid]= useState();
  const [data, setData]= useState();
  const [interests, setInterests]= useState([]);

  useEffect(()=> {
    getUser();
    createStrogare();
    axios.get(baseURL+'getCategories')
    .then(function (response) {
      setInterests(response.data.interests)

    })
    .catch(function (error) {
      console.log(error);
    });
  },[])

  const getUser= async ()=> {
    const user= await AsyncStorage.getItem('key');
    setUid(user);
    console.log('user: '+user);
  }

  const getData= async ()=> {
    const data= await AsyncStorage.getItem('getInterests');
    setData(data);
  }

  const createStrogare= async ()=> {
    let data= await AsyncStorage.setItem('getInterests', '[]');
  }

  const handleSubmit= ()=> {
    getData();
    console.log(data);
    axios.post(baseURL+'setcategories', {
      userID: uid,
      data: data
    })
    .then(function (response) {
      console.log(response)

    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Boarding</Text>
      <View style={styles.container}>
        {interests.length!=0 && interests.map((item)=> {
          return <ChoiceButton refid={item.id} title={item.catname} />
        })}
      </View>
      <Button variant="contained" title="Submit" onPress={handleSubmit} />
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