import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  //   Image,
} from 'react-native';

interface CustomDrawerContentProps {
  navigation: any;
}

const CustomDrawerContent: React.FC<CustomDrawerContentProps> = ({
  navigation,
}) => {
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.imageContainer}>
        {/* <Image
          source={require('../assets/images/volkailogo.png')}
          style={styles.logoImage}
        /> */}
      </View>
      <Text style={styles.drawerHeader}>
        <TextInput
          placeholder="Search chat history"
          style={styles.searchInput}
        />
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        style={styles.drawerItem}>
        <Text style={styles.text}>Customize Feed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  drawerHeader: {
    fontSize: 24,
    marginBottom: 20,
  },
  drawerItem: {
    paddingVertical: 10,
  },
  searchInput: {
    height: 50,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    paddingLeft: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export default CustomDrawerContent;
