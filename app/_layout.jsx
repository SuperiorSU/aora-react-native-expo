import { View, Text,SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { Slot, SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'

SplashScreen.preventAutoHideAsync();
const layout = () => {
  const [fontsLoaded, error] = useFonts({
    "Gotham-Bold":require('../assets/fonts/GothamBold.ttf'),
    "GothamBook":require('../assets/fonts/GothamBook.ttf'),
    "GothamLight":require('../assets/fonts/GothamLight.ttf'),
    "GothamMedium":require('../assets/fonts/GothamMedium.ttf')
  });  
  useEffect(()=>{
    if(error){
      throw error;
    }
    if(fontsLoaded){
      SplashScreen.hideAsync()
    }
    if(!fontsLoaded && !error){
      return null
    }
  },[fontsLoaded,error])
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        headerShown:false
      }}/>
    </Stack>
  )
}

export default layout