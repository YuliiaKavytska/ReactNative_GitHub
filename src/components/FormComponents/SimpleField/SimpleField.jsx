import React from 'react'
import { ErrorMessage } from '@hookform/error-message';
import { Text, TextInput, View } from 'react-native'
import { useController } from 'react-hook-form'

import { gSt } from '../../../helpers/styles'

const SimpleField = ({ label, name, submited, ...inputProps }) => {
  const { field, fieldState: {error, invalid, isTouched} } = useController({ name })
  const styles = [gSt.input]
  if (invalid &&	(isTouched || submited) ) {
    styles.push(gSt.invalidInput)
  }

  return (
    <View style={{ marginBottom: 5 }}>
      {label && <Text style={gSt.label}>{label}</Text>}
      <TextInput style={styles}
                 onChangeText={field.onChange}
                 onBlur={field.onBlur}
                 value={field.value}
                 {...inputProps}
      />
      <View style={{minHeight: 17}}>
        {error && (isTouched || submited) && <Text style={gSt.inputError}>{error.message}</Text>}
      </View>
    </View>
  )
}

export default SimpleField

