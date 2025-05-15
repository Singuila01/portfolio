import React from 'react';
import MenuMobile from './MenuMobile';
import MenuBureau from './MenuBureau';

const Layout = ({ children }) => {
  return (
    <div style={{ paddingBottom: '60px' }}> {/* Pour ne pas que le contenu passe sous le menu */}
      {children}
      <MenuMobile />
      <MenuBureau />
    </div>
  );
};

export default Layout;