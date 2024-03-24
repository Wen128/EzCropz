import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function Weather() {
  return (
    <View
      style={{
        width: '100%',
        height: '30%',
      }}
    >
      <Image
        source={require('../../assets/sun.jpg')}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
      />
      <Text
        style={{
          fontSize: 40,
          fontWeight: 500,
          color: 'white',
          position: 'absolute',
          left: 30,
          top: 140,
        }}
      >
        31℃
      </Text>
      <View
        style={{
          position: 'absolute',
          left: 20,
          top: 100,
          flexDirection: 'row',
        }}
      >
        <Ionicons name="location" size={40} color="#3eb075" />
        <Text
          style={{
            fontSize: 40,
            fontWeight: 600,
            color: 'white',
          }}
        >
          Klang
        </Text>
      </View>
    </View>
  );
}

export default Weather;
