import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";

import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, text: "Cassava" },
    { id: 2, text: "Garri" },
    { id: 3, text: "Ewa" },
    { id: 4, text: "Agbado" },
    { id: 5, text: "Balaabluuu" },
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert("Error", "Please Enter an Item");
    } else {
      setItems((prevItems) => {
        return [{ id: Math.random().toString(), text }, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.appContainer}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
  },
});
