import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import './CSS/Help.css'

const Help = () => {
  return (
    <div className="help-container">

      <h1>Help & Support</h1>

      <p>
        Need help? Find answers to common questions below.
      </p>

      <div className="help-box">

        <div className="help-card">
          <h2>How to Report a Problem?</h2>
          <p>
            Go to the Report Issue page and fill in the problem
            details like title, category, location and description.
          </p>
        </div>

        <div className="help-card">
          <h2>How to Track a Problem?</h2>
          <p>
            Go to the Track Problem page and enter your reported
            problem to check its current status.
          </p>
        </div>

        <div className="help-card">
          <h2>How to Update a Problem?</h2>
          <p>
            Open the Update Problem page, write your update message
            and click on Update Problem.
          </p>
        </div>

        <div className="help-card">
          <h2>Still Need Help?</h2>
          <p>
            If you are facing any issue, contact the campus
            administration for further assistance.
          </p>
        </div>

      </div>
      
      <div className="help-footer">

        <h2>Need More Help?</h2>

        <p>Contact our campus support team.</p>

        <div className="contact-buttons">

          <a href="tel:+919876543210" className="call-btn">
            📞 Call Support
          </a>

          <a href="https://wa.me." className="whatsapp-btn" target="_blank" rel="noreferrer">
              <FaWhatsapp />
          
          </a>

        </div>

      </div>


    </div>
  )
}

export default Help