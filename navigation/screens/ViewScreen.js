import { Video } from 'expo-av';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Tips from '../components/Tips';
import Control from '../components/Control';
import History from '../components/History';
import Details from '../components/Details';

export default function ViewScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Video
        source={require('../../assets/cropVideo.mp4')}
        style={{ height: 250, width: '100%' }}
        resizeMode="cover"
        isLooping
        shouldPlay
      />
      <History />
      <Tips />
      <Control />
      <Details />
      <View style={{ height: 100 }}></View>
    </ScrollView>
  );
}
