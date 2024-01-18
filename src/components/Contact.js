import React from "react";

function Contact() {
  return (
    <div>
      <div
        className="contact-section d-flex justify-content-center align-items-center flex-column"
        id="contact"
      >
        <h2>Get In Touch</h2>
        <div className="contact d-flex justify-content-center align-items-center flex-column">
          <div className="socials d-flex justify-content-center align-items-center flex-row">
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
          <h3>OR</h3>
          <div className="email-option">
            <button>
              pnarain82@gmail.com
              <a href="mailto:pnarain82@gmail.com">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
