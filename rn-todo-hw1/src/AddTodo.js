import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const presHandler = () => {

    // Alert.alert(
    //   "Alert Title",
    //   "My Alert Msg",
    //   [
    //     {
    //       text: "Cancel",
    //       onPress: () => console.log("Cancel Pressed"),
    //       style: "cancel"
    //     },
    //     { text: "OK", onPress: () => console.log("OK Pressed") }
    //   ],
    //   { cancelable: false }
    // );

    if (value.trim()) {
      onSubmit(value);
      setValue("");
    } else {
      Alert.alert("Input can't be empty");
    }
  

  // if(value.trim() === ''){
  //   Alert.alert("Название дела не может быть пустым");
  // }else if(value.trim() !== ''){
  //   Alert.alert(
  //     "Alert Title",
  //     "My Alert Msg",
  //     [
  //       {
  //         text: "Cancel",
  //         onPress: () => console.log("Cancel Pressed"),
  //         style: "cancel"
  //       },
  //       { text: "OK", onPress: () => console.log() }
  //     ],
  //     { cancelable: false }
  //   );
  //   onSubmit(value);
  // }

}

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue} // same-->{text => setValue(text)}
        value={value}
        placeholder="Введите название дела"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Button title="Добавить" onPress={presHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    width: "70%",
    paddingBottom: 10,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
  },
});
