import { StyleSheet } from 'react-native'
import { Button } from "@react-native-material/core";
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  refid: number;
  title: string;
}

export default function SelectButton(props: Props) {
  const [isPicked, setIsPicked]= useState(false);

  const pickItem= ()=> {
    if(!isPicked) {
      setItemToStorage(props.refid);
      setIsPicked(true);
    } else {
      removeFromStorage(props.refid);
      setIsPicked(false);
    }
  }

  const setItemToStorage= async (value:any)=> {
    let data= await AsyncStorage.getItem('getInterests');
    let json= JSON.parse(data);
    json.push(value);
    console.log(json);
    await AsyncStorage.setItem('getInterests', JSON.stringify(json));
  }

  const removeFromStorage=async (value:any) => {
    let data= await AsyncStorage.getItem('getInterests');
    let json= JSON.parse(data);
    let index= json.indexOf(value);
    json.splice(index, 1);
    console.log(json);
    await AsyncStorage.setItem('getInterests', JSON.stringify(json));
  }

  return (
    <Button onPress={pickItem} variant={isPicked?"contained":"outlined"} title={props.title} color="white" style={styles.choiceBtn} />
  )
}

const styles = StyleSheet.create({
    choiceBtn: {
        margin: 5
    }
})