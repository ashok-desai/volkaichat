import React, {useRef, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Button from '../components/button/Button';

const slides = [
  {
    key: 'slide1',
    title: 'Leave Your Voice Instantly',
    text: 'No login required for get started chat with our AI powered chatbot.\nFeel free to ask what you want to know.',
    image: require('../assets/images/voice.png'),
  },
  {
    key: 'slide2',
    title: 'Start Free Conversation',
    text: 'No login required for get started chat with our AI powered chatbot.\nFeel free to ask what you want to know.',
    image: require('../assets/images/vo.png'),
  },
];

const SliderScreen = ({navigation}: any) => {
  const sliderRef = useRef<AppIntroSlider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const onNextPress = () => {
    if (currentSlide < slides.length - 1) {
      sliderRef.current?.goToSlide(currentSlide + 1, true);
    } else {
      navigation.navigate('LoginScreen');
    }
  };

  const renderSlide = ({item}: any) => (
    <View style={styles.slide}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Fixed Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/volkailogo.png')}
          style={styles.logo}
        />
      </View>

      {/* Slider */}
      <AppIntroSlider
        ref={sliderRef}
        renderItem={renderSlide}
        data={slides}
        onSlideChange={index => setCurrentSlide(index)}
        showNextButton={false}
        showDoneButton={false}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
      />

      {/* Footer Button */}
      <View style={styles.footer}>
        <Button
          title={currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
          onPress={onNextPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  logoContainer: {
    position: 'absolute',
    top: 5,
    alignSelf: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 30,
    marginRight: 230,
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 100,
  },
  title: {
    fontSize: 50,
    color: '#1A1A4B',
    textAlign: 'left',
    marginBottom: -100,
    lineHeight: 60,
    fontWeight: '700',
    alignSelf: 'flex-start',
    width: '100%',
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    color: '#757575',
    marginBottom: 150,
    marginTop: 120,
    lineHeight: 28,
    paddingHorizontal: 10,
    textAlign: 'left',
    width: '100%',
  },

  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop: 20,
    marginBottom: 30,
    alignSelf: 'center',
  },

  dot: {
    backgroundColor: '#C4C4C4',
  },
  activeDot: {
    backgroundColor: '#5956FC',
  },
  footer: {
    padding: 25,
    gap: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#5956FC',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SliderScreen;
