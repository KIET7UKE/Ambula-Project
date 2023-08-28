import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useState } from 'react';
import '../App.css'
function Navbar() {
  const [activeLink, setActiveLink] = useState('');
  return (
    <div className='h-[80px] px-10 flex flex-row justify-between items-center'>
        <Link to='/' className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} onClick={() => setActiveLink('home')}><img src={logo} alt="" /></Link>
        <div className='flex flex-row gap-10 text-lg font-semibold'>
            <Link to='/' className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} onClick={() => setActiveLink('home')}>Home</Link>
            <Link to='/about' className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} onClick={() => setActiveLink('about')}>About</Link>
            <Link to='/contact' className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`} onClick={() => setActiveLink('contact')}>Contact</Link>
            <Link to='/todo-app' className={`nav-link ${activeLink === 'todo-app' ? 'active' : ''}`} onClick={() => setActiveLink('todo-app')}>Todo-App</Link>
            <Link to='/shopping-cart' className={`nav-link ${activeLink === 'shopping-cart' ? 'active' : ''}`} onClick={() => setActiveLink('shopping-cart')}>Shopping Cart</Link>
            <Link to='/photos-api' className={`nav-link ${activeLink === 'photos-api' ? 'active' : ''}`} onClick={() => setActiveLink('photos-api')}>Photos API</Link>
        </div>
    </div>
  )
}

export default Navbar