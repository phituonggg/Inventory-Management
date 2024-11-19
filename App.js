import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet, Button } from "react-native";
import ProductInfo from "./components/ProductInfo";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";
import MissingNumber from "./components/MissingNumber";

const App = () => {
  const initialProducts = [
    { name: "Laptop", price: 999.99, quantity: 5 },
    { name: "Smartphone", price: 499.99, quantity: 10 },
    { name: "Tablet", price: 299.99, quantity: 0 },
    { name: "Smartwatch", price: 199.99, quantity: 3 },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [isAddProductVisible, setIsAddProductVisible] = useState(false);
  const [isMissingNumberVisible, setIsMissingNumberVisible] = useState(false);

  // Function to sort products by name in ascending order
  const sortByNameAsc = () => {
    const sortedProducts = [...products].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setProducts(sortedProducts);
  };

  // Function to sort products by name in descending order
  const sortByNameDesc = () => {
    const sortedProducts = [...products].sort((a, b) =>
      b.name.localeCompare(a.name)
    );
    setProducts(sortedProducts);
  };

  // Function to sort products by price in ascending order
  const sortByPriceAsc = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };

  // Function to sort products by price in descending order
  const sortByPriceDesc = () => {
    const sortedProducts = [...products].sort((a, b) => b.price - a.price);
    setProducts(sortedProducts);
  };

  // Function to sort products by quantity in ascending order
  const sortByQuantityAsc = () => {
    const sortedProducts = [...products].sort(
      (a, b) => a.quantity - b.quantity
    );
    setProducts(sortedProducts);
  };

  // Function to sort products by quantity in descending order
  const sortByQuantityDesc = () => {
    const sortedProducts = [...products].sort(
      (a, b) => b.quantity - a.quantity
    );
    setProducts(sortedProducts);
  };

  return (
    <ScrollView style={styles.container}>
      <ProductInfo products={products} />

      <ProductList
        products={products}
        setProducts={setProducts}
        isAddProductVisible={isAddProductVisible}
      />

      <Button
        title={
          isAddProductVisible
            ? "Hide Add Product Form"
            : "Show Add Product Form"
        }
        onPress={() => setIsAddProductVisible(!isAddProductVisible)}
      />

      {isAddProductVisible && <AddProductForm setProducts={setProducts} />}

      <Button
        title={
          isMissingNumberVisible
            ? "Hide Missing Number Logic"
            : "Show Missing Number Logic"
        }
        onPress={() => setIsMissingNumberVisible(!isMissingNumberVisible)}
      />

      {isMissingNumberVisible && <MissingNumber />}

      {/* Sort buttons */}
      <View style={styles.sortButtonsContainer}>
        <Button title="Sort by Name (Asc)" onPress={sortByNameAsc} />
        <Button title="Sort by Name (Desc)" onPress={sortByNameDesc} />
        <Button title="Sort by Price (Asc)" onPress={sortByPriceAsc} />
        <Button title="Sort by Price (Desc)" onPress={sortByPriceDesc} />
        <Button title="Sort by Quantity (Asc)" onPress={sortByQuantityAsc} />
        <Button title="Sort by Quantity (Desc)" onPress={sortByQuantityDesc} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
    marginTop: 10, // Ensure no content is cut off
  },
  sortButtonsContainer: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    flexWrap: "wrap", // Allow buttons to wrap to the next line if needed
    justifyContent: "space-between",
  },
});

export default App;
