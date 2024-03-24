import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

export default function Report() {
  return (
    <View style={{ top: '13%', left: 20 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 32, fontWeight: 700 }}>Report</Text>
        <Text
          style={{ fontSize: 16, fontWeight: 400, right: 60, color: '#3eb075' }}
        >
          Details ▶
        </Text>
      </View>

      <ScrollView
        horizontal={true}
        style={{
          paddingVertical: '2%',
          paddingLeft: 20,
          flexDirection: 'row',
          height: '100%',
          paddingRight: 300,
          left: -20,
        }}
        showsHorizontalScrollIndicator={false}
        bounces={false}
      >
        <View
          style={{
            backgroundColor: '#3eb075',
            width: 170,
            height: 240,
            borderRadius: 20,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 80,
            marginRight: 50,
          }}
        >
          <Text
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: 'white',
              marginTop: 30,
              marginBottom: 20,
              left: 20,
            }}
          >
            Plant for
          </Text>
          <Text
            style={{
              fontSize: 56,
              fontWeight: 600,
              color: 'white',
              left: 20,
            }}
          >
            45
          </Text>
          <Text
            style={{
              fontSize: 26,
              fontWeight: 500,
              color: 'white',
              left: 20,
              top: -10,
            }}
          >
            Days
          </Text>
          <Image
            source={require('../../assets/plant.png')}
            style={{
              width: 130,
              height: 130,
              left: 80,
              top: 125,
              position: 'absolute',
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#2e6aa4',
            width: 170,
            height: 240,
            borderRadius: 20,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 80,
            marginRight: 50,
          }}
        >
          <Text
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: 'white',
              marginTop: 30,
              marginBottom: 20,
              left: 20,
            }}
          >
            Watering
          </Text>
          <Text
            style={{
              fontSize: 56,
              fontWeight: 600,
              color: 'white',
              left: 20,
            }}
          >
            31
          </Text>
          <Text
            style={{
              fontSize: 26,
              fontWeight: 500,
              color: 'white',
              left: 20,
              top: -10,
            }}
          >
            Times
          </Text>
          <Image
            source={require('../../assets/watering-plants.png')}
            style={{
              width: 140,
              height: 140,
              left: 70,
              top: 120,
              position: 'absolute',
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#cc7b50',
            width: 170,
            height: 240,
            borderRadius: 20,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 80,
          }}
        >
          <Text
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: 'white',
              marginTop: 30,
              marginBottom: 20,
              left: 20,
            }}
          >
            Fertilizing
          </Text>
          <Text
            style={{
              fontSize: 56,
              fontWeight: 600,
              color: 'white',
              left: 20,
            }}
          >
            28
          </Text>
          <Text
            style={{
              fontSize: 26,
              fontWeight: 500,
              color: 'white',
              left: 20,
              top: -10,
            }}
          >
            Times
          </Text>
          <Image
            source={require('../../assets/fertilizer.png')}
            style={{
              width: 120,
              height: 120,
              left: 100,
              top: 130,
              position: 'absolute',
            }}
          />
        </View>
        <View style={{ width: 80 }}></View>
      </ScrollView>
    </View>
  );
}
