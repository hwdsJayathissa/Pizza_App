
/*import React, {useState} from 'react'
import Logo from '../assets/pizzaLogo.png';
import {Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';


function Navbar() {
    const[openLinks,setOpenLinks] =useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);

    }
    

  return (
    <div className="navbar">
        <div className="leftSide" id={openLinks ? 'open': 'close'}>
            <img src={Logo} alt='logo' />
            <div className="hiddenLinks">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            </div>
        </div>
        <div className="rightSide">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <button onClick={toggleNavbar}>
            <ReorderIcon />
            </button>
            
        </div>
    </div>
  )
}
export default Navbar;*/

import React, { useState } from 'react';
import Logo from '../assets/pizzaLogo.png';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      {/* Left Side */}
      <div className="leftSide" id={openLinks ? 'open' : 'close'}>
        <img src={Logo} alt="logo" />
        {/* Hidden Links shown on small screen */}
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      {/* Right Side */}
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {/* Button for toggling the hidden links */}
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;

