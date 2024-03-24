import React from 'react';
import { Text, View } from 'react-native';

export default function Tips() {
  return (
    <View style={{ top: 30, alignItems: 'center' }}>
      <View
        style={{
          width: '95%',
          height: 150,
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
          Tips ▶
        </Text>
        <Text style={{ color: '#3eb075', fontSize: 20, marginTop: 5 }}>
          Water the crop at 8:00 PM tomorrow
        </Text>
      </View>
    </View>
  );
}
