import React from 'react';

const MainContent = () => {
  const mainContentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    maxWidth: '1400px',
    padding: '20px'
  };

  const leftStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    paddingLeft: '50px'
  };

  const rightStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingRight: '50px'
  };

  const navStyle = {
    listStyle: 'none',
    marginBottom: '50px'
  };

  const navItemStyle = {
    fontSize: '4vw',
    marginBottom: '15px'
  };

  const socialStyle = {
    listStyle: 'none'
  };

  const socialItemStyle = {
    fontSize: '1.2vw',
    marginTop: '5px'
  };

  return (
    <main style={mainContentStyle}>
      <div style={leftStyle}>
        <h1 style={{ fontFamily: 'Bellota Text, sans-serif', fontSize: '115.15px', fontWeight: 400, lineHeight: '144.85px', letterSpacing: '0.14em', textAlign: 'left' }}>DESIGN</h1>
        <h1 style={{ fontFamily: 'Bellota Text, sans-serif', fontSize: '115.15px', fontWeight: 400, lineHeight: '144.85px', letterSpacing: '0.14em', textAlign: 'left' }}>PR</h1>
        <h1 style={{ fontFamily: 'Bellota Text, sans-serif', fontSize: '115.15px', fontWeight: 400, lineHeight: '144.85px', letterSpacing: '0.14em', textAlign: 'left' }}>SOCIAL</h1>
      </div>
      <div style={rightStyle}>
        <ul style={navStyle}>
          <li style={navItemStyle}>About</li>
          <li style={navItemStyle}>Jobs</li>
          <li style={navItemStyle}>Contact</li>
          <li style={navItemStyle}>Stories</li>
        </ul>
        <ul style={socialStyle}>
          <li style={socialItemStyle}>Facebook</li>
          <li style={socialItemStyle}>Instagram</li>
          <li style={socialItemStyle}>LinkedIn</li>
        </ul>
      </div>
    </main>
  );
};

export default MainContent;
