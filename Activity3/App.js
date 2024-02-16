import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ColorButton from './shared/colorButton'; 

export default function App(){
  const handleButtonPress = (buttonText) => {
    console.log(`${buttonText} button pressed`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image source={require('./assets/image.png')} style={styles.image} />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Best <Text style={{ color: '#38B4E5' }}>Shared Hosting</Text> Company</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>
          With this responsive landing page template, you can promote your all hosting, domain and email services.
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <ColorButton text="View Plans" onPress={() => handleButtonPress('View Plans')} />
        <View style={{ width: 20 }} />
        <ColorButton text="All Features" onPress={() => handleButtonPress('All Features')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    height: 100,
    width: 200,
  },
  header: {
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  content: {
    padding: 1,
    alignItems: 'center',
  },
  image: {
    width: "100%",
    height: "60%",

  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    color: 'black',
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    padding: 20,
  },
});
