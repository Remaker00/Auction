import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar-auction">
      <div className="logo">Logo</div>
      <div className="nav-links">
        <a href="/zygler-arospace">Home</a>
        <a href="/zygler-arospace/auction">Auction</a>
        <a href="/support">Support</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
    </nav>
  );
};

export default Navbar;
