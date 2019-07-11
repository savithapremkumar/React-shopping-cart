import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/cart";
import Card from "../components/item";

class ProductPage extends Component {
  handleClick = id => {
    this.props.addToCart(id);
  };

  render() {
    let productList = this.props.products.map(item => {
      return (
        <Card
          product={item}
          actionHandler={this.handleClick}
          actionType="add"
          key={item.id}
        />
      );
    });

    return (
      <div className="container">
        <div className="cart">
          <h5>Product Page</h5>
          <ul className="collection">{productList}</ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.products
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage);
