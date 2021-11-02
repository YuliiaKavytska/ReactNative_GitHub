import React from 'react'
import { useFormContext } from 'react-hook-form'
import SimpleField from '../SimpleField'

const FieldContainer = (props) => {
const {name} = props
  const formContext = useFormContext();

  if (!formContext || !name) {
    const msg = !formContext ? "TextInput must be wrapped by the FormProvider" : "Name must be defined"
    console.error(msg)
    return null
  }

  return (
    <SimpleField {...props} />
  )
}

export default FieldContainer
