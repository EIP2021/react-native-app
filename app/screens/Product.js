/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  loading: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: null,
      error: false,
    };
  }

  componentDidMount = async () => {
    const url = `https://fr.openfoodfacts.org/api/v0/produit/${this.props.navigation.state.params.barcode.data}.json`;
    const res = await fetch(url);
    const response = await res.json();
    if (response.status === 0) {
      this.setState({
        error: true,
      });
      return;
    }
    this.setState({
      data: response.product,
      loading: false,
    });
  }

  render() {
    if (this.state.error) {
      return (
        <View style={styles.loading}>
          <Text>There was an error loading your product</Text>
        </View>
      );
    }
    if (this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    console.log(this.state.data.image_url);
    console.log(Object.keys(this.state.data.nutriments));
    return (
      <View style={styles.container}>
        <Image style={{ width: 136, height: 400 }} source={{ uri: this.state.data.image_url }} />
        <Text>{this.state.data.product_name_fr}</Text>
      </View>
    );
  }
}

Product.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired,
  }).isRequired,
};

export default Product;
