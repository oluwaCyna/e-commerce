import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faAppleWhole } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faTwitterSquare, faGooglePlusG, faCcPaypal, faCcMastercard, faCcVisa } from '@fortawesome/free-brands-svg-icons'
import './InnerFooter.css'


const InnerFooter = () => {
  return (
    <footer>
  <div className="container p-0 footer">
    <div>
      <h4>Main Menu</h4>
      <p>Lorem ipsum </p>
      <p>Lorem ipsum </p>
      <p>Lorem ipsum </p>
      <p>Lorem ipsum </p>
      <p>Lorem ipsum </p>
    </div>
    <div>
      <h4>Knowledge Base</h4>
      <p>Lorem ipsum </p>
      <p>Lorem ipsum </p>
      <p>Lorem ipsum </p>
      <p>Lorem ipsum </p>
      <p>Lorem ipsum </p>
    </div>
    <div>
      <h4>Useful Links</h4>
      <p>Lorem ipsum </p>
      <p>Lorem ipsum </p>
      <p>Lorem ipsum </p>
      <p>Lorem ipsum </p>
      <p>Lorem ipsum </p>
    </div>
    <div>
      <h4>Contact Us</h4>
      <div className="details-flex">
        <FontAwesomeIcon icon={faPhone} />
        <p>+23481 3349 9101</p>
      </div>
      <div className="details-flex">
        <FontAwesomeIcon icon={faEnvelope} />
        <p>info@gmail.com</p>
      </div>
      <div className="details-flex">
        <FontAwesomeIcon icon={faFacebookSquare} />
        <FontAwesomeIcon icon={faTwitterSquare} />
        <FontAwesomeIcon icon={faGooglePlusG} />
        <FontAwesomeIcon icon={faAppleWhole} />
      </div>
    </div>
  </div>
  <hr style={{color: 'gray'}} />
  <div className="container p-0 footer-note">
    <p>Designed by oluwaCyna</p>
    <div className="payment-icon">
      <FontAwesomeIcon icon={faCcMastercard} />
      <FontAwesomeIcon icon={faCcVisa} />
      <FontAwesomeIcon icon={faCcPaypal} />
    </div>
  </div>
</footer>

  )
}

export default InnerFooter