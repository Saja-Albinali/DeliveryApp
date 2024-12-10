import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useQuery } from "@tanstack/react-query";
import {
  getAllResturants,
  getAllRestaurantsItems,
  getItemDetails,
} from "../../api/resturants";

export default function RestaurantList({ route, navigation }) {
  const { category } = route.params;

  const {
    data: restaurants = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["restaurants"],
    queryFn: getAllResturants,
  });

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="purple" />
        <Text style={styles.loaderText}>Loading restaurants...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Failed to load restaurants</Text>
      </View>
    );
  }

  const filteredRestaurants = restaurants.filter(
    (restaurant) => restaurant.category === category.categoryName
  );

  const handleRestaurantPress = async (restaurantId) => {
    try {
      const restaurantDetails = await getAllRestaurantsItems(restaurantId);
      navigation.navigate("MenuScreen", { restaurant: restaurantDetails });
    } catch (err) {
      console.error("Error fetching restaurant details:", err);
    }
  };

  const renderRestaurantCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handleRestaurantPress(item._id)} 
    >
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.details}>
          ⭐ {item.rating} | 🕒 {item.deliveryTime}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category.categoryName} Restaurants</Text>
      <FlatList
        data={filteredRestaurants}
        renderItem={renderRestaurantCard}
        keyExtractor={(item) => item._id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F5F0",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
    textAlign: "center",
  },
  card: {
    flexDirection: "row",
    marginBottom: 15,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    elevation: 3,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  info: {
    marginLeft: 15,
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  details: {
    fontSize: 14,
    color: "#555",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loaderText: {
    fontSize: 16,
    marginTop: 10,
    color: "#555",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 16,
    color: "red",
  },
});
