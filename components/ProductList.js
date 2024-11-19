import React from "react";
import {
  FlatList,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import ProductCard from "./ProductCard";

const ProductList = ({ products, setProducts, isAddProductVisible }) => {
  const handleDelete = (productName) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.name !== productName)
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <ProductCard product={item} onDelete={handleDelete} />
        )}
      />

      {isAddProductVisible && (
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.buttonText}>Add Product</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20, // Added margin to push the button up
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProductList;
