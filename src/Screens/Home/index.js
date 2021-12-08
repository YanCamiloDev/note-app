import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import Select from "../../components/Select";
import TaskItemList from "../../components/TaskItemList";

const DATA = [
  {
    id: "1",
    title: "Alamat Kantor",
    date: "14.16",
    colorbackground: "#FFFBBC",
    borderLeftColor: "yellow",

  },
  {
    id: "2",
    title: "Blog update",
    date: "23 Mei 2016",
    colorbackground: "#F7DFFF",
    borderLeftColor: "purple",
  },
  {
    id: "3",
    title: "Buku Harian",
    date: "24 Feb",
    colorbackground: "#E6FADF",
    borderLeftColor: "green",
  },
  {
    id: "4",
    title: "buku-buku",
    date: "23 Mei 2016",
    colorbackground: "#E6FADF",
    borderLeftColor: "green",
  },
  {
    id: "5",
    title: "ColorNote",
    date: "24 Mei 2016",
    colorbackground: "#E7E7E7",
    borderLeftColor: "blue",
  },
  {
    id: "6",
    title: "Daftar Belanja",
    date: "24 Feb",
    colorbackground: "#FFFBBC",
    borderLeftColor: "yellow",
  },
];

const Home = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : item.colorbackground;
    const color = item.id === selectedId ? 'white' : 'black';
    const borderLeftColor = item.borderLeftColor;

    return (
      <TaskItemList
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        borderLeftColor={{ borderLeftColor }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Select />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#F7F7F7",
  },
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
    fontSize: 32,
  },
  date: {
    marginTop: 10,
    marginLeft: 10,
    flexWrap: "wrap",
  }
});

export default Home;