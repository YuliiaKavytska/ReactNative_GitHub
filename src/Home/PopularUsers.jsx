import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'

import { gSt } from '../helpers/styles'
import UserItem from './UserItem'
import { useLazyQuery } from '@apollo/client'
import { GET_USERS } from '../apolloClient/getUsers'
import { cities } from '../helpers/defaultData'
import Error from '../Components/Error'

const PopularUsers = () => {
  const [selectedCity, setSelectedCity] = useState(null)
  const [city, setCity] = useState(null)
  const [getUsers, {
    loading,
    error,
    data,
    refetch,
    called
  }] = useLazyQuery(GET_USERS)

  const onCitySelect = (value) => {
    const foundCity = cities.find(item => item.value === value)
    if (foundCity) {
      setSelectedCity(foundCity)
    }
  }

  const onSearch = () => {
    if (called) {
      refetch({ searchText: selectedCity?.value + ' language:JavaScript' })
    } else {
      getUsers({ variables: {searchText: selectedCity?.value + ' language:JavaScript'} })
    }
  }

  useEffect(() => {
    data && setCity(selectedCity)
  }, [data])

  return (
    <>
      <View style={s.location}>
        <RNPickerSelect
          onValueChange={onCitySelect}
          items={cities}
          placeholder={{
            label: 'Choose location...',
            value: null,
            color: '#9EA0A4'
          }}
          style={pickerSelectStyles}
          onDonePress={onSearch}
          value={selectedCity?.value}
        />
      </View>
      <Error error={error?.message} />
      {data?.search?.nodes && <>
        {data?.search?.nodes && <Text style={gSt.mainTitle}>GitHub users from {city?.label}</Text>}
        <View style={s.usersList}>
          {loading ?
            <ActivityIndicator size='small' color='#132C33' /> :
            <FlatList
              horizontal
              data={data?.search?.nodes}
              renderItem={({ item }) => <UserItem item={item} />}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
            />}

        </View>
      </>
      }
    </>
  )
}

export default PopularUsers


const s = StyleSheet.create({
  usersList: {
    paddingVertical: 20,
    marginHorizontal: -10
  },
  location: {
    paddingVertical: 10
  }
})

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    fontWeight: '700',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    paddingRight: 30, // to ensure the text is never behind the icon
    textAlign: 'center',
    color: '#132C33',
    backgroundColor: '#51C4D3'
  },
  inputAndroid: {
    fontSize: 16,
    fontWeight: '700',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    textAlign: 'center',
    color: '#132C33',
    backgroundColor: '#51C4D3',
    paddingRight: 30 // to ensure the text is never behind the icon
  }
})