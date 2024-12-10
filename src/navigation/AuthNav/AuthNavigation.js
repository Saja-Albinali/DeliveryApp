import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterPage from "../../component/screens/RegisterScreen";
import LoginPage from "../../component/screens/LoginScreen";
const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Register"
        component={RegisterPage}
        options={{ title: "Register" }}
      />
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ title: "Login" }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
