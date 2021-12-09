import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Select = () => {

  return (
    <View style={styles.container}>
      <Text>
        Mais Recentes
      </Text>
      <Ionicons style={{ marginTop: 2, marginLeft: 10 }} name="caret-down-sharp" size={18} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#F7F7F7",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    borderBottomColor: '#D2D2D2',
    borderBottomWidth: 2,
    paddingVertical: 5
  },
  seta: {
    transform: [{ rotate: "90deg" }],
    marginLeft: 10,
  }
});

export default Select;