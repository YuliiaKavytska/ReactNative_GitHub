import React, { useEffect } from 'react'
import Select from '../Select'
import { useController } from 'react-hook-form'
import { repoTypes } from '../../../../helpers/defaultData'

const FormSelect = ({name, submitted, ...restProps}) => {
  const {field, fieldState: {error, isTouched}} = useController({name})

  const onChange = (selected) => {
    const value = selected?.value
    !value && field.onBlur()
    field.onChange(value || '')
  }

  useEffect(() => {
    submitted && field.onBlur()
  }, [submitted])

  return (
    <Select {...restProps} value={repoTypes.find(item => item.value === field.value)} error={error} isTouched={isTouched} onDone={onChange} />
  )
}

export default FormSelect
