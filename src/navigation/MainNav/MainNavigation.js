import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MenuScreen from "../../component/screens/MenuScreen";
import AuthNavigation from "../AuthNav/AuthNavigation";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import FoodCategories from "../../component/screens/ResturantCategories";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();
const MainNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Food Categories"
        component={FoodCategories}
        options={{
          tabBarIcon: () => {
            return <MaterialIcons name="fastfood" size={24} color="black" />;
          },
          tabBarActiveTintColor: "purple",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Home"
        component={MenuScreen}
        options={{
          tabBarIcon: () => {
            return <Feather name="home" size={24} color="black" />;
          },
          tabBarActiveTintColor: "purple",
          headerStyle: { backgroundColor: "#8b008b" },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={AuthNavigation}
        options={{
          tabBarIcon: () => {
            return <AntDesign name="user" size={24} color="black" />;
          },
          tabBarActiveTintColor: "purple",
          title: "Profile",
        }}
        />
    </Tab.Navigator>
  );
};


export default MainNavigation;

const styles = StyleSheet.create({});
