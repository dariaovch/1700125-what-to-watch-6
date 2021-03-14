import React from 'react';
import Logo from 'src/components/Layout/Logo/Logo';

function Footer() {
  return (
    <footer className="page-footer">
      <Logo theme="light" />

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
