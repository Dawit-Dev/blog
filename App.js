import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import IndexScreen from "./src/screens/IndexScreen";
import { BlogProvider } from "./src/context/BlogContext";
import AddBlogScreen from "./src/screens/AddBlogScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Entypo } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Index"
            component={IndexScreen}
            options={({ navigation }) => ({
              title: 'Blogs',
              headerRight: ({tintColor}) => (
                <Entypo
                  name="squared-plus"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate("Add Blog")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="Add Blog"
            component={AddBlogScreen}
            options={{ title: "Add a new blog" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
};

export default App;
