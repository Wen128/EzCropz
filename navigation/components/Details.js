import React from 'react';
import { Text, View } from 'react-native';

export default function Details() {
  return (
    <View style={{ top: 70 }}>
      <Text style={{ left: 20, fontSize: 30, fontWeight: 700 }}>Details</Text>
      <Text style={{ left: 15, fontSize: 20, lineHeight: 25, marginTop: 15 }}>
        <Text style={{ fontWeight: 600 }}>Varieties:</Text> Indica, japonica,
        aromatic types. {'\n'}
        {'\n'}
        <Text style={{ fontWeight: 600 }}>Climate:</Text> Warm, tropical or
        subtropical. {'\n'}
        {'\n'}
        <Text style={{ fontWeight: 600 }}>Soil:</Text> Flooded, clayey, acidic
        preferred. {'\n'}
        {'\n'}
        <Text style={{ fontWeight: 600 }}>Water:</Text> Requires standing water
        initially. {'\n'}
        {'\n'}
        <Text style={{ fontWeight: 600 }}>Nutrients:</Text> Nitrogen-rich
        fertilizers essential.{'\n'}
        {'\n'}
        <Text style={{ fontWeight: 600 }}>Pests:</Text> Common: rice weevils,
        stem borers. {'\n'}
        {'\n'}
        <Text style={{ fontWeight: 600 }}>Diseases:</Text> Common: blast, sheath
        blight.{'\n'}
        {'\n'}
        <Text style={{ fontWeight: 600 }}>Growth stages:</Text> Germination: 1-2
        weeks. Tillering: 3-6 weeks. Flowering: 2-3 months.{'\n'}
        {'\n'}
        <Text style={{ fontWeight: 600 }}>Yield:</Text> Varies from 3 to 10 tons
        per hectare. {'\n'}
        {'\n'}
        <Text style={{ fontWeight: 600 }}>Harvest:</Text> Typically after 3-6
        months.
      </Text>
    </View>
  );
}
