import React from 'react';
import PropTypes from 'prop-types';
//CSS
import Navbar from 'react-bootstrap/Navbar';

/* 

*/

const Header = props => {
  const { branding } = props;
  return (
    <Navbar bg="light" expand="lg" className="mb-3" fixed="top">
      <Navbar.Brand>{branding}</Navbar.Brand>
    </Navbar>
  );
};

export default Header;
