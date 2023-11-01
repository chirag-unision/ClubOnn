import { 
  Pressable, 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  Dimensions, 
  Image 
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseURL} from '../../../app.json';

export function MainScreen({ navigation }:any) {
  const [data, setData]= useState([]);

  useEffect(()=> {
    getSuggestions();
  }, []);

  const getSuggestions= async ()=> {
    const interests= await AsyncStorage.getItem('getInterests');
    axios.post(baseURL+'getSuggestions', {
      // userID: uid,
      interests: interests
    })
    .then(function (response) {
      setData(response.data.data);

    })
    .catch(function (error) {
      console.log(error);
    });
  }

  interface DataItems {
    title: string,
    description: string,
    category: number
  }
  
    return (
      <View style={styles.wrapper}>
        <ScrollView style={styles.container}>
          <View style={styles.locationInput}>
            <Text style={styles.text}>You haven't joined any club yet</Text>
          </View>
          <View style={styles.section}>
            <ScrollView horizontal={true} >
              {data.map((item: DataItems)=> {
                if(item.category==1)
                return <Card title={item.title} description={item.description} navigation={navigation} />
              })}
            </ScrollView>
          </View>
          <View style={styles.section}>
            <ScrollView horizontal={true} >
              {data.map((item: DataItems)=> {
                if(item.category==2)
                return <Card title={item.title} description={item.description} navigation={navigation} />
              })}
            </ScrollView>
          </View>
          <View style={styles.section}>
            <ScrollView horizontal={true} >
              {data.map((item: DataItems)=> {
                if(item.category==3)
                return <Card title={item.title} description={item.description} navigation={navigation} />
              })}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
}


export function Timeline() {
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
      padding: 5,
      borderRadius: 5,
      margin: 10,
      // maxHeight: 250,
      // backgroundColor: '#272727'
    },
    button: {
      backgroundColor: '#793BF7',
      padding: 15,
      color: '#fff',
      borderRadius: 40,
    },
    text: {
      color: '#fff'
    },
    locationInput: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      maxHeight: 60,
      borderRadius: 5,
      zIndex: 10,
      paddingVertical: 20
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
    section: {
      paddingVertical: 10,
      marginVertical: 20
    }
})