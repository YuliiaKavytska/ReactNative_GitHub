import React from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import { useQuery } from '@apollo/client'

import { GET_REPO } from '../../apolloClient/GetRepo'
import { gSt } from '../../helpers/styles'
import RepoItem from './RepoItem'
import Error from '../../components/FormComponents/Error'

const MyRepos = () => {
  const { loading, error, data } = useQuery(GET_REPO)

  if (loading) {
    return <ActivityIndicator size='small' color='#132C33' />
  }

  return (
    <View style={s.repos}>
      <Text style={gSt.mainTitle}>Your repositories</Text>
      <Error error={error?.message} />
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
    flex: 1,
    paddingTop: 15
  },
  repoList: {
    paddingTop: 20
  }
})