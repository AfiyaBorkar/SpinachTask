import React from 'react'
import './mystyle.css'

export default function Footer() {
  return (
    <>
    
    {/* Footer */}
  <footer className="footer-container">
    <ul className="social-links">
      <li className="link">
        <a
          href="https://in.linkedin.com/company/spinachstudios"
          target="_blank"
        >
          LinkedIn
        </a>
      </li>
      <li className="link">
        <a href="https://www.instagram.com/spinachstudios" target="_blank">
          Instagram
        </a>
      </li>
      <li className="link">
        <a href="https://dribbble.com/Spinach-Studios" target="_blank">
          Dribbble
        </a>
      </li>
      <li className="link pointer-events-none">
        <a href="#" target="_blank">
          Behance
        </a>
      </li>
      <li className="link pointer-events-none">
        <a href="#" target="_blank">
          Twitter
        </a>
      </li>
    </ul>
    <div className="footer-content">
      <div className="company-details">
        <img src="https://www.spinachexperience.design/assets/header/Full_logo.svg" alt="SED Logo" />
        <div className="address">
          7th floor, Corporate Park ||,
          <br /> Sion-Trombay Road, Chembur,
          <br /> Mumbai - 400071, India.
        </div>
        <div className="location">
          <a href="https://maps.app.goo.gl/JnUGdCY2vHmY1gme9" target="_blank">
            View on Google maps
          </a>
        </div>
      </div>
      <ul className="important-pages">
        <li className="page pointer-events-none">
          <a href="#">The Company</a>
        </li>
        <li className="page pointer-events-none">
          <a href="#">Our Services</a>
        </li>
        <li className="page pointer-events-none">
          <a href="#">Our Expertise</a>
        </li>
        <li className="page pointer-events-none">
          <a href="#">Client Work</a>
        </li>
        <li className="page pointer-events-none">
          <a href="#">Careers</a>
        </li>
        <li className="page pointer-events-none">
          <a href="#">Privacy Policy</a>
        </li>
        <li className="page pointer-events-none">
          <a href="#">Terms &amp; Conditions</a>
        </li>
      </ul>
      <div className="enquiries">
        <div className="business-enquiries">
          <div className="title">Business enquiries:</div>
          <a className="email" href="mailto:eshani@spinachexperience.design">
            eshani@spinachexperience.design
          </a>
          <a className="phone" href="tel:+919821297209">
            +91 9821297209
          </a>
        </div>
        <div className="career-enquiries">
          <div className="title">Career enquiries:</div>
          <a className="email" href="mailto:fedora@spinachexperience.design">
            fedora@spinachexperience.design
          </a>
          <a className="phone" href="tel:+918097260369">
            +91 8097260369
          </a>
        </div>
      </div>
    </div>
  </footer>
  <footer className="mobile-footer-container">
    <img
      className="company-logo"
      src="https://www.spinachexperience.design/assets/header/Full_logo.svg"
      alt="SED Logo"
    />
    <ul className="important-pages">
      <li className="page pointer-events-none">
        <a href="#">The Company</a>
      </li>
      <li className="page pointer-events-none">
        <a href="#">Our Services</a>
      </li>
      <li className="page pointer-events-none">
        <a href="#">Our Expertise</a>
      </li>
      <li className="page pointer-events-none">
        <a href="#">Client Work</a>
      </li>
      <li className="page pointer-events-none">
        <a href="#">Careers</a>
      </li>
      <li className="page pointer-events-none">
        <a href="#">Privacy Policy</a>
      </li>
      <li className="page pointer-events-none">
        <a href="#">Terms &amp; Conditions</a>
      </li>
    </ul>
    <ul className="social-links">
      <li className="link">
        <a
          href="https://in.linkedin.com/company/spinachstudios"
          target="_blank"
        >
          LinkedIn
        </a>
      </li>
      <li className="link">
        <a href="https://www.instagram.com/spinachstudios" target="_blank">
          Instagram
        </a>
      </li>
      <li className="link">
        <a href="https://dribbble.com/Spinach-Studios" target="_blank">
          Dribbble
        </a>
      </li>
      <li className="link pointer-events-none">
        <a href="#" target="_blank">
          Behance
        </a>
      </li>
      <li className="link pointer-events-none">
        <a href="#" target="_blank">
          Twitter
        </a>
      </li>
    </ul>
    <div className="enquiries">
      <div className="business-enquiries">
        <div className="title">Business enquiries:</div>
        <a className="email" href="mailto:eshani@spinachexperience.design">
          eshani@spinachexperience.design
        </a>
        <a className="phone" href="tel:+919821297209">
          +91 9821297209
        </a>
      </div>
      <div className="career-enquiries">
        <div className="title">Career enquiries:</div>
        <a className="email" href="mailto:fedora@spinachexperience.design">
          fedora@spinachexperience.design
        </a>
        <a className="phone" href="tel:+918097260369">
          +91 8097260369
        </a>
      </div>
    </div>
    <div className="company-details">
      <div className="address-container">
        <p className="label">Address:</p>
        <div className="address">
          7th floor, Corporate Park ||,
          <br /> Sion-Trombay Road, Chembur,
          <br /> Mumbai - 400071, India.
        </div>
      </div>
      <div className="location">
        <a href="https://maps.app.goo.gl/JnUGdCY2vHmY1gme9" target="_blank">
          View on Google maps
        </a>
      </div>
    </div>
  </footer>
  <div className="copyright">© 2024 Spinach Experience Design</div>
    </>
  )
}
