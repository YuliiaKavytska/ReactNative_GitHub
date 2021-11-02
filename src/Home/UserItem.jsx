import React from 'react'

import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { gSt } from '../helpers/styles'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'

const UserItem = ({ item }) => {
  const navigation = useNavigation()

  if (item.__typename !== 'User') {
    return null
  }

  return (
    <TouchableOpacity style={[s.userItem, gSt.shadow]} onPress={() => navigation.navigate('User', item)}>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.35)']}
        style={s.shadow}
      />
      <Image source={{ uri: item.avatarUrl }} style={s.userImg} />
      <View style={s.userInfo}>
        <Text style={s.userTitle}>{item.name}</Text>
        <Text style={s.userText}>{item.login}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default UserItem

const s = StyleSheet.create({
  shadow: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2
  },
  userItem: {
    position: 'relative',
    borderRadius: 10,
    marginHorizontal: 10,
    overflow: 'hidden',
    width: 300,
    height: 200
  },
  userImg: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'cover'
  },
  userInfo: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    zIndex: 3
  },
  userTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff'
  },
  userText: {
    fontSize: 14,
    color: '#fff'
  }
})