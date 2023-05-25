import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'

const BlogPostForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

  return (
    <View style={styles.container}>
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
        title="Save Blog Post"
        // onPress={() => {
        //   addBlogPost(title, content, () => {
        //     navigation.navigate("Index");
        //   });
        // }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 9,
  },
  input: {
    fontSize: 18,
    borderWidth: 3,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
    borderRadius: 9,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default BlogPostForm
