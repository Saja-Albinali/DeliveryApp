import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import RestaurantList from "./src/component/screens/ResturantList";
import FoodCategories from "./src/component/screens/ResturantCategories";
import MenuScreen from "./src/component/screens/MenuScreen";
import Cart from "./src/component/screens/CartScreen";
import LoginPage from "./src/component/screens/LoginScreen";
import RegisterPage from "./src/component/screens/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigation/AuthNav/AuthNavigation";
import MainNavigation from "./src/navigation/MainNav/MainNavigation";
export default App = () => {
  const renderCategoryCard = () => (
    <TouchableOpacity style={styles}>
    <Text style={styles.title}>Cart</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <NavigationContainer>
        {/* <AuthNavigation /> */}
        {/* <LoginPage /> */}
        {/* <MenuScreen /> */}
        {/* <RegisterPage /> */}
        {/* <FoodCategories /> */}

        <MainNavigation />
        {/* <ScrollView>
          <MenuScreen />
           */}

        {/* <RestaurantList /> */}
        {/* </ScrollView> */}
      </NavigationContainer>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  title: {
    backgroundColor: "#8b008b",
    fontSize: 30,
    textAlign: "center",
    color: "white",
    borderRadius: 10,
  },
});
