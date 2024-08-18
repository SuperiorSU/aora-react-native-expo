import React from 'react';
import { View, Text, Image,StatusBar } from 'react-native';
import { router, Redirect, } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import images from '../constants/images'; // Correct import path
import CustomButton from '../components/CustomButton';

const Index = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image source={images.logo} className="w-[130px] h-[84px]" resizeMode='contain' />
          <Image source={images.cards} className="max-w-[380px] h-[300px]" resizeMode='contain' />

          <View className="relative mt-5">
              <Text className="font-bold text-center text-white text-3xl">Discover Endless Possibilities with <Text className="text-secondary-200">Aora</Text></Text>
              <Image source={images.path} className="w-[136px] absolute -bottom-2 -right-8 h-[15px]" resizeMode='contain'/>

          </View>
          <Text className="text-sm font-gbook text-gray-100 mt-7 text-center">Where Creativity meets Innovation: Embark on a journey of limitless exploration with Aora</Text>
          <CustomButton handlePress={()=>router.push('/signIn')} title="Continue with Email" containerStyle="mt-7 w-full"/>
        </View>
        <StatusBar backgroundColor='#161622' style='light' />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
