import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useRoute } from "@react-navigation/native";


const EditScreen = ({ navigation }) => {
    const route = useRoute();
    const { id } = route.params;

  return (
    <View>
      <Text>Edit Screen - {id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default EditScreen
