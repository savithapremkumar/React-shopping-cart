import React, { Component } from "react";
import Image from "../assets/images/placeholder.png";
import { Link } from "react-router-dom";

class CartItem extends Component {
  render() {
    let cartItem;
    let quantitySection =
      this.props.actionType === "remove" ? (
        <div>
          <p>
            <b>Quantity: {this.props.product.quantity}</b>
          </p>
          {/* <div className="add-remove">
          <Link to="/cart">
            <i
              className="material-icons"
              onClick={() => {
                this.handleAddQuantity(product.id);
              }}
            >
              arrow_drop_up
            </i>
          </Link>
          <Link to="/cart">
            <i
              className="material-icons"
              onClick={() => {
                this.handleSubtractQuantity(product.id);
              }}
            >
              arrow_drop_down
            </i>
          </Link>
        </div> */}
        </div>
      ) : null;
    if (this.props.product) {
      cartItem = (
        <li className="collection-item avatar" key={this.props.product.id}>
          <div className="item">
            <div className="item-img">
              <img src={Image} alt={this.props.product.name} className="" />
            </div>

            <div className="item-desc">
              <span className="title">{this.props.product.name}</span>
              <p>{this.props.product.desc}</p>
              <p>
                <b>Price: {this.props.product.price}$</b>
              </p>
              {quantitySection}
              <button
                className={
                  "waves-effect waves-light btn pink" + this.props.actionType
                }
                onClick={() => {
                  this.props.actionHandler(this.props.product.id);
                }}
              >
                {this.props.actionType}
              </button>
            </div>
          </div>
        </li>
      );
    } else {
      cartItem = null;
    }

    return <React.Fragment>{cartItem}</React.Fragment>;
  }
}

export default CartItem;
