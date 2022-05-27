import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className="newsletter mx-auto py-5 text-center">
  <h3>SUBSCRIBE OUR NEWSLETTER</h3>
  <p>Lorem ipsum dolor sit amet consectetur explicabo.</p>
  <div className="input-group mb-3">
    <input type="text" className="form-control" placeholder="Enter your Email" />
    <button className="btn btn-color" type="submit">SUBSCRIBE</button>
  </div>
</div>

  )
}

export default Newsletter