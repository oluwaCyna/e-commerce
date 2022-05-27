import React from 'react'
import './headerBar2.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBasketShopping } from '@fortawesome/free-solid-svg-icons'

const HeaderBar2 = () => {
  return (
    <div className="container mx-auto my-5 header-part-2">
  <div><img src="https://www.freelogodesign.org/assets/img/home/icones/free.svg" alt='logo'/></div>
  <div className="input-group">
    <input type="text" className="form-control" placeholder="Search" />
    <button className="btn btn-color" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
  </div>
  <div id="part3" className="text-dark">
    <a href="/cart"><FontAwesomeIcon icon={faBasketShopping}/>
      <p>SHOPPING CART</p>
      <button type="button" id="cart-number-tag" className="btn" disabled /></a>
  </div>
</div>

  )
}

export default HeaderBar2