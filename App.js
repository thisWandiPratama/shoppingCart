import React from 'react';
import ShoppingCart from './src/ShoppingCart'
import { Provider } from 'react-redux'
import store from './src/store'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ShoppingCart />
      </Provider>
    );
  }
}
export default App