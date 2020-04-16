import React from "react";
import { Text, View, StyleSheet, Alert, TouchableOpacity } from "react-native";

export const Todo = ({ todo }) => {
  
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => console.log("Press Todo", todo.id)}>
      <View style={{ ...styles.todo, backgroundColor: todo.priority }}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    marginBottom: 10,
  },
});
