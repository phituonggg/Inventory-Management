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
});

export default App;
