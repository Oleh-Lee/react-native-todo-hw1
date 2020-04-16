import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Navbar } from "./src/Navbar";
import { AddTodo } from "./src/AddTodo";
import { Todo } from "./src/Todo";

export default function App() {
  const [todos, setTodos] = useState([
    // {id:1, title: 'test', color: "red"},
    // {id:2, title: 'test', color: "red"},
   
  ]);

  const addTodo = (title, priority) => {
    // const newTodo = {
    //   id: Date.now().toString(),
    //   title: title
    // }
    //setTodos(todos.concat([newTodo])) one of methods, but not very good, because orientate on previous state
    // setTodos((prevTodos) => { //second good method, but next more short and same
    //   return [
    //     ...prevTodos,
    //     newTodo
    //   ]
    // })
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
        priority: 'tomato',
      },
    ]);
    console.log(todos)
  };

  return (
    <View>
      <Navbar />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        <FlatList
        keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({ item }) =>(
             <Todo todo={item} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
