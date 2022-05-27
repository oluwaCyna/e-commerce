import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const HeaderBar1 = () => {
  return (
    <div className="container mx-auto d-flex justify-content-between border-bottom header-part-1">
  <div>
    <div className="btn-group">
      <button type="button" className="btn dropdown-toggle border-end" data-bs-toggle="dropdown">English</button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Tablet</a>
        <a className="dropdown-item" href="#">Smartphone</a>
      </div>
    </div>
    <div className="btn-group">
      <button type="button" className="btn dropdown-toggle border-end" data-bs-toggle="dropdown">USD $</button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">NGR #</a>
        <a className="dropdown-item" href="#">GPB &#163</a>
      </div>
    </div>
    <button type="button" className="btn border-end">0813 349 9101</button>
  </div>
  <div>
    <button type="button" className="btn border-end">My Account</button>
    <button type="button" className="btn border-end">Wishlist</button>
    <a href="/cart"><button type="button" className="btn border-end">My Cart</button></a>
    <button type="button" className="btn border-end">Checkout</button>
    <button type="button" className="btn border-end">Login</button>
  </div>
</div>

  )
}
export default HeaderBar1
