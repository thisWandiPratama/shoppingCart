import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Products from '../components/Products';
import ShoppingCartIcon from './ShoppingCartIcon';
import {connect} from 'react-redux';

class CartScreen extends Component {
  render () {
    console.log (this.props.cartItems);

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
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack ()}>
              <Image
                source={{
                  uri: 'https://toppng.com/uploads/preview/arrow-left-to-right-11550125569m6ffhoapdb.png',
                }}
                style={{height: 20, width: 20, marginLeft: 10}}
              />
            </TouchableOpacity>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 15}}>
              Keranjang Saya
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('Cart')}
          >
            <ShoppingCartIcon />
          </TouchableOpacity>
        </View>
        {this.props.cartItems.length > 0
          ? <Products
              onPress={this.props.removeItem}
              products={this.props.cartItems}
            />
          : <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
              <Text style={{fontSize: 14, color : 'rgba(0,0,0,0.6)'}}>Silakan Pilih Produk</Text>
            </View>}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeItem: product =>
      dispatch ({type: 'REMOVE_FROM_CART', payload: product}),
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (CartScreen);

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
});
