// import React, { Component } from "react";
// import {
//     View,
//     Text,
//     StyleSheet
// } from "react-native";
// import { createStackNavigator,createAppContainer } from 'react-navigation'
// import HomeScreen from './containers/HomeScreen'
// import ElectronicsScreen from './containers/ElectronicsScreen'
// import BooksScreen from './containers/BooksScreen'
// import ShoppingCartIcon from './containers/ShoppingCartIcon'
// import CartScreen from './containers/CartScreen'
// class ShoppingCart extends Component {
//     render() {
//         return (
//             <AppStackNavigator />
//         );
//     }
// }

// const AppStackNavigator = createStackNavigator({
//     Home: HomeScreen,
//     Electronics: ElectronicsScreen,
//     Books: BooksScreen,
//     Cart: CartScreen
// }, 
// {
//         navigationOptions: {
//             headerTitle: 'Shopping App',
//             headerRight: (
//                 <ShoppingCartIcon />
//             )
//         }
//  })



//  const ShoppingCart1 = createAppContainer(AppStackNavigator);

// export default ShoppingCart1;



// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });


//import liraries
import React from 'react';

// import Method From React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import Pages Components
import HomeScreen from '../src/containers/HomeScreen'
import ElectronicsScreen from '../src/containers/ElectronicsScreen'
import BooksScreen from '../src/containers/BooksScreen'
import ShoppingCartIcon from '../src/containers/ShoppingCartIcon'
import CartScreen from '../src/containers/CartScreen'

const Stack = createStackNavigator()

 const ShoppingCart = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Electronics" component={ElectronicsScreen} />
            <Stack.Screen name="Books" component={BooksScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default ShoppingCart