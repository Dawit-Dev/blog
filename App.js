import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";
import { Provider } from "./src/context/BlogContext";
import { Entypo } from "@expo/vector-icons";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

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
            options={({ route, navigation }) => ({
              title: "Blogs",
              headerRight: ({ tintColor }) => (
                <Feather
                  name="edit"
                  size={36}
                  color={tintColor}
                  onPress={() =>
                    navigation.navigate("Edit", {
                      id: route.params.id,
                    })
                  }
                />
              ),
            })}
          />
          <Stack.Screen
            name="Create"
            component={CreateScreen}
            options={{ title: "Create Blog" }}
          />
          <Stack.Screen
            name="Edit"
            component={EditScreen}
            options={{ title: "Edit the Blog" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
