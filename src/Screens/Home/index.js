import React, { useState } from "react";
import { Alert, FlatList } from "react-native";
import Header from "../../components/Header";
import Select from "../../components/Select";
import TaskItemList from "../../components/TaskItemList";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Home = () => {
  const [selectedId, setSelectedId] = useState(null);
  const routes = useRoute();
  const [notes, setNotes] = useState([]);
  const nav = useNavigation()

  const renderItem = ({ item }) => {
    const {
      colorMain,
      colorBorder,
      colorText
    } = item.colors
    const backgroundColor = colorMain;
    const borderLeftColor = colorBorder;

    async function remove(id) {
      const data = await AsyncStorage.getItem('@noteapp:notes');
      const oldNotes = data ? JSON.parse(data) : {};

      Alert.alert('Deseja remover anotação?', 'Confirme à remoção', [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Confimar', onPress: async () => {
            delete oldNotes[id];
            const array = Object.keys(oldNotes).map((note) => oldNotes[note]);
            setNotes(array)
            await AsyncStorage.setItem('@noteapp:notes',
              JSON.stringify(oldNotes)
            );
          }
        },
      ]);

    }

    return (
      <TaskItemList
        item={item}
        onPress={() => setSelectedId(item.id)}
        longPress={() => remove(item.id)}
        backgroundColor={{ backgroundColor }}
        // textColor={{ colorText }}
        borderLeftColor={{ borderLeftColor }}
        onPress={e => nav.navigate('EditNote', {
          item
        })}
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

  useFocusEffect(
    React.useCallback(() => {
      async function getNotes() {
        const notes = await AsyncStorage.getItem("@noteapp:notes");
        if (JSON.parse(notes)) {
          const dados = JSON.parse(notes);
          const array = Object.keys(dados).map((note) => dados[note]);
          setNotes(array)
        }
      }
      getNotes();
    }, [])
  )

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