import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    return <BlogContext.Provider value={5}>
      {children}
  </BlogContext.Provider>;
};

const styles = StyleSheet.create({});

export default BlogContext;
