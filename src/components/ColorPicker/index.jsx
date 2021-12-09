import React from 'react'
import { TouchableOpacity, View } from 'react-native'

const Box = (props) => {
  return (
    <TouchableOpacity style={{
      width: '29.5%', height: '30%', backgroundColor: props.color ? props.color : 'red',
      margin: 5,
      borderWidth: 0.2,
      borderColor: '#000'
    }}
      onPress={props.onPress}
    >

    </TouchableOpacity>
  )
}

export default function ColorPicker(props) {
  const arrayColor = [
    { color: '#E64346', colorText: '#000', colorBackAlt: "#FEE4E7" },
    { color: '#FFA200', colorText: '#000', colorBackAlt: "#FFEAD6" },
    { color: '#FFE001', colorText: '#000', colorBackAlt: "#FEF8B8" },
    { color: '#6FC232', colorText: '#000', colorBackAlt: "#FFEAD6" },
    { color: '#0070CE', colorText: '#000', colorBackAlt: "#E7E9FE" },
    { color: '#7B35BC', colorText: '#000', colorBackAlt: "#E7E9FE" },
    { color: '#000000', colorText: '#333', colorBackAlt: "#CACACA" },
    { color: '#888888', colorText: '#333', colorBackAlt: "#EDEDED" },
    { color: '#fff', colorText: "#000", colorBackAlt: "#FFF" }
  ]

  return (
    <TouchableOpacity style={{
      width: '100%',
      height: '100%',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      alignItems: 'center', justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.45)'
    }}
      onPress={e => props.setSelectColor(false)}
    >
      <View style={{
        width: '70%', height: '35%', backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
      }}>
        {arrayColor.map((item, index) => {
          return (
            <Box key={index} color={item.color} onPress={e => props.setNewColor(item)} />
          )
        })}
      </View>
    </TouchableOpacity>

  )
}