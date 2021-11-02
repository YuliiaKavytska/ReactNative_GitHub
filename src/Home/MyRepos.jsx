import React from 'react'
import { StyleSheet, ActivityIndicator, FlatList, ScrollView, Text, View } from 'react-native'

import { GET_REPO } from '../apolloClient/GetRepo'
import { useQuery } from '@apollo/client'
import { gSt } from '../helpers/styles'
import RepoItem from './RepoItem'
import Error from '../Components/Error'

const MyRepos = () => {
  const { loading, error, data } = useQuery(GET_REPO)

  if (loading) {
    return <ActivityIndicator size='small' color='#132C33' />
  }

  return (
    <View style={s.repos}>
    <Text style={gSt.mainTitle}>Your repositories</Text>
      <Error error={error} />
      <View style={s.repoList}>
        <FlatList data={data?.user?.repositories?.nodes}
                  keyExtractor={(item) => item.name}
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item }) => <RepoItem item={item} />
                  } />
      </View>
    </View>
  )
}

export default MyRepos

const s = StyleSheet.create({
  repos: {
    flex: 1
  },
  repoList: {
    paddingTop: 20
  }
})