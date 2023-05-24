import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import AddBlogScreen from "./src/screens/AddBlogScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Entypo } from "@expo/vector-icons";
import ShowScreen from "./src/screens/ShowScreen";

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
          <Stack.Screen
            name="Show"
            component={ShowScreen}
            options={{ title: "Show Screen" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
