import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, Pressable } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Settings= ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.cotainer}>
        <View style={styles.profileBox}>
          <View>
            <Text style={styles.text}>Chirag Kaushik</Text>
            <Text style={styles.text}>9992887812</Text>
          </View>
          <View>
            {/* <Image source={{uri: ''}} /> */}
          </View>
        </View>
        <View>
          <Pressable onPress={() => navigation.navigate('ClubsPage')} >
            <Text style={[styles.text, styles.button]}>My Clubs</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('FollowingPage')} >
            <Text style={[styles.text, styles.button]}>Following</Text>
          </Pressable>
          <Text style={[styles.text, styles.button]}>Logout</Text>
        </View>
      </View>
    </View>
  )
}

const ClubsPage= () => {
  return (
    <View style={styles2.wrapper}>
      <View style={styles2.container}>
        <View style={styles2.card}>
            <Image style={styles2.profileImg} source={{uri: 'https://img.freepik.com/premium-vector/charity-abstract-logo-healthy-lifestyle_660762-34.jpg'}} width={80} height={80} />
            <View>
              <Text style={styles2.headtext}>Open Dance Society Faridabad</Text>
              <Text style={[styles2.text, styles2.badge]}>dsfd</Text>
            </View>
        </View>
      </View>
    </View>
  )
}

const FollowingPage= () => {
  return (
    <View style={styles2.wrapper}>
      <View style={styles2.container}>
        <View style={styles2.card}>
            <Image style={styles2.profileImg} source={{uri: 'https://img.freepik.com/premium-vector/charity-abstract-logo-healthy-lifestyle_660762-34.jpg'}} width={80} height={80} />
            <View>
              <Text style={styles2.headtext}>Open Dance Society Faridabad</Text>
              <Text style={[styles2.text, styles2.badge]}>dsfd</Text>
            </View>
        </View>
      </View>
    </View>
  )
}

export default function Notifications() {
  const Stack = createNativeStackNavigator();
  const main = "Settings";
  const clubpg = "ClubsPage";
  const followpg = "FollowingPage";
  
  return (
    <Stack.Navigator initialRouteName={main} screenOptions={{headerShown: false}}>
      <Stack.Screen name={main} component={Settings} />
      <Stack.Screen name={clubpg} component={ClubsPage} />
      <Stack.Screen name={followpg} component={FollowingPage} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#1E1E1E',
        height: Dimensions.get('screen').height
    },
    cotainer: {
      padding: 20,
      margin: 0,
      flex: 1,
      backgroundColor: 'black'
    },
    text: {
      color: 'white',
      fontSize: 16
    },
    profileBox: {
      padding: 10,

    },
    button: {
      padding: 15,
      marginVertical: 5,
      borderRadius: 10,
      backgroundColor:  '#1E1E1E'
    }
})

const styles2 = StyleSheet.create({
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