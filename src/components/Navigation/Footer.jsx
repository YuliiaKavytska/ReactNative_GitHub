import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import VectorIcon from 'react-native-vector-icons/Ionicons'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import { gSt } from '../../helpers/styles'

const Footer = ({ setIsOpenModal }) => {
  const navigation = useNavigation()

  const onPress = (page) => () => {
    navigation.navigate(page)
  }

  return (
    <View style={[s.footer, gSt.shadow]}>
      <TouchableOpacity onPress={onPress('Home')} style={s.coloumn}>
        <EntypoIcon name='home' size={30} color='#132C33' />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress('Account')} style={s.coloumn}>
        <MatIcon name='account' size={30} color='#132C33' />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsOpenModal(true)} style={[s.addPost, gSt.shadow, {
        transform: [{ translateX: -27 }]
      }]}>
        <VectorIcon name='ios-add-circle' size={65} color='green' />
      </TouchableOpacity>
    </View>
  )
}

export default Footer

const s = StyleSheet.create({
  footer: {
    backgroundColor: '#51C4D3',
    paddingBottom: 20,
    flexDirection: 'row'
  },
  coloumn: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center'
  },
  addPost: {
    position: 'absolute',
    top: -34,
    left: '50%'
  }
})