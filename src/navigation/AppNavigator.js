import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import OtpScreen from "../screens/OtpScreen";
import LandingScreen from "../screens/LandingScreen";
import VideoVerificationScreen from "../screens/VideoVerificationScreen";
import CompletedProcess from "../screens/CompletedProcess"

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Otp" component={OtpScreen} />
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="VideoVerification" component={VideoVerificationScreen} />
        <Stack.Screen name="CompletedProcess" component={CompletedProcess} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
