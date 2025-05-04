import React, { useState, useEffect } from 'react';
import { horizontalLogo } from '../../assets/images/logos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

export const Navbar = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    const handleScroll = () => {
      setScrollingDown(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={`nav-section ${scrollingDown ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-logo-container">
        <img src={horizontalLogo} alt="ET Club" className="nav-logo" />
      </Link>

      <div className={`hamburger ${menuOpen ? 'show' : ''}`} onClick={toggleMenu}>
        <div id="hamburger-top"></div>
        <div id="hamburger-middle"></div>
        <div id="hamburger-bottom"></div>
      </div>

      {isMobile ?
        <>
          <CSSTransition
            in={menuOpen}
            timeout={300}
            classNames="fade-menu"
            unmountOnExit
          >
            <NavbarMenu
              isMobile={isMobile}
              menuOpen={menuOpen}
            />
          </CSSTransition>
        </> :
        <>
          <NavbarMenu
            isMobile={isMobile}
            menuOpen={menuOpen}
          />
        </>
      }
    </div>
  );
};

const NavbarMenu = ({ isMobile, menuOpen }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownClick = (name) => {
    setActiveDropdown(prev => (prev === name ? null : name));
  };
  return (
    <div className={`nav-menu ${menuOpen ? 'show' : ''}`}>
      <a
        className="nav-item dropbtn"
        onClick={() => isMobile && handleDropdownClick('about')}
      >
        <div className={`nav-item-dropbtn ${isMobile && activeDropdown === 'about' ? 'show' : ''}`}>
          <p className="nav-item-content">Về ET Club</p>
        </div>
        <div
          className={`dropdown-content ${isMobile && activeDropdown === 'about' ? 'show' : ''}`}
        >
          <Link id="1st" to="/introduction"><p>Giới thiệu</p></Link>
          <Link id="2nd" to="/hr-structure"><p>Cơ cấu tổ chức</p></Link>
          <Link id="3rd" to="/faqs"><p>FAQs</p></Link>
        </div>
      </a>
      <Link to='/activities' className="nav-item">
        <p className="nav-item-content">Hoạt động</p>
      </Link>
      <a
        className="nav-item dropbtn"
        onClick={() => isMobile && handleDropdownClick('etzone')}
      >
        <div className={`nav-item-dropbtn ${isMobile && activeDropdown === 'etzone' ? 'show' : ''}`}>
          <p className="nav-item-content">ET Zone</p>
        </div>
        <div
          className={`dropdown-content ${isMobile && activeDropdown === 'etzone' ? 'show' : ''}`}
        >
          <Link id="1st" to="/et-news"><p>ET News</p></Link>
          <Link id="2nd" to="/et-blog"><p>ET Blog</p></Link>
        </div>
      </a>
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
  )
}