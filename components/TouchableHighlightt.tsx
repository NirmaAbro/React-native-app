// Import required components
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
export default function TouchableHighlightt() {
 // Function triggered when button is pressed
 const handlePress = () => {
   alert('You pressed the button');
  };

  return (
    <View style={styles.container}>
      {/* TouchableHighlight wraps a view to make it clickable with feedback */}
      <TouchableHighlight
        onPress={handlePress}             // Function to run when pressed
        underlayColor="#DDDDDD"           // Color shown under the button when pressed
        style={styles.buttonWrapper}      // Outer styling
      >
        {/* This child View and Text will get highlighted on press */}
        <View style={styles.button}>
          <Text style={styles.buttonText}>Click Me</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

// Define styles for layout
const styles = StyleSheet.create({
  container: {
    flex: 1,                        // Full height
    justifyContent: 'center',      // Center vertically
    alignItems: 'center',          // Center horizontally
    backgroundColor: '#f0f0f0',    // Light gray background
  },
  buttonWrapper: {
    borderRadius: 10,              // Rounded corners for highlight container
  },
  button: {
    backgroundColor: '#4CAF50',    // Green button background
    paddingVertical: 12,           // Vertical padding
    paddingHorizontal: 25,         // Horizontal padding
    borderRadius: 10,              // Match outer radius
  },
  buttonText: {
    color: '#fff',                 // White text
    fontSize: 16,
  },
});