import moment from "moment";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import 'moment/locale/pt-br';

export default function TaskItemList({ item, onPress, longPress, backgroundColor, textColor, borderLeftColor }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor, borderLeftColor]} onLongPress={longPress}>
      <Text style={[styles.title, textColor]} numberOfLines={1}>{item.titleNote}</Text>
      <Text style={[styles.date]}>{moment(item.date).fromNow()}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  item: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 2,
    marginHorizontal: 2,
    borderLeftWidth: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 21,
    flex: 1, marginRight: 5
  },
  date: {
    marginLeft: 10,
    flexWrap: "wrap",
  }
});