import React, { useState, useEffect } from 'react';
import { horizontalLogo } from '../../assets/images/logos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollingDown(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isNotHomepage = location.pathname !== '/';

  return (
    <div className={`nav-section ${(scrollingDown || isNotHomepage) ? 'scrolled' : ''}`}>
      <Link to="/">
        <img src={horizontalLogo} alt="ET Club" className="nav-logo" />
      </Link>
      <div className="nav-menu">
        <div className="nav-item dropbtn">
          <div className="nav-item-dropbtn">
            <p className="nav-item-content">Về ET Club</p>
          </div>
          <div className="dropdown-content">
            <Link id="1st" to="/introduction"><p>Giới thiệu</p></Link>
            <Link id="2nd" to="/hr-structure"><p>Cơ cấu tổ chức</p></Link>
            <Link id="3rd" to="/faqs"><p>FAQs</p></Link>
          </div>
        </div>
        <Link to='/activities' className="nav-item">
          <p className="nav-item-content">Hoạt động</p>
        </Link>
        <div className="nav-item dropbtn">
          <div className="nav-item-dropbtn">
            <p className="nav-item-content">ET Zone</p>
          </div>
          <div className="dropdown-content">
            <Link id="1st" to="/et-news"><p>ET News</p></Link>
            <Link id="2nd" to="/et-blog"><p>ET Blog</p></Link>
          </div>
        </div>
        <Link to='/collaborator-seeking' className="nav-item">
          <p className="nav-item-content">Tìm kiếm CTV</p>
        </Link>
        <Link to='/search' className="searchbar-group">
          <div className="search-container">
            <div className="search-icon"><FontAwesomeIcon icon={faSearch} /></div>
            <div className="input-placeholder">Tìm kiếm</div>
          </div>
        </Link>
      </div>
    </div>
  );
};