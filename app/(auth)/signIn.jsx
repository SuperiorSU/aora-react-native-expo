import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../../constants/images'
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';


const SignIn = () => {

  const [formData, setFormData] = useState({
    email:'',
    password:''
  })
  const [submitting, setSubmitting] = useState(false)
  const submitHandler = ()=>{

  }
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="px-4 w-full min-h-[82vh] justify-center my-6">
          <Image source={images.logo} resizeMode='contain' className="w-[115px] h-[35px]"/>
          <Text className="text-2xl font-gmedium text-white mt-10">Log in to Aora</Text>

          <FormField
            title="Email"
            value={formData.email}
            handleTextChange={(e)=>setFormData({...formData, email:e})}
            placeholder="Email "
            otherStyle="mt-7"
            keyboardType = "email-address"
          />
          <FormField
            title="Password"
            value={formData.password}
            handleTextChange={(e)=>setFormData({...formData, password:e})}
            placeholder="Password "
            otherStyle="mt-7"
          />

          <CustomButton
            title="Sign In"
            handlePress={submitHandler}
            containerStyle='mt-7'
            isLoading={submitting}    
          />

          <View className="justify-center pt-5 gap-2 flex-row">
              <Text className="text-lg text-gray-100 font-gbook">Don't have an account?</Text>
              <Link className='text-secondary-100 font-gmedium text-lg' href='/signUp'>
                Sign Up 
              </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn