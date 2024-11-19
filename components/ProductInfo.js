import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ProductInfo = ({ products }) => {
  const calculateTotalInventoryValue = () => {
    return products
      .reduce((total, product) => total + product.price * product.quantity, 0)
      .toFixed(2);
  };

  const findMostExpensiveProduct = () => {
    return products.reduce((mostExpensive, product) =>
      product.price > mostExpensive.price ? product : mostExpensive
    ).name;
  };

  const isHeadphonesInStock = () => {
    return products.some((product) => product.name === "Headphones");
  };

  return (
    <View style={styles.infoContainer}>
      <Text style={styles.infoText}>
        💰 Total Inventory Value: ${calculateTotalInventoryValue()}
      </Text>
      <Text style={styles.infoText}>
        💎 Most Expensive Product: {findMostExpensiveProduct()}
      </Text>
      <Text style={styles.infoText}>
        🎧 "Headphones" in stock? {isHeadphonesInStock() ? "Yes" : "No"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
    color: "#333",
  },
});

export default ProductInfo;
