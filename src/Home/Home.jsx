import React from 'react'

import { View } from 'react-native'
import { gSt } from '../helpers/styles'
import PopularUsers from './PopularUsers'
import MyRepos from './MyRepos'

const Home = ({ navigation }) => {

  return (
    <View style={gSt.container}>
      <PopularUsers />
      <MyRepos />
    </View>
  )
}

export default Home
