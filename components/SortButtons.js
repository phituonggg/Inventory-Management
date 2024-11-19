import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const SortButtons = ({ products, setProducts }) => {
  const sortProducts = (criteria, order = "asc") => {
    const sorted = [...products].sort((a, b) => {
      if (criteria === "price") {
        return order === "asc" ? a.price - b.price : b.price - a.price;
      }
      return order === "asc"
        ? a.quantity - b.quantity
        : b.quantity - a.quantity;
    });
    setProducts(sorted);
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => sortProducts("price", "asc")}
      >
        <Text style={styles.buttonText}>Sort by Price (Asc)</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => sortProducts("price", "desc")}
      >
        <Text style={styles.buttonText}>Sort by Price (Desc)</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => sortProducts("quantity", "asc")}
      >
        <Text style={styles.buttonText}>Sort by Quantity (Asc)</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => sortProducts("quantity", "desc")}
      >
        <Text style={styles.buttonText}>Sort by Quantity (Desc)</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default SortButtons;
