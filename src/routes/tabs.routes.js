import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import Home from "../Screens/Home";
import { TabBarAdvancedButton } from "./fabTab";
import AddTask from "../Screens/AddTask";

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
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (({ size, color }) => (
            <Ionicons
              name="calendar-sharp"
              size={size}
              color={color}
            />
          )),
          tabBarLabel: () => null
        }}
      />
      <AppTab.Screen
        name="fab"
        component={AddTask}
        options={{
          tabBarButton: (props) => (
            <TabBarAdvancedButton
              bgColor='#F1F1F1'
              {...props}
            />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: event => {
            event.preventDefault()
            navigation.navigate('AddTask')
          }
        })}
      />
      <AppTab.Screen
        name="Search"
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