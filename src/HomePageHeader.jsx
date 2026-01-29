// --- HomePageHeader.jsx ---
import React from 'react';
import { List, GeoAltFill, ChevronRight } from 'react-bootstrap-icons';

const HomePageHeader = () => {
  return (
    <div>
      {/* ================== Header Navbar ================== */}
      <nav className="navbar navbar-expand-md navbar-light bg-white fixed-top shadow-sm py-3">
        <div className="container-fluid px-md-5">
          
          {/* Main Flex Container */}
          <div className="navbar-equal-container">

            {/* 1. LEFT SIDE (Flex = 1) */}
            <div className="navbar-side-content navbar-side-left">
              {/* Hamburger Icon */}
              {/* <button className="btn btn-link text-dark p-0 me-3 text-decoration-none">
                <List size={30} />
              </button> */}
              
              {/* Empty placeholder to ensure this div takes up space */}
              <div style={{ width: '1px' }}></div> 
            </div>

            {/* 2. CENTER: Brand Logo */}
            {/* Logo sits naturally in the middle because sides are equal width */}
            <a className="navbar-brand d-flex align-items-center fw-bold fs-3 text-dark m-0" href="/">
              <span className="me-2 text-success d-flex align-items-center">
                <svg width="32" height="32" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="8" fill="#84cc76" />
                  <path d="M8 4a4 4 0 0 1 4 4v4H4V8a4 4 0 0 1 4-4z" fill="#fff" />
                </svg>
              </span>
              KeyWe
            </a>

            {/* 3. RIGHT SIDE (Flex = 1) */}
            <div className="navbar-side-content navbar-side-right">
              {/* Nav Links */}
              <ul className="navbar-nav flex-row d-none d-md-flex me-4 gap-4">
                <li className="nav-item">
                  <a className="nav-link text-secondary fw-normal" href="#buy">Buy</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-secondary fw-normal" href="#sell">Sell</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-secondary fw-normal" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-secondary fw-normal" href="#help">Help</a>
                </li>
              </ul>

              {/* Login Button */}
              <button className="btn btn-custom-green rounded-pill text-white fw-bold shadow-sm">
                Login
              </button>
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default HomePageHeader;