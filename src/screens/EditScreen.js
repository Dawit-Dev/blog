import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { useRoute } from "@react-navigation/native";
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';


const EditScreen = () => {
    const route = useRoute();
    const { id } = route.params;
    const { state } = useContext(Context);

    const blogPost = state.find(blogPost => blogPost.id === id);

  return <BlogPostForm />
}

const styles = StyleSheet.create({})

export default EditScreen
