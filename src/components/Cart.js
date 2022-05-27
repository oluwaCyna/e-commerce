import React from 'react'
import "./Cart.css"

const Cart = () => {
  return (
    <div className="cart-wrapper container">
  <div className="cart container mx-auto">
    <div id="number-div" className="cart-card">
      <h6>Unit</h6>
      <p id="number" />
    </div>
    <div id="prod-name-div" className="cart-card">
      <h6>Product Name</h6>
      <p id="prod-name" />
    </div>
    <div id="price-div" className="cart-card">
      <h6>Price</h6>
      <p id="price" />
    </div>
    <div id="total-price-div" className="cart-card">
      <h6>Total Price</h6>
      <p id="total-price" />
    </div>
  </div>
  <div className="cart-page-button">
    <button type="button" className="btn btn-danger mx-3" onclick="clearCart();">Clear Cart!</button>
    <button type="button" className="btn btn-success" disabled>CheckOut!</button>
  </div>
</div>

  )
}

export default Cart