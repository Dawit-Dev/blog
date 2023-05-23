import React, { useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: `Blog Post #${state.length + 1}` }];
        default:
            return state;
    }
}

export const BlogProvider = ({ children }) => {
    const [blogPosts, dispatch] = useReducer(blogReducer, []);
    
    const addBlogPost = () => {
        dispatch({ type: 'add_blogpost'})
    }

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>{children}</BlogContext.Provider>
  );
};

const styles = StyleSheet.create({});

export default BlogContext;
