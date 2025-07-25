import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';

export default function BasicForm() {
  const [form, setForm] = useState({
    name: '',
    age: '',
    city: '',
    state: '',
    department: '',
    designation: '',
  });

  const handleChange = (field:any, value:any) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', form);
  };

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.heading}>Basic Form</Text>

        {/* Fields */}
        <View style={styles.row}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter name"
              value={form.name}
              onChangeText={(val) => handleChange('name', val)}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Age</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter age"
              keyboardType="numeric"
              value={form.age}
              onChangeText={(val) => handleChange('age', val)}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>City</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter city"
              value={form.city}
              onChangeText={(val) => handleChange('city', val)}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>State</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter state"
              value={form.state}
              onChangeText={(val) => handleChange('state', val)}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Department</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter department"
              value={form.department}
              onChangeText={(val) => handleChange('department', val)}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Designation</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter designation"
              value={form.designation}
              onChangeText={(val) => handleChange('designation', val)}
            />
          </View>
        </View>

        {/* Submit Button */}
        <View style={styles.buttonWrapper}>
          <Button title="Submit" onPress={handleSubmit} color="green" />
        </View>
      </View>
    </ScrollView>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 40,
    alignItems: 'center',
  },
  container: {
    width: width * 0.9,
    padding: 20,
    backgroundColor: '#ffe4e1',
    borderRadius: 15,
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'brown',
    marginBottom: 20,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
    marginBottom: 15,
  },
  inputGroup: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: '600',
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  buttonWrapper: {
    marginTop: 30,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
