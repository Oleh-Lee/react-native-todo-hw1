import React, { useState, useEffect } from "react";
import { shortid } from "shortid";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";

export default function App() {
  const shortid = require("shortid");
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);

  const getNote = (color) => {
    return (
      setTodo([...todo, { title: value, id: shortid.generate(), color: "", }])
      // console.log("value---->", value),
      // console.log("todo--->", todo),
      // console.log(shortid.generate())
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={setValue}
          onSubmitEditing={getNote}
          placeholder="Enter your note..."
        />
        <TouchableOpacity
          onPress={getNote}
          activeOpacity={0.5}
          style={styles.button}
        >
          <Text style={styles.buttonTitle}>Send</Text>
        </TouchableOpacity>
      </View>
      <View>
        <SafeAreaView>
          <FlatList
            data={todo}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) =>{
              console.log("ITEM --->", item)
            return <Text style={styles.item}>{item.title}</Text>
            }} 
          />
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  header: {
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
    width: 400,
    marginTop: 40,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    height: 35,
    color: "grey",
    fontSize: 20,
    width: 200,
  },
  button: {
    width: 100,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4682b4",
    borderRadius: 10,
  },
  buttonTitle: {
    color: "#f0f8ff",
    fontSize: 18,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 23,
    fontSize: 24,
    textAlign: "center"
  },
  
});
