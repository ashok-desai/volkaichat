import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Icon from '../assets/Icons';
import {useNavigation, DrawerActions} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {id: '1', text: 'Hello! How can I assist you?', sender: 'bot'},
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newUserMessage = {
        id: String(messages.length + 1),
        text: message,
        sender: 'user',
      };
      setMessages([...messages, newUserMessage]);

      const newBotMessage = {
        id: String(messages.length + 2),
        text: 'I am ready to help you with coding questions!',
        sender: 'bot',
      };
      setMessages(prevMessages => [...prevMessages, newBotMessage]);

      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuIconContainer}>
        <TouchableOpacity
          style={styles.menuIconContainer}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Icon.Menu color="#000" style={styles.menuIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.volkaiLogoContainer}>
        <View style={styles.logoWithProfileContainer}>
          <Image
            source={require('../assets/images/volkailogo.png')}
            style={styles.volkaiLogo}
          />
          <Image
            source={require('../assets/images/profileimage.png')}
            style={styles.profileImage}
          />
        </View>
      </View>
      <Image
        source={require('../assets/images/image1.png')}
        style={styles.image1}
      />

      <Text style={styles.text}>Hello, Boss!</Text>
      <Text style={styles.text}>Am Ready For Help You</Text>
      <Text style={styles.text1}>
        Ask me anything what's on your mind. Am{'\n'}
        <Text style={styles.text2}>here to assist you!</Text>
      </Text>
      <View style={styles.button}>
        <View style={styles.buttonTextContainer}>
          <Text style={styles.text3}>using HTML</Text>
          <Text style={styles.text4}>using CSS</Text>
          <Text style={styles.text5}>javaScript</Text>
        </View>
      </View>

      <FlatList
        data={messages}
        renderItem={({item}) => (
          <View
            style={[
              styles.messageContainer,
              item.sender === 'user' ? styles.userMessage : styles.botMessage,
            ]}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        inverted
      />

      <View style={styles.bottomContainer}>
        <TextInput
          value={message}
          onChangeText={setMessage}
          style={styles.input}
        />
      </View>

      <View style={styles.bottomImage}>
        <TouchableOpacity onPress={handleSendMessage}>
          <Image
            source={require('../assets/images/image2.png')}
            style={styles.image2}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.codeContainer}>
        <Text style={styles.codeText}>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  volkaiLogo: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
  },
  profileImage: {
    width: 38,
    height: 38,
    resizeMode: 'contain',
    marginLeft: '90%',
    marginTop: -80,
  },
  menuIconContainer: {
    position: 'absolute',
    top: 15,
    left: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  volkaiLogoContainer: {
    marginTop: -25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoWithProfileContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
  },
  image1: {
    width: 108,
    height: 121,
    resizeMode: 'contain',
    marginTop: 15,
    marginBottom: 10,
  },
  text: {
    fontSize: 34,
    fontWeight: '700',
    marginTop: 0,
    textAlign: 'center',
    lineHeight: 45,
  },
  text1: {
    fontWeight: '500',
    fontSize: 18,
    color: '#757070',
    marginBottom: 10,
    textAlign: 'center',
    lineHeight: 25,
    width: 500,
    marginTop: 10,
  },
  text2: {
    fontSize: 18,
    color: '#757070',
    textAlign: 'center',
    lineHeight: 25,
    width: 500,
    marginTop: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    width: '100%',
    marginTop: 30,
  },
  buttonTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },

  text3: {
    fontSize: 15,
    color: '#DD4B25',
    fontWeight: '500',
    borderRadius: 50,
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: '#DD4B250A',
    borderColor: '#DD4B25',
    borderWidth: 1,
  },

  text4: {
    fontSize: 15,
    color: '#3D5FE0',
    fontWeight: '500',
    borderRadius: 50,
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: '#3D5FE00A',
    borderColor: '#3D5FE0',
    borderWidth: 1,
    marginRight: -10,
  },

  text5: {
    fontSize: 15,
    color: '#ECDA1D',
    fontWeight: '500',
    borderRadius: 50,
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: '#ECDA1D0A',
    borderColor: '#ECDA1D',
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 50,
  },
  bottomContainer: {
    width: '100%',
  },
  input: {
    width: 314,
    height: 64,
    borderRadius: 32,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    paddingLeft: 15,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    elevation: 6,
    marginTop: 15,
  },
  bottomImage: {
    marginTop: 10,
  },
  image2: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    marginLeft: 335,
    marginTop: -75,
  },
  codeContainer: {
    marginTop: 30,
    width: '100%',
    paddingHorizontal: 20,
  },
  codeText: {
    fontSize: 16,
    color: '#333',
    backgroundColor: '#f4f4f4',
    padding: 10,
    borderRadius: 5,
    fontFamily: 'Courier New',
  },
  messageContainer: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  userMessage: {
    backgroundColor: '#d1f7c4',
    alignSelf: 'flex-end',
  },
  botMessage: {
    backgroundColor: '#f1f1f1',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
  },
});

export default HomeScreen;
