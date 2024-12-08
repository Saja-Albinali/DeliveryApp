// import React from "react";
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
// } from "react-native";

// const addToCart = (dish) => {
//     const existingItemIndex = cart.findIndex((item) => item.id === dish.id);
//     if (existingItemIndex >= 0) {
//       //if dish is in the cart increase quan
//       const updatedCart = [...cart];
//       updatedCart[existingItemIndex].quantity += 1;
//       setCart(updatedCart);
//     } else {
//       // if the dish is not in the cart add it so it is visible in the menu
//       setCart([...cart, { ...dish, quantity: 1 }]);
//     }
//   };

//   const calculateTotal = () => {
//     return cart
//       .reduce((total, item) => total + item.price * item.quantity, 0)
//       .toFixed(2);
//   };

//   const renderCartItem = ({ item }) => (
//     <View style={styles.cartItem}>
//       <Image source={{ uri: item.image }} style={styles.cartItemImage} />
//       <View style={styles.cartItemInfo}>
//         <Text style={styles.cartItemName}>{item.name}</Text>
//         <Text style={styles.cartItemDetails}>Quantity: {item.quantity}</Text>
//         <Text style={styles.cartItemTotal}>
//           ${(item.price * item.quantity).toFixed(2)}
//         </Text>
//       </View>
//     </View>
//   );

// const styles = StyleSheet.create({
//   cartContainer: {
//     flex: 1,
//     backgroundColor: "#F9F5F0",
//     padding: 15,
//     borderWidth: 1,
//     borderColor: "grey",
//   },
//   hideCartButton: {
//     alignItems: "center",
//     backgroundColor: "cornflowerblue",
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 15,
//   },
//   hideCartText: {
//     color: "#FFF",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   cartTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//     color: "#333",
//   },
//   cartList: {
//     flexGrow: 0,
//     marginBottom: 20,
//   },
//   cartItem: {
//     flexDirection: "row",
//     marginBottom: 10,
//     backgroundColor: "#FFF",
//     padding: 10,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: "#DDD",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   cartItemImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 10,
//     marginRight: 10,
//   },
//   cartItemInfo: {
//     justifyContent: "center",
//   },
//   cartItemName: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   cartItemDetails: {
//     fontSize: 14,
//     color: "#777",
//   },
//   cartItemTotal: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   totalSection: {
//     marginTop: 20,
//     alignItems: "flex-end",
//   },
//   totalText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: 10,
//   },
//   checkoutButton: {
//     backgroundColor: "cornflowerblue",
//     padding: 15,
//     borderRadius: 10,
//     alignItems: "center",
//   },
//   checkoutText: {
//     color: "#FFF",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default Cart;
