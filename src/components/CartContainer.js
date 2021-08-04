import React from "react";
import CartItem from "./CartItem";
import { CLEAR_CART } from "../actions";
import { connect } from "react-redux";

const CartContainer = ({ cart = [], total, clear_cart }) => {
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => clear_cart()}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

function mapStateToProps(store) {
  const { cart, total } = store;
  return { cart, total };
}

function mapDispatchToProps(dispatch) {
  return { clear_cart: () => dispatch({ type: CLEAR_CART }) };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
