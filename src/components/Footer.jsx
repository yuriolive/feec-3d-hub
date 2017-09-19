import React from 'react';
// import { StyleSheet, css } from 'aphrodite';

// const styles = StyleSheet.create({
//   footer: {
//     width: '100%',
//     'line-height': 60,
//   },
// });

const Footer = () => (
  <footer className="mb-5 mt-5">
    <div className="container">
      <span>© 2017 FEEC 3D Hub</span>
      <span className="float-right">
        Desenvolvido por { ' ' }
        <a href="//yuriolive.com" rel="noopener noreferrer" target="_blank">
          Yuri Olive
        </a>
      </span>
    </div>
  </footer>
);

export default Footer;
