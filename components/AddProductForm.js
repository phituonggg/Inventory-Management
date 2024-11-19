import React, { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from "react-native";

const AddProductForm = ({ setProducts }) => {
  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductQuantity, setNewProductQuantity] = useState("");

  const handleAddProduct = () => {
    if (newProductName && newProductPrice && newProductQuantity) {
      const newProduct = {
        name: newProductName,
        price: parseFloat(newProductPrice),
        quantity: parseInt(newProductQuantity),
      };
      setProducts((prevProducts) => [...prevProducts, newProduct]);
      setNewProductName("");
      setNewProductPrice("");
      setNewProductQuantity("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={newProductName}
        onChangeText={setNewProductName}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={newProductPrice}
        keyboardType="numeric"
        onChangeText={setNewProductPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity"
        value={newProductQuantity}
        keyboardType="numeric"
        onChangeText={setNewProductQuantity}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
        <Text style={styles.buttonText}>Add Product</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddProductForm;
