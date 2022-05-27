import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import "./Contact.css"

const Contact = () => {
  return (
      <div className="bg-dark py-5">
  <div className="container p-0 bg-white text-dark">
    <div className="text-center">
      <h4 className="pt-5">We are waiting to assist you.</h4>
      <p className="pb-5">Lorem ipsum dolor sit, amet consectetur adipisicing </p>
    </div>
    <div className="contact-part-2" />
    <div className="p-5 contact-part-3">
      <div className="form-wrapper">
        <form className="form" id="form" name="form">
          <div className="row mb-3">
            <div className="col p-2">
              <input type="text" className="form-control" placeholder="Your Name" name="name" />
            </div>
            <div className="col p-2">
              <input type="text" className="form-control" placeholder="Email" name="email" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col p-2">
              <input type="text" className="form-control" placeholder="Subject" name="subject" />
            </div>
            <div className="col p-2">
              <input type="company" className="form-control" placeholder="Company" name="company" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <textarea className="form-control comment" id="comment" name="text" placeholder="Message" defaultValue={""} />
            </div>
          </div>
          <button type="button" className="btn btn-outline">Send</button>
        </form>
      </div>
      <div className="details">
        <h4>DailyShop</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, nam in doloremque ad placeat beatae eligendi quaera  ad placeat beatae eligendi quaera</p>
        <div className="details-flex">
          <FontAwesomeIcon icon={faHouseChimney} />
          <p>Huntsville, AL 35813, USA</p>
        </div>
        <div className="details-flex">
          <FontAwesomeIcon icon={faPhone} />
          <p>+23481 3349 9101</p>
        </div>
        <div className="details-flex">
          <FontAwesomeIcon icon={faEnvelope} />
          <p>Email: support@dailyshop.com</p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Contact