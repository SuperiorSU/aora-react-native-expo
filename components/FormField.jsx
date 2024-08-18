import { View, Text, TextInput,Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import icons from '../constants/icons'


const FormField = ({title, placeholder, handleTextChange, otherStyle, value, ...props}) => {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyle}`}>
      <Text className="text-base text-gray-100 font-gmedium">{title}</Text>
      <View className="w-full h-16 bg-black-100 border border-black-200 rounded-xl focus:border-secondary items-center flex-row">
            <TextInput value={value} placeholder={placeholder} placeholderTextColor='#7b7b8b' onChangeText={handleTextChange} secureTextEntry={title==='Password' && !showPassword} className="flex-1 px-3 p-2 text-white font-gmedium text-base"/>
            {
                title === 'Password' && (
                    <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}>
                        <Image source={!showPassword?icons.eye:icons.eyeHide} resizeMode='contain' className="w-6 h-6 " />
                    </TouchableOpacity>
                )
            }
      </View>
    </View>
  )
}

export default FormField