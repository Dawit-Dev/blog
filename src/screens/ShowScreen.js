import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import { useRoute } from "@react-navigation/native";

const ShowScreen = () => {
  const { state } = useContext(Context);
  const route = useRoute();
  const { id } = route.params;

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{blogPost.title}</Text>
      <Text style={styles.text}>{blogPost.content}</Text>
    </View>
  );
};

 
const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
    borderRadius: 9,
  },
  text: {
    fontSize: 21,
  },
});

export default ShowScreen;
