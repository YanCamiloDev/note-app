import React from "react"
import { NavigationContainer } from "@react-navigation/native";
import TabRouter from "./tabs.routes";

const Routes = () => (
  <NavigationContainer>
    <TabRouter />
  </NavigationContainer>
)

export default Routes;