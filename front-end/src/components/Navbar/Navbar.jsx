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
                <p className="nav-item-content">Trang chủ</p>
            </a>
            <a className="nav-item dropbtn">
                <div className="nav-item-dropbtn">
                    <p className="nav-item-content">Giới thiệu</p>
                    <FontAwesomeIcon icon={faAngleDown} className="nav-icon" /> 
                </div>
                <div class="dropdown-content">
                    <a href="#"><p>Về ET Club</p></a>
                    <a href="#"><p>ET News</p></a>
                    <a href="#"><p>Liên hệ</p></a>
                </div>
            </a>
            <a className="nav-item dropbtn">
                <div className="nav-item-dropbtn">
                    <p className="nav-item-content">Hoạt động</p>
                    <FontAwesomeIcon icon={faAngleDown} className="nav-icon" /> 
                </div>
                <div class="dropdown-content">
                    <a href="#"><p>Talkshow/Workshop</p></a>
                    <a href="#"><p>Cuộc thi</p></a>
                    <a href="#"><p>Hoạt động nội bộ</p></a>
                </div>
            </a>
            <a className="nav-item">
                <p className="nav-item-content">ET News</p>
            </a>
            <a className="nav-item">
                <p className="nav-item-content">Tìm kiếm CTV</p>
            </a>
        </div>
      </div>
    </div>
  );
};
