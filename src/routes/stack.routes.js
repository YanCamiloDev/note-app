import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TabRoutes from "./tabs.routes";
import AddTask from "../Screens/AddTask";

const stackRoutes = createStackNavigator();

const AppRoutes = () => (
  <stackRoutes.Navigator
    screenOptions={{
      cardStyle: {
        backgroundColor: '#fff'
      },
      headerShown: false,
    }}>
    <stackRoutes.Screen name="HomeTab" component={TabRoutes} />
    <stackRoutes.Screen name="AddTask" component={AddTask} />
  </stackRoutes.Navigator>
)

export default AppRoutes;