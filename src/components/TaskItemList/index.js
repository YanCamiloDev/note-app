import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TaskItemList({ item, onPress, backgroundColor, textColor, borderLeftColor }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor, borderLeftColor]}>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
      <Text style={[styles.date]}>{item.date}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 2,
    marginHorizontal: 2,
    borderLeftWidth: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 23,
  },
  date: {
    marginTop: 10,
    marginLeft: 10,
    flexWrap: "wrap",
  }
});