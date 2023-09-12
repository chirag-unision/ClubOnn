import { StyleSheet } from 'react-native'
import { Button } from "@react-native-material/core";
import React, { useState } from 'react'

export default function SelectButton() {
  const [isPicked, setIsPicked]= useState(false);

  return (
    <Button onPress={()=> setIsPicked(isPicked?false:true)} variant={isPicked?"contained":"outlined"} title="Outlined" color="white" style={styles.choiceBtn} />
  )
}

const styles = StyleSheet.create({
    choiceBtn: {
        margin: 5
    }
})