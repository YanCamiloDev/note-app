import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Color from '../../../assets/color.jpeg'
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textTitle}>Color Note</Text>
        {/* <Text style={styles.userName}>{userName}</Text> */}
      </View>
      {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={Color} style={{ height: 25, width: 27 }} />
        <Ionicons style={{ marginTop: 2, marginLeft: 10 }} name="ellipsis-vertical-sharp" size={30} color="black" />
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: "#F1F1F1",
    borderBottomColor: '#D2D2D2',
    borderBottomWidth: 2,
    paddingHorizontal: 10

  },

  textTitle: {
    fontSize: 25,
    fontWeight: '600'
  },
});