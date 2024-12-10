import React, { useContext } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import UserContext from "../../context/UserContext";
import CategoryNavigation from "../CategoryNav/CategoryNavigation";
import MenuScreen from "../../component/screens/MenuScreen";
import CartScreen from "../../component/screens/CartScreen";

const Tab = createBottomTabNavigator();

const LogoutButton = () => {
  const navigation = useNavigation();
  const [, setAuthenticated] = useContext(UserContext);

  const handleLogout = () => {
    setAuthenticated(false); 
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }], 
    });
  };

  return (
    <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
      <AntDesign name="logout" size={24} color="black" />
    </TouchableOpacity>
  );
};

const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "purple",
        headerStyle: { backgroundColor: "#f9f5f0" },
        headerTitleAlign: "center",
        headerRight: () => <LogoutButton />, 
      }}
    >
      <Tab.Screen
        name="Food Categories"
        component={CategoryNavigation}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="fastfood" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={MenuScreen}
        options={{
          tabBarIcon: () => <Feather name="home" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarIcon: () => (
            <AntDesign name="shoppingcart" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  logoutButton: {
    marginRight: 15,
    padding: 8,
    borderRadius: 5,
  },
});

export default MainNavigation;
