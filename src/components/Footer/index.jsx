import React from 'react';

const Footer = ({ logo }) => {
  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <img id='footer-logo' src={logo.value} alt={logo.description} />
            <div id='footer-copyright'>&copy; 2019 Vancouver</div>
            <ul id='footer-nav'>
              <li>
                <a href='https://vancouver.ca/your-government/terms-of-use.aspx'>
                  Terms of Use
                </a>
              </li>
              <li>
                <a href='https://vancouver.ca/your-government/privacy-policy.aspx'>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className='col-md-6'>
            <ul id='footer-share'>
              <li id="twitter"></li>
              <li id="facebook"></li>
              <li id="linkedin"></li>
            </ul>
            <select
              aria-label='Change language to: '
              className="custom-select custom-select-sm"
            >
              <option value="0">en</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
