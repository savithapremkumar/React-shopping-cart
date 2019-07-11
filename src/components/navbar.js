import React from "react";
import { Link } from "react-router-dom";
import Cart from "../containers/cartIcon";
const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <ul className="right">
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/cart">
              <Cart />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
