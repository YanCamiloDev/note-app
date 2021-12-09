import React, { useState } from "react";
import { FlatList } from "react-native";
import Header from "../../components/Header";
import Select from "../../components/Select";
import TaskItemList from "../../components/TaskItemList";
import { useRoute } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Home = () => {
  const [selectedId, setSelectedId] = useState(null);
  const routes = useRoute();
  const [notes, setNotes] = useState([]);

  const renderItem = ({ item }) => {
    const {
      colorMain,
      colorBorder,
      colorText
    } = item.colors
    const backgroundColor = colorMain;
    const borderLeftColor = colorBorder;

    return (
      <TaskItemList
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ colorText }}
        borderLeftColor={{ borderLeftColor }}
      />
    );
  };

  React.useEffect(() => {
    if (routes.params) {
      console.log(routes.params);
      const { msg, type } = routes.params
      if (msg) {
        Toast.show({
          type: `${type}`,
          text1: `${msg}`,
        });
      }
    }
  }, [routes.params]);

  React.useEffect(() => {
    async function getNotes() {
      const notes = await AsyncStorage.getItem("@noteapp:notes");
      if (JSON.parse(notes)) {
        const dados = JSON.parse(notes);
        const array = Object.keys(dados).map((note) => dados[note]);
        setNotes(array)
      }

    }
    getNotes();
  }, [routes])

  return (
    <>
      <Header />
      <Select />
      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </>
  );
};


export default Home;