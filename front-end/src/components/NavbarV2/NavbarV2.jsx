/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { horizontalLogo } from '../../assets/images/logos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons';  
import './NavbarV2.css';

export const NavbarV2 = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); 

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
    <div className="nav-v2-section">
      <div className={`nav-v2 ${scrollingDown ? 'nav-v2-hidden' : ''}`}>
        <img src={horizontalLogo} alt="ET Club" className="nav-v2-logo" />
        <div className="nav-v2-menu">
            <a className="nav-v2-item" href='/'>
                <p className="nav-v2-item-content">Trang chủ</p>
            </a>
            <a className="nav-v2-item dropbtn">
                <div className="nav-v2-item-dropbtn">
                    <p className="nav-v2-item-content">Giới thiệu</p>
                    <FontAwesomeIcon icon={faAngleDown} className="nav-v2-icon" /> 
                </div>
                <div class="dropdown-content">
                    <a href="#"><p>Về ET Club</p></a>
                    <a href="#"><p>ET News</p></a>
                    <a href="#"><p>Liên hệ</p></a>
                </div>
            </a>
            <a className="nav-v2-item dropbtn">
                <div className="nav-v2-item-dropbtn">
                    <p className="nav-v2-item-content">Hoạt động</p>
                    <FontAwesomeIcon icon={faAngleDown} className="nav-v2-icon" /> 
                </div>
                <div class="dropdown-content">
                    <a href="#"><p>Talkshow/Workshop</p></a>
                    <a href="#"><p>Cuộc thi</p></a>
                    <a href="#"><p>Hoạt động nội bộ</p></a>
                </div>
            </a>
            <a className="nav-v2-item">
                <p className="nav-v2-item-content">ET News</p>
            </a>
            <a className="nav-v2-item">
                <p className="nav-v2-item-content">Tìm kiếm CTV</p>
            </a>

            <div className="nav-v2-input">
              <FontAwesomeIcon icon={faSearch} className='nav-v2-search-icon' color='#B8B8B8'/> 
              <input placeholder='Tìm kiếm...' type="text" />
            </div>
        </div>
      </div>
    </div>
  );
};