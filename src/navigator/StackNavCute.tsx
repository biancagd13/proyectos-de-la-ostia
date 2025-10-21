import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CuteI from "../screens/cute/CuteI";
import CuteII from "../screens/cute/CuteII";

export type RootStackParams = {
  CuteI: undefined;
  CuteII: undefined;
};

export const StackNavCute = () => {

      const Stack = createStackNavigator<RootStackParams>();


  return (
    
    <Stack.Navigator
      initialRouteName="CuteI" 
      screenOptions={{
        headerStyle: { backgroundColor: "#660505ff" }, // Fondo rojo estilo Marvel
        headerTintColor: "#fff", // Botones de back en blanco
        headerTitle: "", // Sin título
        headerBackTitleVisible: false, // Oculta el texto del back
      }}
    >
      <Stack.Screen 
        name="CuteI"
        component={CuteI} 
        />

      <Stack.Screen 
      name="CuteII" 
      component={CuteII} 
      />
    </Stack.Navigator>

  );
  
}
