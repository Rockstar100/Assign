import React from 'react';

const Header = () => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1400px',
    padding: '20px'
  };

  const menuIconStyle = {
    width: '25px',
    height: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  const hamburgerStyle = {
    width: '25px',
    height: '3px',
    backgroundColor: 'white'
  };

  return (
    <header style={headerStyle}>
      <div className="logo">
        <img src="assets/Mask.png" alt="Logo" style={{ height: '40px' }} />
      </div>
      <div style={menuIconStyle}>
        <span style={hamburgerStyle}></span>
        <span style={{ ...hamburgerStyle, marginTop: '-8px' }}></span>
        <span style={{ ...hamburgerStyle, marginTop: '8px' }}></span>
      </div>
    </header>
  );
};

export default Header;

