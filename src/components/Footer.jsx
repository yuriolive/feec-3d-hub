import React from 'react';

// import LogoUnicamp from '../assets/logo_unicamp.png';

const Footer = () => (
  <footer className="mb-5 mt-5">
    <div className="container">
      <span>2017 FEEC 3D Hub</span>
      <span className="float-right">
        <small>
          Desenvolvido por { ' ' }
          <a href="//yuriolive.com" rel="noopener noreferrer" target="_blank">
            Yuri Olive
          </a>
        </small>
      </span>
    </div>
  </footer>
);

// <picture>
//   <source srcSet={LogoUnicamp} type="image/webp" />
//   <source srcSet={LogoUnicamp} type="image/jpeg" />
//   <img src={LogoUnicamp} alt="Alt Text!" />
// </picture>

export default Footer;
