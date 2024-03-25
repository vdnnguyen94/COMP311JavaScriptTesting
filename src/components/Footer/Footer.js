import React from 'react';

const Footer = () => {
  const footerStyle = {
    color: '#333333', 
    textAlign: 'center',
    marginTop: '20px',
    padding: '20px 0',
    borderTop: '1px solid #ccc', 
    borderBottom: '1px solid #ccc', 
  };

  const nameStyle = {
    color: '#007BFF', 
  };

  return (
    <footer style={footerStyle}>
      Presented by <span style={nameStyle}>Van Nguyen</span> and <span style={nameStyle}>Alessandra Primatesta</span>
    </footer>
  );
}

export default Footer;
