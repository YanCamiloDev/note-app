import * as React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage"
import HeaderAddNote from '../../components/HeaderAddNote';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/core';
import ColorPicker from '../../components/ColorPicker';
import { invertColor } from '../../utils/ColorFunctions';

export default function AddNote() {
  const [text, setText] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [colorMain, setNewColor] = React.useState({ color: '#F5DA66', colorText: '#000', colorBackAlt: "#FFEAD6" })
  const [selectColor, setSelectColor] = React.useState(false);
  const navigation = useNavigation()

  async function save() {
    try {
      const data = await AsyncStorage.getItem('@noteapp:notes');
      const oldNotes = data ? JSON.parse(data) : {};
      const id = uuid.v4();
      const newNote = {
        [id]: {
          id: id,
          titleNote: title, note: text,
          colors: {
            colorMain: colorMain.colorBackAlt,
            colorBorder: colorMain.color,
            colorText: colorMain.colorText,
          },
          date: new Date()
        }
      }
      await AsyncStorage.setItem('@noteapp:notes',
        JSON.stringify({
          ...newNote, ...oldNotes
        })
      );
      navigation.navigate('Home', {
        msg: 'Nota Adicionada',
        type: 'success'
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  React.useEffect(() => {
    setSelectColor(false)
  }, [colorMain])

  function changeText(text) {
    setText(text)
    setTitle(text)
  }

  return (
    <>
      <HeaderAddNote Color={colorMain.color} ColorSecondary={colorMain.colorText} text={text} save={save} title={title} setTitle={setTitle} setSelectColor={setSelectColor} />
      <TextInput
        style={[styles.textInput, { backgroundColor: colorMain.colorBackAlt, color: colorMain.colorText }]}
        multiline={true}
        nativeID="text"
        textAlign='left'
        textAlignVertical="top"
        value={text}
        onChangeText={changeText}
        autoFocus={true}
      />
      {selectColor && <ColorPicker setSelectColor={setSelectColor} setNewColor={setNewColor} />}

    </>
  )
}

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    backgroundColor: '#fff8bb',
    color: "#000",
    padding: 8,
    fontSize: 25,
  }
})