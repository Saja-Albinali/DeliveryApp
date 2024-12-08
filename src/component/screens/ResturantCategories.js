import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import restaurantCategories from "../../data/categories"; 

export default function FoodCategories() {
  const navigation = useNavigation();

  const renderCategoryCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("RestaurantList", { category: item })}
    >
      <Image source={{ uri: item.categoryImage }} style={styles.cardImage} />
      <Text style={styles.cardText}>{item.categoryName}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food Categories</Text>
      <FlatList
        data={restaurantCategories}
        renderItem={renderCategoryCard}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F5F0",
    padding: 20,
    borderRadius: 12,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
    textAlign: "center",
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginBottom: 15,
    width: "100%",
  },
  cardImage: {
    width: 120,
    height: 80,
    borderRadius: 5,
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    color: "#333",
  },
});
