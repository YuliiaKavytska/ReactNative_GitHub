import React from 'react'

import { Text, TextInput } from 'react-native'
import { gSt } from '../helpers/styles'
import { useController } from 'react-hook-form'

const SimpleField = ({label, name, rules, defaultValue, ...inputProps}) => {
  const { field } = useController({ name, rules, defaultValue });

  return (
    <>
      {label && <Text style={gSt.label}>{label}</Text>}
      <TextInput style={gSt.input}
                 onChangeText={field.onChange}
                 onBlur={field.onBlur}
                 value={field.value}
                 {...inputProps}
      />
    </>
  )
}

export default SimpleField
