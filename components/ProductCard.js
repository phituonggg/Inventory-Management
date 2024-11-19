import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const ProductCard = ({ product, onDelete }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productDetail}>Price: ${product.price}</Text>
      <Text style={styles.productDetail}>Quantity: {product.quantity}</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(product.name)}
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 10, // Reduced padding for smaller card
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  productName: {
    fontSize: 16, // Smaller font size for product name
    fontWeight: "bold",
    color: "#333",
  },
  productDetail: {
    fontSize: 14, // Reduced font size for product details
    color: "#666",
  },
  deleteButton: {
    backgroundColor: "#ff5c5c",
    padding: 5,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 12, // Smaller font size for delete button text
  },
});

export default ProductCard;
