import * as React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage"
import HeaderAddNote from '../../components/HeaderAddNote';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/core';
import ColorPicker from '../../components/ColorPicker';
import { invertColor } from '../../utils/ColorFunctions';
import { useRoute } from '@react-navigation/native';

export default function EditNote() {
  const route = useRoute();
  const { item } = route.params;
  const [text, setText] = React.useState(item.note);
  const [title, setTitle] = React.useState(item.titleNote);
  const [colorMain, setNewColor] = React.useState({ color: item.colorTheme.color, colorText: item.colorTheme.colorText, colorBackAlt: item.colorTheme.colorBackAlt })
  const [selectColor, setSelectColor] = React.useState(false);
  const navigation = useNavigation()

  async function save() {
    try {
      const data = await AsyncStorage.getItem('@noteapp:notes');
      const oldNotes = data ? JSON.parse(data) : {};
      console.log('Notas origin: ');
      console.log(oldNotes);
      oldNotes[item.id] = {
        id: item.id,
        titleNote: title, note: text,
        colors: {
          colorMain: colorMain.colorBackAlt,
          colorBorder: colorMain.color,
          colorText: colorMain.colorText,
        },
        colorTheme: colorMain,
        date: item.date
      };
      console.log("NOTAS: ");
      console.log(oldNotes);
      await AsyncStorage.setItem('@noteapp:notes',
        JSON.stringify(oldNotes)
      );
      navigation.navigate('Home');
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