import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px;
  margin-bottom: 20px;

  .logo {
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 10px;
  }

  .menu-icon {
    font-size: 20px;
    cursor: pointer;
  }

  .menu {
    display: flex;
    flex-direction: column;
    top: 60px;
    right: 20px;
    background-color: #444;
    color: #fff;
    padding: 10px;
    margin-top: 10px;
    border-radius: 3px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease;
  }

  .menu-item {
    margin: 15px;
    cursor: pointer;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false);
    // Perform any desired actions on menu item click
  };

  return (
    <HeaderWrapper isOpen={isOpen}>
      <div className="logo">Swiss Army Knife like Website</div>
      <div className="menu-icon" onClick={handleMenuClick}>
        ☰
      </div>
      {isOpen && (
        <div className="menu">
          <div className="menu-item" onClick={handleMenuItemClick}>
          <Link to="/">Domů</Link>
          </div>
          <div className="menu-item" onClick={handleMenuItemClick}>
          <Link to="/calculators">Kalkulačky</Link>
          </div>
          <div className="menu-item" onClick={handleMenuItemClick}>
            Dny a Týdny
          </div>
          <div className="menu-item" onClick={handleMenuItemClick}>
            Něco
          </div>
        </div>
      )}
    </HeaderWrapper>
  );
};

export default Header;
