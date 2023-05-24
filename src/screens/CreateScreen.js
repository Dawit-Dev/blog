import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const CreateScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChange={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChange={(text) => setContent(text)}
      />
      <Button title="Add Blog Post" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 9,
  },
  input: {
    fontSize: 18,
    borderWidth: 3,
    borderColor: "black",
    padding: 6,
    marginBottom: 15,
    borderRadius: 9
  },
  label: {
    fontSize: 21,
    marginBottom: 9,
    alignItems: "center",
  },
});

export default CreateScreen;
