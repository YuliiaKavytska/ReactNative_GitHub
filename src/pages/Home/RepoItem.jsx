import React, { useEffect, useState } from 'react'
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { gSt } from '../../helpers/styles'
import { useOpenUrl } from '../../helpers/hooks/useOpenUrl'

const RepoItem = ({ item }) => {
  const canOpen = useOpenUrl(item.url)

  const onOpenLink = async () => {
    canOpen && await Linking.openURL(item.url)
  }

  return (
    <View style={[s.repoItem, gSt.shadow]}>
      <Text style={s.repoTitle}>{item.name}</Text>
      {item?.primaryLanguage?.name && <Text style={s.mainLang}>{item?.primaryLanguage?.name}</Text>}
      <TouchableOpacity onPress={onOpenLink}>
        <Text style={canOpen ? [s.activeLink, gSt.linkStyle] : s.disableLink}>View repository</Text>
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
    fontSize: 14
  },
  disableLink: {
    color: 'gray'
  }
})