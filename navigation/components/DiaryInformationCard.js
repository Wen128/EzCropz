import React from 'react';
import { Text, View } from 'react-native';

export default function DiaryInformationCard() {
  return (
    <View
      style={{
        backgroundColor: '#f9f9f9',
        width: '95%',
        height: 270,
        left: '2.5%',
        top: 130,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 8,
      }}
    >
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 20,
          marginLeft: 50,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: 700 }}>
          You water the plant
        </Text>
        <Text style={{ fontSize: 14, fontWeight: 300 }}>at 8:00 AM</Text>
      </View>

      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 30,
          marginLeft: 50,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: 700 }}>Detection of pest</Text>
        <Text style={{ fontSize: 14, fontWeight: 300 }}>at 11:28 AM</Text>
      </View>

      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 30,
          marginLeft: 50,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: 700 }}>
          You fertilize the plant
        </Text>
        <Text style={{ fontSize: 14, fontWeight: 300 }}>at 2:40 PM</Text>
      </View>
    </View>
  );
}
