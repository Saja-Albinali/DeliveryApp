import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import restaurants from "../../data/restaurants";

const MenuScreen = ({ navigation }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [selectedDish, setSelectedDish] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (dish) => {
    setCart([...cart, dish]);
    setSelectedDish(null);
  };

  const removeFromCart = (dish) => {
    setCart(cart.filter((item) => item.id !== dish.id));
  };

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  const renderRestaurant = ({ item }) => (
    <TouchableOpacity
      style={styles.restaurantCard}
      onPress={() => setSelectedRestaurant(item)}
    >
      <Image source={{ uri: item.image }} style={styles.restaurantImage} />
      <View style={styles.restaurantInfo}>
        <Text style={styles.restaurantName}>{item.name}</Text>
        <Text style={styles.restaurantDetails}>
          ⭐ {item.rating} | 🕒 {item.deliveryTime}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderMenuItem = ({ item }) => (
    <TouchableOpacity
      style={styles.menuCard}
      onPress={() => setSelectedDish(item)}
    >
      <Image source={{ uri: item.image }} style={styles.menuImage} />
      <View style={styles.menuInfo}>
        <Text style={styles.menuName}>{item.name}</Text>
        <Text style={styles.menuDescription}>
          {item.description.substring(0, 50)}...
        </Text>
        <Text style={styles.menuPrice}>${item.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {!selectedRestaurant ? (
        <>
          <Text style={styles.title}>Choose a Restaurant</Text>
          <FlatList
            data={restaurants}
            renderItem={renderRestaurant}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        </>
      ) : selectedDish ? (
        <View style={styles.dishDetailsContainer}>
          <TouchableOpacity onPress={() => setSelectedDish(null)}>
            <Text style={styles.backButton}>← Back to Menu</Text>
          </TouchableOpacity>
          <Image
            source={{ uri: selectedDish.image }}
            style={styles.dishImageLarge}
          />
          <Text style={styles.dishName}>{selectedDish.name}</Text>
          <Text style={styles.dishPrice}>${selectedDish.price.toFixed(2)}</Text>
          <Text style={styles.dishDescription}>{selectedDish.description}</Text>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => addToCart(selectedDish)}
          >
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <TouchableOpacity
            onPress={() => setSelectedRestaurant(null)}
            style={styles.backButton}
          >
            <Text style={styles.backButtonText}>← Back to Restaurants</Text>
          </TouchableOpacity>
          <Text style={styles.title}>{selectedRestaurant.name} - Menu</Text>
          <FlatList
            data={selectedRestaurant.menuItems}
            renderItem={renderMenuItem}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}

      {cart.length > 0 && (
        <TouchableOpacity
          style={styles.viewCartButton}
          onPress={() =>
            navigation.navigate("CartScreen", {
              cart,
              removeFromCart,
              calculateTotal,
            })
          }
        >
          <Text style={styles.viewCartText}>View Cart ({cart.length})</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  restaurantCard: {
    flexDirection: "row",
    marginVertical: 10,
    backgroundColor: "seashell",
    borderRadius: 8,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  restaurantImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  restaurantInfo: {
    justifyContent: "center",
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  restaurantDetails: {
    fontSize: 14,
    color: "#777",
    marginTop: 5,
  },
  menuCard: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  menuImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  menuInfo: {
    flex: 1,
    justifyContent: "center",
  },
  menuName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  menuDescription: {
    fontSize: 14,
    color: "#777",
    marginVertical: 5,
  },
  menuPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  addToCartButton: {
    backgroundColor: "cornflowerblue",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  addToCartText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  dishDetailsContainer: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  backButton: {
    fontSize: 16,
    color: "#007BFF",
    marginBottom: 10,
  },
  dishImageLarge: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  dishName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  dishPrice: {
    fontSize: 18,
    color: "#555",
    marginBottom: 10,
  },
  dishDescription: {
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
  },
  viewCartButton: {
    backgroundColor: "cornflowerblue",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  viewCartText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  cartSummary: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: "#DDD",
  },
  cartTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  cartItem: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  cartItemImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  cartItemInfo: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  cartItemDetails: {
    fontSize: 14,
    color: "#777",
  },
  removeButton: {
    backgroundColor: "red",
    padding: 8,
    borderRadius: 5,
  },
  removeButtonText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  totalSection: {
    marginTop: 20,
    alignItems: "center",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 10,
  },
  checkoutText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MenuScreen;
