import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StartGame from "../views/StartGame";
import TTTGame from "../views/TTTGame";
import { RootStackParamList } from "./Models";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="StartGame"
          component={StartGame}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TTTGame"
          component={TTTGame}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
