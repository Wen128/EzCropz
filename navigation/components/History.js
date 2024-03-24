import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

export default function History() {
  return (
    <View style={{ top: 10 }}>
      <Text style={{ left: 20, fontWeight: 700, fontSize: 30 }}>History ▶</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        style={{ paddingRight: 30, marginTop: 8 }}
      >
        <Image
          source={require('../../assets/crop.png')}
          style={{ width: 220, height: 130, marginLeft: 10, marginRight: 10 }}
        />
        <Image
          source={require('../../assets/crop.png')}
          style={{ width: 220, height: 130, marginRight: 10 }}
        />
        <Image
          source={require('../../assets/crop.png')}
          style={{ width: 220, height: 130, marginRight: 10 }}
        />
        <Image
          source={require('../../assets/crop.png')}
          style={{ width: 220, height: 130, marginRight: 10 }}
        />
        <Image
          source={require('../../assets/crop.png')}
          style={{ width: 220, height: 130, marginRight: 10 }}
        />
      </ScrollView>
    </View>
  );
}
