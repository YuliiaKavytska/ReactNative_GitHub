import React, { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button, Modal, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { gSt } from '../../helpers/styles'
import Input from '../../components/FormComponents/SimpleField/FieldContainer'
import Select from '../../components/FormComponents/Select/Form/FormSelectContainer'
import { repoTypes } from '../../helpers/defaultData'

const initialValues = {
  name: '',
  description: '',
  visibility: ''
}

const schema = yup.object().shape({
  name: yup.string().matches(/\D+/, 'Input characters only').test('len', 'Minimum length is 1 character', val => val.length > 0).required('Name field is required field'),
  description: yup.string().matches(/\D*/, 'Input characters only').test('len', 'Minimum length is 1 character', val => val ? val.length > 0 : true),
  visibility: yup.string().oneOf(['PUBLIC', 'PRIVATE']).required('Visibility of repository is required field')
})

const NewRepoModal = ({ isOpenModal, setIsOpenModal, onSubmitForm }) => {
  const formProps = useForm({ mode: 'onBlur', resolver: yupResolver(schema), defaultValues: initialValues })
  const { handleSubmit, reset } = formProps

  useEffect(() => {
    reset(initialValues)
  }, [])

  const onSubmit = data => {
    onSubmitForm(data)
    reset()
    setIsOpenModal(false)
  }

  const onError = (errors, e) => {
    return console.log(errors)
  }

  const onReset = () => {
    reset()
  }

  const onClose = () => {
    setIsOpenModal(false)
    reset()
  }

  return (
    <Modal visible={isOpenModal} animationType='slide'>
      <SafeAreaView style={s.modal}>
        <View style={s.modalHeader}>
          <Text style={gSt.mainTitle}>New repository</Text>
        </View>
        <View style={s.modalBody}>
          <FormProvider {...formProps}>
            <Input name='name' label='Repository name' placeholder='Repository title' />
            <Input name='description' label='Repository description' placeholder='Repository description' />
            <Select name='visibility' list={repoTypes} placeholder='Visibility' isInput label='Visibility' />
          </FormProvider>
        </View>
        <View style={s.actionButtons}>
          <View style={s.button}>
            <Button style={s.button} color='red' title='Cancel' onPress={onClose} />
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

export default NewRepoModal

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
