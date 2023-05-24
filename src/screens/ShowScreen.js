import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context } from "../context/BlogContext";
import { useRoute } from "@react-navigation/native";

const ShowScreen = () => {
  const { state } = useContext(Context);
  const route = useRoute();
  const { id } = route.params;

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
