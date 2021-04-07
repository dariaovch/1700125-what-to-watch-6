import React from 'react';
import Logo from 'src/components/page-layout/wtw-logo/wtw-logo';

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
