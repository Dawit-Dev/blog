import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = () => {
  const {state, addBlogPost} = useContext(Context);
  return (
    <View style={styles.container}>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPosts) => blogPosts.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.text}>{item.title}</Text>
              <Feather style={styles.icone} name="trash-2" size={24} color="black" />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  text: {
    fontSize: 21,
  },
  icone: {
    fontSize: 33,
  },
  row: {
    flexDirection: 'row',
    justifyContent: "space-between",
    // marginBottom: 6
    padding: 12,
    border: 2,
    borderRadius: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'gray'
  }
});

export default IndexScreen;
