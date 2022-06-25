import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState(0);
  let itemArray = [];
  let itemNumber = [];

 
    let keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      itemArray.push(JSON.parse(localStorage.getItem(keys[i])));
      itemNumber.push(JSON.parse(localStorage.getItem(keys[i])).quantity);

    }
        useEffect(() => {
          setCart(
            itemArray
          )
              }, [])
  console.log(itemArray);
  console.log(itemNumber);

  let cartValue = 1;

  function add() {
    return cartValue++;
  }
  function sub() {
    return cartValue - 1;
  }
  let cartSubBtn;
  if (count < 2) {
    cartSubBtn = "btn add-to-cart disabled";
  } else {
    cartSubBtn = "btn add-to-cart";
  }
  const [nothing, setNothing] = useState(0);
  return (
    <>
      <div className="container my-5">
        <h2>CARTS</h2>
        <p>
          Please use the + and - button to increase and decrease the quantity of
          each product respectively
        </p>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart &&
              cart.map((items, index) => {
                return (
                  <tr key={index}>
                    <td>{items.title}</td>
                    <td>
                      {/* <div className="d-flex align-items-center justify-content-even">
                        <button
                          type="button"
                          className={cartSubBtn}
                          id="myBtn"
                          onClick={  () => itemNumber[index] - 1 }
                        >
                          -
                        </button>
                       
                        <p  className="w-25 text-center" >{itemNumber[index]}</p>
                        <input type="number" min="1" value="1" className="w-25 text-center"  />
                        <button
                          type="button"
                          className="btn add-to-cart"
                          onClick={
                             () => itemNumber[index] +1}
                        >
                          +
                        </button>
                      </div> */}


{/* <div className="number-input">
  <button onclick={this.parentNode.querySelector('input[type=number]').stepDown()} />
  <input className="quantity" min={0} name="quantity" defaultValue={1} type="number" />
  <button onclick={this.parentNode.querySelector('input[type=number]').stepUp()} className="plus" />
  <button onclick="$(this).prev()[0].stepUp()"></button>
</div> */}

                    </td>
                    <td>${items.price}</td>
                    <td>
                      ${items.quantity * items.price}
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn add-to-cart"
                        onClick={() => {
                          localStorage.removeItem(
                            items.title.replaceAll(" ", "")
                          );
                          setNothing(nothing + 1);
                        }}
                      >
                        x
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cart;
