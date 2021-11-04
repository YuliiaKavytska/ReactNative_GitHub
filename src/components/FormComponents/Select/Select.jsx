import React, { useEffect, useState } from 'react'

import { StyleSheet, Text, View } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import { gSt } from '../../../helpers/styles'

const Select = ({list, placeholder, onChange, onDone, value, isInput, label, error, isTouched}) => {
  const [selected, setSelected] = useState(value)

  useEffect(() => {
    setSelected(value )
  }, [value])


  const onValueChange = (value) => {
    const foundItem = list.find(item => item.value === value)
    if (foundItem) {
      setSelected(foundItem)
      onChange && onChange(value)
    }
  }

  const onDonePress = () => {
    if (onDone) {
      onDone(selected)
    }
  }

  const style = isInput ? error && isTouched ? invalidInputStyles : inputStyles : pickerSelectStyles

  return (
    <View>
      {label && <Text style={gSt.label}>{label}</Text>}
      <RNPickerSelect
        onValueChange={onValueChange}
        items={list}
        placeholder={{
          label: placeholder,
          value: null,
          color: '#9EA0A4'
        }}
        style={style}
        onDonePress={onDonePress}
        value={selected?.value || {}}
      />
      <View style={{minHeight: 17}}>
        {error && isTouched && <Text style={gSt.inputError}>{error.message}</Text>}
      </View>
    </View>
  )
}

export default Select

const defaultStyles = {
  fontSize: 16,
  fontWeight: '700',
  paddingVertical: 8,
  paddingHorizontal: 10,
  borderWidth: 1,
  borderColor: 'gray',
  borderRadius: 4,
  paddingRight: 30, // to ensure the text is never behind the icon
}

const defaultInputStyles = {
  textAlign: 'left',
  color: '#132C33',
  backgroundColor: '#fff',
  paddingLeft: 15,
  fontWeight: '400',
  fontSize: 14
}

const buttonStyles = {
  textAlign: 'center',
  color: '#132C33',
  backgroundColor: '#51C4D3'
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    ...defaultStyles,
    ...buttonStyles
  },
  inputAndroid: {
    ...defaultStyles,
    ...buttonStyles
  }
})

const inputStyles = StyleSheet.create({
  inputIOS: {
    ...defaultStyles,
    ...defaultInputStyles
  },
  inputAndroid: {
    ...defaultStyles,
    ...defaultInputStyles
  }
})


const invalidInputStyles = StyleSheet.create({
  inputIOS: {
    ...defaultStyles,
    ...defaultInputStyles,
    borderColor: '#ff0038'
  },
  inputAndroid: {
    ...defaultStyles,
    ...defaultInputStyles,
    borderColor: '#ff0038'
  }
})