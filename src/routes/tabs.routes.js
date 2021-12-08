import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import Home from "../Screens/Home";
import { TabBarAdvancedButton } from "./fabTab";

const AppTab = createBottomTabNavigator();

const TabRouter = () => {
  return (
    <AppTab.Navigator
      screenOptions={{
        // activeBackgroundColor: colors.shape,
        // inactiveBackgroundColor: colors.shape,
        labelPosition: 'beside-icon',
        headerShown: false,
        backgroundColor: 'red',
        tabBarStyle: {
          backgroundColor: '#F1F1F1'
        },
        style: {
          paddingVertical: Platform.OS == 'ios' ? 20 : 0,
          height: 88,
          backgroundColor: "#F1F1F1",
        },
      }}
    >
      <AppTab.Screen
        name="Nova Planta"
        component={Home}
        options={{
          tabBarIcon: (({ size, color }) => (
            <Ionicons
              name="calendar-sharp"
              size={size}
              color="#009688"
            />
          )),
          tabBarLabel: () => null
        }}
      />
      <AppTab.Screen
        name="Rocket"
        component={Home}
        options={{
          tabBarButton: (props) => (
            <TabBarAdvancedButton
              bgColor='#F1F1F1'
              {...props}
            />
          ),
        }}
      />
      <AppTab.Screen
        name="Minhas Plantas"
        component={Home}
        options={{
          tabBarIcon: (({ size, color }) => (
            <Ionicons
              name="search-sharp"
              size={size}
              color={color}
            />
          )),
          tabBarShowLabel: false,
          tabBarLabel: () => null
        }}
      />
    </AppTab.Navigator>
  )
}

export default TabRouter;