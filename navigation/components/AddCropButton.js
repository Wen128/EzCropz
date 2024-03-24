import React from 'react';
import { Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AddCropButton() {
  return (
    <View style={{ position: 'absolute', bottom: 20 }}>
      <Pressable
        style={({ pressed }) => [
          {
            width: 50,
            height: 50,
            borderRadius: 100,
            backgroundColor: pressed ? '#3a9c64' : '#3eb075',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}
      >
        <Ionicons name="add" size={40} color="white" />
      </Pressable>
    </View>
  );
}
