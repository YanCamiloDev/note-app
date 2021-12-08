import * as React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import HeaderAddTask from '../../components/HeaderAddTask'

export default function AddTask() {
  const [text, setText] = React.useState('')

  return (
    <>
      <HeaderAddTask text={text} />
      <TextInput
        style={styles.textInput}
        multiline={true}
        nativeID="text"
        textAlign='left'
        textAlignVertical="top"
        value={text}
        onChangeText={setText}
      />
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