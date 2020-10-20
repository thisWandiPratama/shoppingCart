//import liraries
import React from 'react';

// import Method From React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import Pages Components
import HomeScreen from '../src/containers/HomeScreen';
import ElectronicsScreen from '../src/containers/ElectronicsScreen';
import BooksScreen from '../src/containers/BooksScreen';
import ShoppingCartIcon from '../src/containers/ShoppingCartIcon';
import CartScreen from '../src/containers/CartScreen';

const Stack = createStackNavigator ();

const ShoppingCart = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerRight: () => <ShoppingCartIcon />,
          }}
        />
        <Stack.Screen
          name="Electronics"
          component={ElectronicsScreen}
          options={{
            headerRight: () => <ShoppingCartIcon />,
          }}
        />
        <Stack.Screen
          name="Books"
          component={BooksScreen}
          options={{
            headerRight: () => <ShoppingCartIcon />,
          }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{
            headerRight: () => <ShoppingCartIcon />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default ShoppingCart;
