import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Contacts from '../Contacts/Contacts'
import Home from '../Home/Home'
import User from '../User/User'

const Stack = createStackNavigator()

const Navigate = () => {
  return <Stack.Navigator>
    <Stack.Screen name='Home' component={Home} options={headerStyles} />
    <Stack.Screen name='Contacts' component={Contacts} options={headerStyles} />
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