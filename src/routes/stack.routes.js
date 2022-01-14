import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TabRoutes from "./tabs.routes";
import AddNote from "../Screens/AddNote";
import EditNote from "../Screens/EditNote";

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
    <stackRoutes.Screen name="AddNote" component={AddNote} />
    <stackRoutes.Screen name="EditNote" component={EditNote} />

  </stackRoutes.Navigator>
)

export default AppRoutes;