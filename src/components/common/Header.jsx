import { useState } from 'react';
import avatarLogo from '../../assets/avatar-logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="site-header">
            <Link to="/" className="btn header-logo">
                <img src={avatarLogo} alt="Logo" className="avatar-logo" style={{ height: '28px' }} />
                <h4>Kátia Vilarinho</h4>
            </Link>

            <nav className="nav-bar">
                <button className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    aria-label="Toggle navigation menu"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/about" onClick={closeMenu}>About</Link>
                    <Link to="/experience" onClick={closeMenu}>Work Experience</Link>
                    <Link to="/education" onClick={closeMenu}>Education</Link>
                    <Link to="/projects" onClick={closeMenu}>Projects</Link>
                    <Link to="/skills" onClick={closeMenu}>Skills</Link>
                    <Link to="/contacts" onClick={closeMenu}>Contacts</Link>
                </div>
            </nav>
        </header>
    );
}
