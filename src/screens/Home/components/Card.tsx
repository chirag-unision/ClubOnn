import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Card() {
  return (
    <View style={styles.card}>
        <View style={styles.titlesection}>
        <Image style={styles.profileImg} source={{uri: 'https://img.freepik.com/premium-vector/charity-abstract-logo-healthy-lifestyle_660762-34.jpg'}} width={80} height={80} />
        <View>
            <Text style={styles.headtext}>Open Dance Society Faridabad</Text>
            <Text style={[styles.text, styles.badge]}>dsfd</Text>
        </View>
        </View>
        <Text style={[styles.text, styles.description]}>
        This meta description generator uses machine learning (GPT-3 from Open AI) to generate short description ideas for your articles. It has been trained specifically for pages with long content and is best suited for guides, how-to articles, listicles, etc. To use the generator, specify the subject of your article
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff'
    },
    headtext: {
        color: '#fff',
        fontSize: 18,
        width: 200
      },
      card: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 5,
        borderRadius: 10,
        margin: 5,
        height: 190,
        width: 300,
        backgroundColor: '#272727'
      },
      titlesection: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5
      },
      profileImg: {
        borderRadius: 5,
        marginHorizontal: 5
      },
      badge: {
        padding: 5,
      },
      description: {
        padding: 10,
        height: 90
      }
})