import React from 'react'

import { StyleSheet, Image, Text, View } from 'react-native'

const User = ({route: {params: user}}) => {
  return (
    <View style={s.postContainer}>
      <Image source={{ uri: user.avatarUrl }} style={s.postImg}  />
      <Text style={s.title}>{user.name}</Text>
      <Text style={s.subtitle}>{user.login}</Text>
      {user.bio && <Text style={s.text}>{user.bio}</Text>}
    </View>
  )
}

export default User

const s = StyleSheet.create({
  postContainer: {
    flex: 1,
    padding: 15
  },
  postImg: {
    width: '100%',
    height: 250
  },
  title: {
    fontWeight: '700',
    marginTop: 20,
    fontSize: 18
  },
  subtitle: {
    color: 'gray',
  marginTop: 10,
    fontSize: 16
  },
  text: {
    fontSize: 14,
    textAlign: 'justify',
    marginTop: 15
  }
})
