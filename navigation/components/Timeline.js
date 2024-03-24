import React from 'react';
import { View } from 'react-native';

export default function Timeline() {
  return (
    <View>
      <View
        style={{
          backgroundColor: '#3eb075',
          width: 3,
          height: 165,
          position: 'absolute',
          left: 46,
          top: -105,
        }}
      ></View>
      <View
        style={{
          backgroundColor: '#3eb075',
          width: 15,
          height: 15,
          left: 40,
          top: -105,
          borderRadius: 100,
        }}
      ></View>
      <View
        style={{
          backgroundColor: '#3eb075',
          width: 15,
          height: 15,
          left: 40,
          top: -45,
          borderRadius: 100,
        }}
      ></View>
      <View
        style={{
          backgroundColor: '#3eb075',
          width: 15,
          height: 15,
          left: 40,
          top: 25,
          borderRadius: 100,
        }}
      ></View>
    </View>
  );
}
