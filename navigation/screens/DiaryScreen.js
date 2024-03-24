import * as React from 'react';
import { Text, View } from 'react-native';
import DiaryInformationCard from '../components/DiaryInformationCard';
import Timeline from '../components/Timeline';
import Report from '../components/Report';
import { Ionicons } from '@expo/vector-icons';

export default function DiaryScreen() {
  return (
    <View style={{ height: '100%' }}>
      <View
        style={{
          backgroundColor: '#3eb075',
          width: '100%',
          height: '30%',
          position: 'absolute',
        }}
      >
        <Text
          style={{
            fontSize: 38,
            fontWeight: 600,
            color: 'white',
            position: 'relative',
            left: '5%',
            top: '25%',
          }}
        >
          Today, 24 Mar {}
          <Ionicons name="calendar" size={30} />
        </Text>
      </View>
      <DiaryInformationCard />
      <Timeline />
      <Report />
    </View>
  );
}
