import React from "react";
import { connect } from "react-redux";


class CartIcon extends React.Component {

  render() {
    return (
      <React.Fragment>
        <i className="material-icons">shopping_cart</i>
        {this.props.cartItems.length} items
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.addedToCart
  };
};

export default connect(mapStateToProps)(CartIcon);
