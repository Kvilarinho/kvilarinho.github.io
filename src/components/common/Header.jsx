import { useState } from 'react';
import avatarLogo from '../../assets/avatar-logo.png';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="site-header">
            <a href="#top" className="btn header-logo">
                <img src={avatarLogo} alt="Logo" className="avatar-logo" style={{ height: '28px' }} />
                <h4>Kátia Vilarinho</h4>
            </a>

            <nav className="nav-bar">
                <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
                aria-label="Toggle navigation menu" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <a href="#about" onClick={closeMenu}>About</a>
                    <a href="#experience" onClick={closeMenu}>Work Experience</a>
                    <a href="#education" onClick={closeMenu}>Education</a>
                    <a href="#projects" onClick={closeMenu}>Projects</a>
                    <a href="#skills" onClick={closeMenu}>Skills</a>
                    <a href="#contacts" onClick={closeMenu}>Contacts</a>
                </div>
            </nav>
        </header>
    );
}
