import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      await getBlogPosts();
    };

    fetchData();

    const listener = navigation.addListener("focus", fetchData);
    return () => {
      listener.remove();
    };
  }, []);

  const handleDelete = (id) => {
    deleteBlogPost(id);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Show", { id: item.id })}
          >
            <View style={styles.row}>
              <Text style={styles.text}>
                {item.title} - {item.id}
              </Text>
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <Feather name="trash-2" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 21,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    borderWidth: 2,
    borderRadius: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
});

export default IndexScreen;
