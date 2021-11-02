import React, { useState } from 'react'

import { StyleSheet, TouchableOpacity, View } from 'react-native'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import { gSt } from '../helpers/styles'
import VectorIcon from 'react-native-vector-icons/Ionicons'
import NewPostModal from '../Home/NewPostModal'

const Footer = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const navigation = useNavigation()

  const onPress = (page) => () => {
    navigation.navigate(page)
  }

  return (
    <View style={[s.footer, gSt.shadow]}>
      <TouchableOpacity onPress={onPress('Home')} style={s.coloumn}>
        <EntypoIcon name='home' size={30} color="#132C33" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress('Contacts')} style={s.coloumn}>
        <AntDesignIcon name='contacts' size={30} color="#132C33" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsOpenModal(true)} style={[s.addPost, gSt.shadow, {
        transform: [{ translateX: -27 }]
      }]} >
        <VectorIcon name='ios-add-circle' size={65} color="green" />
      </TouchableOpacity>
      <NewPostModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
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
    left: '50%',
  }
})