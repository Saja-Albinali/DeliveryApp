import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import UserContext from "../../context/UserContext";

const LogoutScreen = () => {
  const [, setAuthenticated] = useContext(UserContext);
  const navigation = useNavigation();

  useEffect(() => {
    const handleLogout = async () => {
      setAuthenticated(false); 
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }], 
      });
    };

    handleLogout();
  }, [navigation, setAuthenticated]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#8b008b" />
      <Text style={styles.text}>Logging you out...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f5f0",
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: "#555",
  },
});

export default LogoutScreen;
