import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <nav>
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <img src="/assets/NCD.jpg" alt="Nako's Creative Design logo" className="logo-img" />
        </NavLink>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span><span></span><span></span>
        </button>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li><NavLink to="/" className="nav-link" onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/about" className="nav-link" onClick={closeMenu}>About</NavLink></li>
          <li><NavLink to="/services" className="nav-link" onClick={closeMenu}>Services</NavLink></li>
          <li><NavLink to="/portfolio" className="nav-link" onClick={closeMenu}>Portfolio</NavLink></li>
          <li><NavLink to="/contact" className="nav-link contact-btn" onClick={closeMenu}>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}