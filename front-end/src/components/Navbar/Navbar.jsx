import React, { useState, useEffect } from 'react';
import { horizontalLogo } from '../../assets/images/logos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';  
import './Navbar.css';

export const Navbar = () => {
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollingDown(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="nav-section">
      <div className={`nav-section ${scrollingDown ? 'scrolled' : ''}`}>
        <img src={horizontalLogo} alt="ET Club" className="nav-logo" />
        <div className="nav-menu">
            {/* <a className="nav-item" href='/'>
                <p className="nav-item-content">Về ET Club</p>
            </a>
            <a className="nav-item">
                    <p className="nav-item-content">Hoạt động</p>
            </a> */}
            <a className="nav-item dropbtn">
                <div className="nav-item-dropbtn">
                    <p className="nav-item-content">Về ET Club</p>
                </div>
                <div class="dropdown-content">
                    <a href="#"><p>Giới thiệu</p></a>
                    <a href="#"><p>Cơ cấu tổ chức</p></a>
                    <a href="#"><p>FAQs</p></a>
                </div>
            </a>
            <a className="nav-item dropbtn">
                <div className="nav-item-dropbtn">
                    <p className="nav-item-content">Hoạt động</p>
                </div>
                <div class="dropdown-content">
                    <a href="#"><p>Hoạt động đang diễn ra</p></a>
                    <a href="#"><p>Hoạt động đã diễn ra</p></a>
                    <a href="#"><p>Hoạt động nội bộ</p></a>
                </div>
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
