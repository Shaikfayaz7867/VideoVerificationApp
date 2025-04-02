import React from "react";
import { View } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <>
      <AppNavigator />
      <Toast />
    </>
  );
}
