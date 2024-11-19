import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";

const MissingNumber = () => {
  const [inputNumbers, setInputNumbers] = useState(""); // Store user input as a string
  const [missingNumber, setMissingNumber] = useState(null); // Store calculated missing number
  const [error, setError] = useState(""); // Error handling for invalid input

  // Function to calculate missing number
  const handleFindMissingNumber = () => {
    setError(""); // Reset error state
    const numbers = inputNumbers
      .split(",") // Split input by commas
      .map((num) => parseInt(num.trim())); // Convert each item to an integer

    if (numbers.length < 2) {
      setError("Please enter at least two numbers.");
      return;
    }

    // Find the maximum number in the array
    const N = Math.max(...numbers);
    // The expected sum of numbers from 1 to N (formula: n * (n + 1)) / 2
    const expectedSum = (N * (N + 1)) / 2;
    // The sum of numbers in the array
    const actualSum = numbers.reduce((acc, num) => acc + num, 0);

    // Calculate the missing number
    const missing = expectedSum - actualSum;

    // Update the state with the missing number
    setMissingNumber(missing);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find the Missing Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter numbers separated by commas (e.g., 1, 2, 4, 5)"
        value={inputNumbers}
        onChangeText={setInputNumbers}
      />
      <Button title="Find Missing Number" onPress={handleFindMissingNumber} />

      {error && <Text style={styles.error}>{error}</Text>}

      {missingNumber !== null && !error && (
        <Text style={styles.result}>
          Missing number in array: {missingNumber}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
  },
  result: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
    color: "#007bff",
  },
  error: {
    fontSize: 16,
    color: "red",
    marginTop: 10,
    textAlign: "center",
  },
});

export default MissingNumber;
