import React from 'react';
import { ScrollView, Text } from 'react-native';
import { View } from 'react-native';
import CropCard from './CropCard';

export default function CropsView() {
  return (
    <View
      style={{
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 30, fontWeight: 800 }}>Crops</Text>
      <View
        style={{
          marginTop: 10,
          width: '95%',
        }}
      >
        <CropCard />
        <CropCard />
        <CropCard />
      </View>
    </View>
  );
}
