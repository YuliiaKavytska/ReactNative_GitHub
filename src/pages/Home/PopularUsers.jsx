import React, { useRef, useState } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import { NetworkStatus, useLazyQuery } from '@apollo/client'

import { gSt } from '../../helpers/styles'
import UserItem from './UserItem'
import { GET_USERS } from '../../apolloClient/getUsers'
import { cities } from '../../helpers/defaultData'
import Error from '../../components/FormComponents/Error'
import Select from '../../components/FormComponents/Select/Select'

const PopularUsers = () => {
  const [city, setCity] = useState(null)
  const [getUsers, {
    loading,
    error,
    data,
    refetch,
    called,
    fetchMore, networkStatus
  }] = useLazyQuery(GET_USERS, { notifyOnNetworkStatusChange: true })
  const ref = useRef()

  const onSearch = (selectedItem) => {
    if (called) {
      refetch({ searchText: selectedItem?.value + ' language:JavaScript', after: null })
      ref.current.scrollToIndex({ index: 0, animated: true })
    } else {
      getUsers({ variables: { searchText: selectedItem?.value + ' language:JavaScript', after: null } })
    }
    setCity(selectedItem)
  }

  const handleOnEndReached = () => {
    if (data?.search?.pageInfo.hasNextPage)
      return fetchMore({
        variables: {
          after: data?.search?.pageInfo.endCursor
        },
        updateQuery: onUpdate
      })
  }

  const onUpdate = (prev, { fetchMoreResult }) => {
    if (!fetchMoreResult) return prev
    const { pageInfo } = fetchMoreResult.search
    const nodes = [
      ...prev?.search?.nodes,
      ...fetchMoreResult?.search?.nodes
    ]

    const filteredRepeated = nodes.filter((thing, index, self) =>
      index === self.findIndex((t) => t.id === thing.id)
    )

    return Object.assign({}, prev, {
      search: {
        __typename: prev.search.__typename,
        nodes: filteredRepeated,
        pageInfo,
        userCount: fetchMoreResult.search.userCount
      }
    })
  }

  const refreshing = networkStatus === NetworkStatus.refetch

  return (
    <>
      <Select list={cities} placeholder='Choose location...' onDone={onSearch} />
      <Error error={error?.message} />
      {data?.search?.nodes && <>
        {data?.search?.nodes && <Text style={[gSt.mainTitle, s.usersTitle]}>GitHub users from {city?.label}</Text>}
        <View style={s.usersList}>
          {loading && refreshing ?
            <ActivityIndicator size='small' color='#132C33' /> :
            <FlatList
              ref={ref}
              horizontal
              data={data?.search?.nodes}
              renderItem={({ item }) => <UserItem item={item} />}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              onEndReached={handleOnEndReached}
              onEndReachedThreshold={0}
            />
          }
        </View>
      </>
      }
    </>
  )
}

export default PopularUsers


const s = StyleSheet.create({
  usersList: {
    paddingTop: 20,
    marginHorizontal: -10
  },
  usersTitle: {
    paddingTop: 15
  }
})
