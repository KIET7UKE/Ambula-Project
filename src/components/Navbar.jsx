import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useState } from 'react';
import '../App.css'
import { NavLinks } from '../utils/NavLinks';
function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = link => {
    setActiveLink(link);
  };

  return (
    <div className='h-[80px] px-10 flex flex-row justify-between items-center'>
    <Link to='/' className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} onClick={() => handleLinkClick('home')}>
      <img src={logo} alt="" />
    </Link>
    <div className='flex flex-row gap-10 text-lg font-semibold'>
      {NavLinks.map((navLink, index) => (
        <Link
          key={index}
          to={navLink.to}
          className={`nav-link ${activeLink === navLink.text.toLowerCase() ? 'active' : ''}`}
          onClick={() => handleLinkClick(navLink.text.toLowerCase())}
        >
          {navLink.text}
        </Link>
      ))}
    </div>
  </div>
  )
}

export default Navbar