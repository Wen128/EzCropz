import React from 'react';
import { Text, View } from 'react-native';

export default function Control() {
  return (
    <View style={{ top: 50, alignItems: 'center' }}>
      <View
        style={{
          width: '95%',
          height: 200,
          backgroundColor: 'white',
          borderRadius: 30,
          borderColor: '#3eb075',
          borderWidth: 4,
          padding: 15,
          elevation: 5,
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowOffset: 0,
          shadowRadius: 8,
        }}
      >
        <Text style={{ color: '#242b25', fontSize: 30, fontWeight: 700 }}>
          Control ▶
        </Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View
            style={{
              marginTop: 5,
              backgroundColor: '#2e6aa4',
              width: '46%',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 25,
                fontWeight: 600,
              }}
            >
              Water
            </Text>
          </View>

          <View
            style={{
              marginTop: 5,
              backgroundColor: '#cc7b50',
              width: '46%',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 25,
                fontWeight: 600,
              }}
            >
              Fertilize
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View
            style={{
              marginTop: 12,
              backgroundColor: '#db442a',
              width: '46%',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 25,
                fontWeight: 600,
              }}
            >
              Pesticide
            </Text>
          </View>

          <View
            style={{
              marginTop: 12,
              backgroundColor: '#3a9c64',
              width: '46%',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 25,
                fontWeight: 600,
              }}
            >
              Harvest
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
