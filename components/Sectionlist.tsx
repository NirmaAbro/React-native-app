// Import required components from React Native
import React from 'react';
import {
    Image,
    SectionList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

// Sample contact data with image URLs and names
const DATA = [
  {
    title: 'A', // Section header
    data: [
      {
        name: 'Alice',
        image: 'https://www.google.com/imgres?q=image%20girl%20professional&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F038%2F962%2F461%2Fnon_2x%2Fai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Fprofessional-woman&docid=yVfx3wEn1l3u8M&tbnid=JGZ3DX67r7mDaM&vet=12ahUKEwiC0syr7N6OAxXhT6QEHXo2MNEQM3oECBAQAA..i&w=1749&h=980&hcb=2&ved=2ahUKEwiC0syr7N6OAxXhT6QEHXo2MNEQM3oECBAQAA',
      },
      {
        name: 'Andrew',
        image: 'https://www.google.com/imgres?q=image%20girl%20professional&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F038%2F962%2F461%2Fnon_2x%2Fai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Fprofessional-woman&docid=yVfx3wEn1l3u8M&tbnid=JGZ3DX67r7mDaM&vet=12ahUKEwiC0syr7N6OAxXhT6QEHXo2MNEQM3oECBAQAA..i&w=1749&h=980&hcb=2&ved=2ahUKEwiC0syr7N6OAxXhT6QEHXo2MNEQM3oECBAQAA',
      },
    ],
  },
  {
    title: 'B',
    data: [
      {
        name: 'Bob',
        image: 'https://www.google.com/imgres?q=image%20girl%20professional&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F038%2F962%2F461%2Fnon_2x%2Fai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Fprofessional-woman&docid=yVfx3wEn1l3u8M&tbnid=JGZ3DX67r7mDaM&vet=12ahUKEwiC0syr7N6OAxXhT6QEHXo2MNEQM3oECBAQAA..i&w=1749&h=980&hcb=2&ved=2ahUKEwiC0syr7N6OAxXhT6QEHXo2MNEQM3oECBAQAA',
      },
      {
        name: 'Bella',
        image: 'https://www.google.com/imgres?q=image%20girl%20professional&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F038%2F962%2F461%2Fnon_2x%2Fai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Fprofessional-woman&docid=yVfx3wEn1l3u8M&tbnid=JGZ3DX67r7mDaM&vet=12ahUKEwiC0syr7N6OAxXhT6QEHXo2MNEQM3oECBAQAA..i&w=1749&h=980&hcb=2&ved=2ahUKEwiC0syr7N6OAxXhT6QEHXo2MNEQM3oECBAQAA',
      },
    ],
  },
];

export default function Sectionlist() {
 // Function to handle the "Call" button press
 const handleCall = (name:string) => {
    console.log(`Calling ${name}`);
    alert(`You are calling ${name}`); // Show alert with contact's name
  };

  return (
    <View style={styles.container}>
      {/* SectionList to show grouped contacts */}
      <SectionList
        sections={DATA} // Grouped contact data

        // Create a unique key using name and index
        keyExtractor={(item, index) => item.name + index}

        // Render each contact item
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            {/* Profile Image */}
            <Image source={{ uri: item.image }} style={styles.image} />

            {/* Name Text */}
            <Text style={styles.name}>{item.name}</Text>

            {/* Call Button */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleCall(item.name)} // Call function with name
            >
              <Text style={styles.buttonText}>Call</Text>
            </TouchableOpacity>
          </View>
        )}

        // Render section headers like 'A', 'B'
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
};

// Styles for the UI
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#eee',
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  itemContainer: {
    flexDirection: 'row', // Horizontal layout for image, name, button
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginBottom: 5,
    borderRadius: 8,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25, // Makes image circular
    marginRight: 15,
  },
  name: {
    fontSize: 18,
    flex: 1, // Takes available space between image and button
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});

