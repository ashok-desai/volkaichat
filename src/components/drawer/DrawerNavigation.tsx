// DrawerNavigator.tsx
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../../screens/HomeScreen';
import CustomDrawerContent from './CustomDrawerContent'; // Import the custom drawer content

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
    <Drawer.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{headerShown: false}}
    />
  </Drawer.Navigator>
);

export default DrawerNavigator;
