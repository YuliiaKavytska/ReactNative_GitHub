import React from 'react'
import { Text } from 'react-native'

import { gSt } from '../../helpers/styles'

const Error = ({error}) => Boolean(error) ? <Text style={gSt.errorMsg} >{error}</Text> : null

export default Error
