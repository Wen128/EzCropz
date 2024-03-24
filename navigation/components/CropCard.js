import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CropCard() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('ViewScreen');
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        width: '100%',
        height: 250,
        marginBottom: 30,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        source={require('../../assets/crop.png')}
        style={{ width: '90%', height: 150, borderRadius: 10 }}
      />
      <View
        style={{
          display: 'flex',
          width: '90%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
        }}
      >
        <View>
          <Text style={{ fontSize: 30, fontWeight: 600 }}>Rice</Text>
          <Text style={{ fontSize: 12, fontWeight: 300 }}>
            Started from: 1 Jan 2024
          </Text>
        </View>
        <Pressable
          style={({ pressed }) => [
            {
              width: 100,
              height: 45,
              borderRadius: 10,
              backgroundColor: pressed ? '#3a9c64' : '#3eb075',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}
          onPress={handlePress}
        >
          <Text
            style={{
              color: 'white',

              fontSize: 25,
              fontWeight: 600,
            }}
          >
            View
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
