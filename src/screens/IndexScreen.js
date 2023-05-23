import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import {Context} from "../context/BlogContext";

const IndexScreen = () => {
  const {state, addBlogPost} = useContext(Context);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Index Screen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPosts) => blogPosts.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});

export default IndexScreen;
