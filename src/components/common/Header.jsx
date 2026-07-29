import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import avatarLogo from '../../assets/avatar-logo.png'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    const closeMenu = () => setMenuOpen(false)

    const navLink = (to, label) => (
        <Link
            to={to}
            className="btn"
            onClick={closeMenu}
            style={{
                color: location.pathname === to ? 'var(--accent)' : '',
                borderBottom: location.pathname === to ? '2px solid var(--accent)' : '2px solid transparent',
                paddingBottom: '2px'
            }}
        >
            {label}
        </Link>
    )

    return (
        <header className="site-header">
            <Link to="/" className="btn header-logo">
                <img src={avatarLogo} alt="Logo" className="avatar-logo" style={{ height: '28px' }} />
                <h4>Kátia Vilarinho</h4>
            </Link>

            <nav className="nav-bar">
                <button
                    className={`hamburger ${menuOpen ? 'active' : ''}`}
                    aria-label="Toggle navigation menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    {navLink('/about', 'About')}
                    {navLink('/experience', 'Work Experience')}
                    {navLink('/education', 'Education')}
                    {navLink('/projects', 'Projects')}
                    {navLink('/skills', 'Skills')}
                    {navLink('/contacts', 'Contacts')}
                </div>
            </nav>
        </header>
    )
}