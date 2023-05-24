// import React, { useState, useContext } from "react";
// import { StyleSheet, Text, View, TextInput, Button } from "react-native";
// import { Context } from "../context/BlogContext";

// const CreateScreen = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const { addBlogPost } = useContext(Context);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Enter Title:</Text>
//       <TextInput
//         style={styles.input}
//         value={title}
//         onChange={(text) => setTitle(text)}
//       />
//       <Text style={styles.label}>Enter Content:</Text>
//       <TextInput
//         style={styles.input}
//         value={content}
//         onChange={(text) => setContent(text)}
//       />
//       <Button
//         title="Add Blog Post"
//         onPress={() => addBlogPost(title, content)}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     margin: 9,
//   },
//   input: {
//     fontSize: 18,
//     borderWidth: 3,
//     borderColor: "black",
//     padding: 6,
//     marginBottom: 15,
//     borderRadius: 9,
//   },
//   label: {
//     fontSize: 21,
//     marginBottom: 9,
//     alignItems: "center",
//   },
// });

// export default CreateScreen;
import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost } = useContext(Context);

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Add Blog Post"
        onPress={() => addBlogPost(title, content)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default CreateScreen;