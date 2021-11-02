import React, { useEffect } from 'react'

import { Button, Modal, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { gSt } from '../helpers/styles'
import { useForm, FormProvider } from 'react-hook-form';
import Input from '../Components/SimpleField/FieldContainer';

const initialValues = {
  title: '123'
}

const NewPostModal = ({isOpenModal, setIsOpenModal}) => {
  const formProps = useForm()
  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = formProps

  useEffect(() => {
    reset(initialValues)
  }, [])

  const onSubmit = data => {
    console.log(data);
    setIsOpenModal(false)
  };

  const onError = (errors, e) => {
    return console.log(errors)
  }

  const onReset = () => {
    reset(initialValues)
  }

  return (
    <Modal visible={isOpenModal} animationType="slide">
      <SafeAreaView style={s.modal}>
        <View style={s.modalHeader}>
          <Text style={gSt.mainTitle}>New post</Text>
        </View>
        <View style={s.modalBody}>
          <FormProvider {...formProps}>
          <Input name='title' label='Post title' rules={{ required: 'Field is required!' }} />
          </FormProvider>
        </View>
        <View style={s.actionButtons}>
          <View style={s.button}>
            <Button style={s.button} color='red' title='Cancel' onPress={() =>setIsOpenModal(false)} />
          </View>
          <View style={s.button}>
            <Button style={s.button} color='green' title='Reset' onPress={onReset} />
          </View>
          <View style={s.button}>
            <Button title='Create' onPress={handleSubmit(onSubmit, onError)} />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  )
}

export default NewPostModal

const s = StyleSheet.create({
  modal: {
    flex: 1
  },
  modalHeader: {
    paddingVertical: 10
  },
  modalBody: {
    flexGrow: 1,
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  actionButtons: {
    flexDirection: 'row'
  },
  button: {
    flexGrow: 1,
    flexBasis: '33.333%',
    textAlign: 'center'
  }
})
