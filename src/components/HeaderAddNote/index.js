import React from "react";
import { Image, StyleSheet, TextInput, View, TouchableOpacity, Keyboard } from "react-native";
import Color from '../../../assets/color.jpeg'
import { Ionicons } from '@expo/vector-icons';

export default function HeaderAddNote(props) {
  return (
    <>
      <View style={[styles.container, props.Color && { backgroundColor: props.Color }]}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={props.save}>
            <Ionicons style={{ marginTop: 2, marginLeft: 10 }} name="checkmark-sharp"
              size={30} color={props.ColorSecondary ? props.ColorSecondary : 'black'} />
          </TouchableOpacity>
          <TextInput style={styles.textInput} placeholder="Adicione um título" value={props.title} onChangeText={props.setTitle} />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={e => {
            Keyboard.dismiss();
            props.setSelectColor(true)
          }}>
            <Image source={Color} style={{ height: 25, width: 27 }} />
          </TouchableOpacity>
          <Ionicons style={{ marginTop: 2, marginLeft: 10 }} name="ellipsis-vertical-sharp"
            size={30} color={props.ColorSecondary ? props.ColorSecondary : 'black'} />
        </View>
      </View>
    </>
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