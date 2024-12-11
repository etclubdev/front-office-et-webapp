import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { horizontalLogo } from '../../assets/images/logos';

export const Navbar = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  useEffect(() => {
    // Handle scroll event
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling Down
        setScrollingDown(true);
      } else {
        // Scrolling Up
        setScrollingDown(false);
      }
      // Update last scroll position
      setLastScrollY(window.scrollY);
    };

    // Add event listener on mount
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
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
                    <i className="fa-solid fa-angle-down nav-icon" style={{ color: '#ffffff' }}></i>
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
                    <i className="fa-solid fa-angle-down nav-icon" style={{ color: '#ffffff' }}></i>
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
