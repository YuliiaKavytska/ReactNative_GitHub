import React from 'react'
import { ActivityIndicator, Image, Text, TouchableWithoutFeedback, StyleSheet, View, Linking } from 'react-native'
import { useQuery } from '@apollo/client'

import { gSt } from '../../helpers/styles'
import { GET_ME } from '../../apolloClient/getAccount'
import Error from '../../components/FormComponents/Error'
import { useOpenUrl } from '../../helpers/hooks/useOpenUrl'

const Account = () => {
  const {
    loading,
    error,
    data
  } = useQuery(GET_ME)

  const user = data?.user

  const canOpen = useOpenUrl(user?.url)

  if (loading) {
    return <ActivityIndicator size='small' color='#132C33' />
  }

  const onOpenLink = async () => {
    canOpen && await Linking.openURL(user.url)
  }

  return (
    <>
      <Error error={error} />
      <Image source={{ uri: user?.avatarUrl }} style={s.img} />
      <View style={s.content}>
        <TouchableWithoutFeedback onPress={onOpenLink}>
          <Text style={[s.name, gSt.linkStyle]}>{user.name}</Text>
        </TouchableWithoutFeedback>
        <Text style={s.login}>{user.login}</Text>
        <View style={s.repos}>
          <Text style={s.boldText}>Repositories count: </Text>
          <Text style={gSt.text}>{user.repositories.totalCount}</Text>
        </View>
        {Boolean(user.bio) && <Text style={gSt.text}>{user.bio}</Text>}
      </View>
    </>
  )
}

export default Account

const s = StyleSheet.create({
  img: {
    width: '100%',
    height: 300
  },
  content: {
    paddingVertical: 20,
    paddingHorizontal: 15
  },
  name: {
    fontWeight: '700',
    fontSize: 20,
  },
  repos: {
    marginTop: 20,
    flexDirection: 'row'
  },
  boldText: {
    fontWeight: '700',
    fontSize: 16
  },
  login: {
    color: 'gray',
    marginTop: 10
  }
})