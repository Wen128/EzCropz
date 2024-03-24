import * as React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import { Video } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function EFarmScreen() {
  return (
    <View style={{}}>
      <Video
        source={require('../../assets/farmWithCrops.mp4')}
        resizeMode="cover"
        style={{
          width: width,
          height: height,
          position: 'absolute',
          left: '0',
          top: '0',
        }}
        isLooping
        shouldPlay
      />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
          width: 90,
          height: 35,
          borderRadius: 30,
          borderColor: '#3eb075',
          borderWidth: 2,
          left: 15,
          top: 30,
        }}
      >
        <Image
          source={require('../../assets/coin.png')}
          style={{ width: 40, height: 40 }}
        />
        <Text style={{ fontSize: 16 }}>126</Text>
      </View>

      <View
        style={{
          position: 'absolute',
          right: 15,
          top: 31,
          borderRadius: 100,
          backgroundColor: '#3eb075',
          borderColor: 'white',
          borderWidth: 1,
          padding: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={require('../../assets/task.png')}
          style={{
            width: 36,
            height: 36,
            borderRadius: 100,
          }}
        />

        <Text
          style={{
            position: 'absolute',
            top: 51,
            fontWeight: 600,
            color: 'white',
          }}
        >
          Task
        </Text>
      </View>

      <View
        style={{
          position: 'absolute',
          right: 15,
          top: 110,
          borderRadius: 100,
          backgroundColor: '#3eb075',
          borderColor: 'white',
          borderWidth: 1,
          padding: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={require('../../assets/gift.png')}
          style={{
            width: 36,
            height: 36,
            borderRadius: 100,
          }}
        />

        <Text
          style={{
            position: 'absolute',
            top: 52,
            fontWeight: 600,
            color: 'white',
          }}
        >
          Gift
        </Text>
      </View>

      <View
        style={{
          position: 'absolute',
          right: 15,
          top: 191,
          borderRadius: 100,
          backgroundColor: '#3eb075',
          borderColor: 'white',
          borderWidth: 1,
          padding: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={require('../../assets/store.png')}
          style={{
            width: 36,
            height: 36,
            borderRadius: 100,
          }}
        />

        <Text
          style={{
            position: 'absolute',
            top: 52,
            fontWeight: 600,
            color: 'white',
          }}
        >
          Shop
        </Text>
      </View>
    </View>
  );
}
