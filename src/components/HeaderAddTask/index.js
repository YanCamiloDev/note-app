import React from "react";
import { Image, StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import Color from '../../../assets/color.jpeg'
import { Ionicons } from '@expo/vector-icons';

export default function HeaderAddTask(props) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity>
          <Ionicons style={{ marginTop: 2, marginLeft: 10 }} name="checkmark-sharp" size={30} color="black" />
        </TouchableOpacity>
        <TextInput style={styles.textInput} placeholder="Adicione um título" />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={Color} style={{ height: 25, width: 27 }} />
        <Ionicons style={{ marginTop: 2, marginLeft: 10 }} name="ellipsis-vertical-sharp" size={30} color="black" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: "#F5DA66",
    borderBottomColor: '#D2D2D2',
    borderBottomWidth: 2,
    paddingHorizontal: 10,
  },
  textInput: {
    fontSize: 15,
    width: '70%',
    fontWeight: '600',
    marginLeft: 20,
    backgroundColor: '#fff',
    padding: 5,
  },
});