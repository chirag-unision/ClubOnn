import { StyleSheet, Text, View, Image, Pressable, ScrollView, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {baseURL} from '../../../app.json';

export default function ClubProfile({route}:any) {
  const [joinreq, setJoinReq]= useState(false);
  const [follow, setFollow]= useState(false);
  const [data, setData]= useState([]);
//   const { clubid }= route.params;
  const { title, description }= route.params;

  useEffect(()=> {
    // axios.post(baseURL+'getclubinfo', {
    //     // clubid: clubid
    // })
    // .then((response)=> {
    //     console.log(response.data);
    // })
    // .catch((error)=> {
    //     console.log(error);
    // })
  }, []);

  const setClubToFollow= ()=> {
    axios.post(baseURL+'setFollowing', {
        // clubid: clubid
    })
    .then((response)=> {
        console.log(response.data);
    })
    .catch((error)=> {
        console.log(error);
    })
  }

  return (
    <ScrollView style={styles.wrapper}>
        <View style={styles.top}>
            <Image source={{ uri: "https://img.freepik.com/premium-vector/charity-abstract-logo-healthy-lifestyle_660762-34.jpg" }} style={styles.displayImage} />
            <View>
                <Text style={[styles.text, styles.title]}>{title}</Text>
                <Text style={[styles.text]}>{data.category}</Text>
            </View>
        </View>
        <View>
            <View></View>
            <View>
                <Text style={[styles.text, styles.description]}>Description</Text>
                <Text style={[styles.text, styles.description]}>
                    {description}
                </Text>
            </View>
        </View>
        <View style={styles.buttonWrapper}>
            <Pressable style={[styles.button, joinreq ? {backgroundColor: 'black'} : {backgroundColor: 'purple'}]} onPress={() => setJoinReq(true)}>
                <Text style={[styles.text]}>{joinreq ? "Request Sent" : "Send Join Request"}</Text>
            </Pressable>
            <Pressable style={[styles.button, follow ? {backgroundColor: 'black'} : {backgroundColor: 'purple'}]} onPress={() => setFollow(true)}>
                <Text style={[styles.text]}>{follow ? "Following" : "Follow"}</Text>
            </Pressable>
        </View>
        <View>
            <Text>Gallery</Text>
        </View>
        <View><Text>TImeline</Text></View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#1E1E1E',
        // height: Dimensions.get('screen').height
    },
    displayImage: {
        width: 80,  
        height: 80,
        borderRadius: 5,
        marginHorizontal: 10
    },
    text: {
        color: '#fff'
    },
    top: {
        margin: 10,
        padding: 10,
        flex: 1,
        flexDirection: 'row',
    },
    title: {
        fontSize: 22
    },
    buttonWrapper: {
        flex: 1,
        flexDirection: 'row'
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10
    },
    description: {
        padding: 10
    }
})