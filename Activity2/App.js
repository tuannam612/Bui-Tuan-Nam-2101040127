import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Input from './shared/inputData';

const INITIAL_USER_DATA = {
  name: '',
  username: '',
  birthday: '',
  address: '',
  email: '',
};

const App = () => {
  const [user, setUser] = useState(INITIAL_USER_DATA);

  const handleInputChange = (field, newValue) => {
    setUser({ ...user, [field]: newValue });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Personal Information</Text>
      <View style={styles.inputContainer}>
        <Input
          label="Name:"
          value={user.name}
          onChangeText={(text) => handleInputChange('name', text)}
          editable={true}
        />
        <Input
          label="Username:"
          value={user.username}
          onChangeText={(text) => handleInputChange('username', text)}
          editable={true}
        />

        <Input
          label="Birthday:"
          value={user.birthday}
          onChangeText={(text) => handleInputChange('birthday', text)}
          editable={true}
        />

        <Input
          label="Address:"
          value={user.address}
          onChangeText={(text) => handleInputChange('address', text)}
          editable={true}
        />

        <Input
          label="Email:"
          value={user.email}
          onChangeText={(text) => handleInputChange('email', text)}
          editable={true}
        />
      </View>

      <Button
        title="Submit"
        onPress={() => {
          console.log('Submitted user data:', user);
        }}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center', // Center items horizontally
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%', // Ensure the input container takes full width
    alignItems: 'center', // Center items vertically
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  textInput: {
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
