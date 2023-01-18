import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='navbar navbar-expand navbar-dark bg-dark'>
    <a href='/' className='navbar-brand'>
      Tiny Blog
    </a>
    <div className='navbar-nav mr-auto'>
      <li className='nav-item'>
        <Link to={'/'} className='nav-link'>
          <i className="fa-solid fa-house-chimney-window">  </i> Home
        </Link>
      </li>
      <li className='nav-item'>
        <Link to={'/search'} className='nav-link'>
          <i className="fa-solid fa-magnifying-glass">  </i>Search
        </Link>
      </li>
    </div>
  </nav>
  )
};

export default Header;