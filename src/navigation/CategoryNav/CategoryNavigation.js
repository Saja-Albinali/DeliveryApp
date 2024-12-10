import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FoodCategories from "../../component/screens/ResturantCategories";
import RestaurantList from "../../component/screens/ResturantList";

const Stack = createStackNavigator();

export default function CategoryNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="FoodCategories"
        component={FoodCategories}
      />
      <Stack.Screen
        name="RestaurantList"
        component={RestaurantList}
        options={{ title: "Restaurants" }}
      />
    </Stack.Navigator>
  );
}
