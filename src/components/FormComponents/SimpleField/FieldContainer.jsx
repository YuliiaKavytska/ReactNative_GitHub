import React from 'react'
import { useFormContext } from 'react-hook-form'

import SimpleField from './SimpleField'

const FieldContainer = (props) => {
  const {name} = props
  const formContext = useFormContext();

  if (!formContext || !name) {
    const msg = !formContext ? "TextInput must be wrapped by the FormProvider" : "Name must be defined"
    console.error(msg)
    return null
  }

  const { formState: { submitCount } } = formContext

  return (
    <SimpleField {...props} submited={!!submitCount}  />
  )
}

export default FieldContainer
