import React from 'react'
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'

export default function Modal({ cancel, itemSelect }) {

  return (
    <TouchableOpacity style={styles.container} onPress={cancel} >
      <View style={{ width: '75%', height: 200, backgroundColor: '#fff', padding: 30 }}>
        <TouchableOpacity style={[styles.button, itemSelect !== 'r' && { backgroundColor: '#fff', }]}>
          <Text style={styles.text}>Mais recentes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, itemSelect !== 'a' && { backgroundColor: '#fff', }]}>
          <Text style={styles.text}>Mais antigas</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0,0,0,0.1)',
    margin: 10,
    height: 50,
    justifyContent: 'center',
    borderRadius: 30,
    borderWidth: 1,
  },
  text: {
    fontSize: 16
  }
})