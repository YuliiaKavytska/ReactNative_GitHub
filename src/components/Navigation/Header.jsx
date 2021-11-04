import React from 'react'

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { gSt } from '../../helpers/styles'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({title}) => {
  const navigation = useNavigation()

  return (
    <View style={[s.header, gSt.shadow]}>
      {navigation.canGoBack() && <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name='chevron-back-outline' size={30} color="#132C33" />
      </TouchableOpacity> }
      <Text style={[gSt.mainTitle, {flexGrow: 1}]}>
        {title}
      </Text>
    </View>
  )
}

export default Header

const s = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingBottom: 15,
    backgroundColor: '#51C4D3',
    textAlign: 'center',
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15
  }
})