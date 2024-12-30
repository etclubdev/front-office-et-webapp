import React, { useState, useEffect } from 'react';
import { horizontalLogo } from '../../assets/images/logos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';  
import './Navbar.css';

export const Navbar = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="nav-section">
      <div className={`nav ${scrollingDown ? 'nav-hidden' : ''}`}>
        <img src={horizontalLogo} alt="ET Club" className="nav-logo" />
        <div className="nav-menu">
            <a className="nav-item" href='/'>
                <p className="nav-item-content">Về ET</p>
            </a>
            <a className="nav-item">
                    <p className="nav-item-content">Hoạt động</p>
            </a>
            <a className="nav-item">
                <p className="nav-item-content">ET News</p>
            </a>
            <a className="nav-item">
                <p className="nav-item-content">Tìm kiếm CTV</p>
            </a>
            <div className="searchbar-group">
            <div className="search-container">
              <div className="master-input-text">
                <input
                  className="input-placeholder"
                  type="text"
                  placeholder="Tìm kiếm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
