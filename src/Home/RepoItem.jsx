import React, { useEffect, useState } from 'react'
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { gSt } from '../helpers/styles'

const RepoItem = ({ item }) => {
  const [active, setActive] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkLoading = async () => {
      const canOpenURL = await Linking.canOpenURL(item.url)
      active !== canOpenURL && setActive(canOpenURL)
      setLoading(false)
    }

    checkLoading()
  }, [])

  const onOpenLink = async () => {
    active && await Linking.openURL(item.url)
  }

  if(loading) {
    return null
  }

  return (
    <View style={[s.repoItem, gSt.shadow]}>
      <Text style={s.repoTitle}>{item.name}</Text>
      <Text style={s.mainLang}>{item.primaryLanguage.name}</Text>
      <TouchableOpacity onPress={onOpenLink}>
        <Text style={active ? s.activeLink : s.disableLink}>View repository</Text>
      </TouchableOpacity>
    </View>
  )
}

export default RepoItem

const s = StyleSheet.create({
  repoItem: {
    backgroundColor: '#fff',
    borderColor: '#51C4D3',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 15,
    padding: 15
  },
  repoTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10
  },
  mainLang: {
    marginBottom: 10
  },
  activeLink: {
    color: '#0375ff',
    fontSize: 14
  },
  disableLink: {
    color: 'gray'
  }
})