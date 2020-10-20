import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {books} from '../Data';
import Products from '../components/Products';
import ShoppingCartIcon from './ShoppingCartIcon';
import {connect} from 'react-redux';
class BooksScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 45,
            backgroundColor: '#fff',
          }}
        >
          <View style={{flexDirection:'row', alignItems:'center'}}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              source={{
                uri: 'https://toppng.com/uploads/preview/arrow-left-to-right-11550125569m6ffhoapdb.png',
              }}
              style={{height: 20, width: 20, marginLeft: 10}}
            />
          </TouchableOpacity>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 15}}>
              Books
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('Cart')}
          >
            <ShoppingCartIcon />
          </TouchableOpacity>
        </View>
        <Products products={books} onPress={this.props.addItemToCart} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: product =>
      dispatch ({type: 'ADD_TO_CART', payload: product}),
  };
};
export default connect (null, mapDispatchToProps) (BooksScreen);

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
});
