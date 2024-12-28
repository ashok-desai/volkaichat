import React, {useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';

const SplashScreen = ({navigation}: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('SlidScreen');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/volkai.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 325,
    width: 325,
    marginTop: 275,
    marginBottom: 300,
    marginLeft: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SplashScreen;
