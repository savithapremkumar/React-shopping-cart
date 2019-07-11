import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../redux/actions/cart";
import Card from "../components/item";

class CartPage extends React.Component {
  handleClick = id => {
    this.props.removeFromCart(id);
  };

  render() {
    let productList = this.props.cartItems.map(item => {
      return <Card product={item} actionHandler={this.handleClick} actionType='remove' key={item.id} />;
    });

    return (
      <div className="container">
      <div className="cart">
        <h5>Your cart</h5>
        <ul className="collection">{productList}</ul>
      </div>
      <div className="total">
        <b>Total:</b> {this.props.cartTotal}
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.addedToCart,
    cartTotal: state.cartTotal
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: id => {
      dispatch(removeFromCart(id));
    }
  };
};

// "connect" our cart to the store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);
