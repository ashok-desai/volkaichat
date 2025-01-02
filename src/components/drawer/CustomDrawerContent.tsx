import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import Icon from '../../assets/Icons';

interface CustomDrawerContentProps {
  navigation: any;
}

const CustomDrawerContent: React.FC<CustomDrawerContentProps> = ({
  navigation,
}) => {
  return (
    <View style={styles.drawerContainer}>
      {/* Replace Text with View */}
      <View style={styles.drawerHeader}>
        <View style={styles.searchContainer}>
          <Icon.Search color="#000" style={styles.searchIcon} />
          <TextInput
            placeholder="Search chat history"
            style={styles.searchInput}
          />
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/volkailogo.png')}
          style={styles.logoImage}
        />
        <View style={styles.customizeFeedContainer}>
          <Image
            source={require('../../assets/images/image3.png')}
            style={styles.logoImage1}
          />
        </View>
        <Text style={styles.text}>Customize Feed</Text>
        <View style={styles.drawerContent1}>
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeScreen')}
            style={styles.drawerItem}>
            <Icon.RightArrow color="#000" style={styles.rightArrow} />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer1}>
          <Image
            source={require('../../assets/images/image4.png')}
            style={styles.logoImage2}
          />
          <Text style={styles.text1}>Community</Text>
          <View style={styles.lineContainer}>
            <View style={styles.line} />
            <Text style={styles.recentChatsText}>Recent Chats</Text>
          </View>
        </View>
      </View>
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
    marginBottom: 20,
    marginTop: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 16,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logoImage: {
    width: 135,
    height: 30,
    marginBottom: 10,
    marginRight: 170,
    marginTop: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  customizeFeedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  logoImage1: {
    width: 21,
    height: 21,
    marginRight: 270,
    marginTop: 5,
  },
  text: {
    fontSize: 18,
    marginTop: -25,
    marginRight: 80,
    lineHeight: 28,
  },
  drawerContent1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  drawerItem: {
    paddingVertical: 10,
  },
  rightArrow: {
    marginLeft: 300,
    marginTop: -30,
  },
  imageContainer1: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logoImage2: {
    width: 22,
    height: 22,
    marginRight: 270,
    marginTop: 5,
  },
  text1: {
    fontSize: 20,
    marginTop: -25,
    marginRight: 110,
    lineHeight: 28,
  },
  lineContainer: {
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    height: 1,
    backgroundColor: '#ccc',
    width: '90%',
  },
  recentChatsText: {
    height: 22,
    width: 100,
    marginTop: 10,
    fontSize: 16,
    marginRight: 180,
  },
});

export default CustomDrawerContent;
