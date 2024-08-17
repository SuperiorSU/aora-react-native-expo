import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, isLoading,textStyle, containerStyle}) => {
    
  return (
    <TouchableOpacity 
    onPress={handlePress}
    activeOpacity={0.7}
    className={`rounded-xl min-h-[62px] justify-center items-center bg-secondary ${containerStyle} ${isLoading?'opacity-50':''}`} disabled={isLoading}>
      <Text className={`text-lg font-gmedium text-primary ${textStyle}`} >{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton