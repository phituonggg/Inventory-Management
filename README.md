# Inventory-Management

# Product Management & Missing Number Challenge

## App Overview

This React Native app allows users to manage a product inventory and calculate the missing number in a sequence of integers. The app provides a list of products with their prices and quantities, allowing users to:

1. Add new products.
2. Sort products by price or quantity.
3. View the total inventory value.
4. Find the most expensive product.
5. Check if "Headphones" are in stock.
6. Calculate the missing number from a sequence of numbers.

### Key Features:
- **Product Management**: Users can view, add, delete, and sort products by price or quantity.
- **Missing Number Calculation**: The app also allows users to input a sequence of numbers and calculates the missing number from that sequence.
- **Total Inventory Value**: The app calculates and displays the total value of all products in the inventory based on their price and quantity.

## Steps to Build and Run the App

### Prerequisites:
1. Install **Node.js** (preferably the LTS version) from [nodejs.org](https://nodejs.org).
2. Install **React Native CLI** globally:
   ```bash
   npm install -g react-native-cli
3. Install Android Studio or Xcode to run the app on an emulator or a physical device.

   Steps to Build and Run the App:

1. Clone the repository to your local machine:
      git clone https://github.com/yourusername/ProductManagementApp.git
      cd ProductManagementApp
2. Install the required dependencies:
       npm install
3. For Android: Ensure you have Android Studio set up and running, then execute:
       npx react-native run-android / npm start
4. For iOS (macOS only): Ensure you have Xcode installed, then execute:
       npx react-native run-ios / npm start
5. The app should now be running on your emulator or physical device.

   Additional Notes:
The Add Product form allows users to input product details (name, price, quantity).
Products can be sorted by price or quantity, and can also be deleted from the inventory.
The Missing Number feature calculates the missing number in a given sequence of numbers.
The app also shows whether "Headphones" are in stock or not.

  Challenges and Notes:
State Management: One challenge was managing the state for the product list, handling additions, deletions, and updates efficiently.
UI Adjustments: Ensuring that the UI is responsive and that the "Add Product" form doesn’t overlap with other UI elements when visible was a challenge.
Missing Number Calculation: The missing number functionality required careful handling of edge cases, such as when there is only one number or when the input is incomplete.
Input Validation: Validating user inputs in forms (e.g., price and quantity) to ensure they are valid numbers was another challenge.
