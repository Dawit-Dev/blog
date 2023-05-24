import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
// import AddBlogScreen from "./src/screens/CreateScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Entypo } from "@expo/vector-icons";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Index"
            component={IndexScreen}
            options={({ navigation }) => ({
              title: "Blogs",
              headerRight: ({ tintColor }) => (
                <Entypo
                  name="squared-plus"
                  size={36}
                  color={tintColor}
                  onPress={() => navigation.navigate("Add Blog")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="Add Blog"
            component={CreateScreen}
            options={{ title: "Add a new blog" }}
          />
           
          <Stack.Screen
            name="Show"
            component={ShowScreen}
            options={({ navigation }) => ({
              title: "Blogs",
              headerRight: ({ tintColor }) => (
                <Feather
                  name="edit"
                  size={36}
                  color="tintColor"
                  onPress={() => navigation.navigate("Edit")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="Create"
            component={CreateScreen}
            options={{ title: "Create Blog" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
