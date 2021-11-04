import React from 'react'

import { StyleSheet, Image, Text, View, TouchableWithoutFeedback, Linking } from 'react-native'
import { useOpenUrl } from '../../helpers/hooks/useOpenUrl'
import { gSt } from '../../helpers/styles'

const User = ({route: {params: user}}) => {
  const canOpen = useOpenUrl(user?.url)

  const onOpenLink = async () => {
    canOpen && await Linking.openURL(user.url)
  }

  return (
    <View style={s.postContainer}>
      <Image source={{ uri: user.avatarUrl }} style={s.postImg}  />
      <TouchableWithoutFeedback onPress={onOpenLink}>
        <Text style={[gSt.linkStyle, s.title]}>{user.name}</Text>
      </TouchableWithoutFeedback>
      <Text style={s.subtitle}>{user.login}</Text>
      {Boolean(user.bio) && <Text style={s.text}>{user.bio}</Text>}
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
