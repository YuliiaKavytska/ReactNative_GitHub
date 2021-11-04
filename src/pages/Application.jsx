import React, { useState } from 'react'
import { View } from 'react-native'
import { useMutation } from '@apollo/client'

import { gSt } from '../helpers/styles'
import Navigate from '../components/Navigation/Navigate'
import Footer from '../components/Navigation/Footer'
import NewRepoModal from './Home/NewRepoModal'
import { CREATE_REPO } from '../apolloClient/createRepo'
import { GET_REPO } from '../apolloClient/GetRepo'

const Application = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const [createRepo] = useMutation(CREATE_REPO,{
    refetchQueries: [
      GET_REPO,
      'getRepos'
    ],
  })

  const onFormSubmit = (variables) => {
    createRepo({variables})
  }

  return (
    <View style={gSt.app}>
      <Navigate />
      <Footer setIsOpenModal={setIsOpenModal} />
      <NewRepoModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} onSubmitForm={onFormSubmit} />
    </View>
  )
}

export default Application
