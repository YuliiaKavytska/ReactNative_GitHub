import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Account from '../../pages/Account/Account'
import Home from '../../pages/Home/Home'
import User from '../../pages/User/User'

const Stack = createStackNavigator()

const Navigate = () => {
  return <Stack.Navigator>
    <Stack.Screen name='Home' component={Home} options={headerStyles} />
    <Stack.Screen name='Account' component={Account} options={headerStyles} />
    <Stack.Screen name='User' component={User} options={headerStyles} />
  </Stack.Navigator>
}

export default Navigate


const headerStyles = {
  title: 'GitHub',
  headerStyle: {
    backgroundColor: '#51C4D3',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
  },
  headerTintColor: '#132C33',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 20
  }
}