import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PageLinks from '../components/PageLinks'
import logo from '../assets/images/archLogo.svg'
import hamburgerIcon from '../assets/images/icons/icon-hamburger.svg'
import closeIcon from '../assets/images/icons/icon-close.svg'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setMenuOpen(false)
    }, [location.pathname])

    useEffect(() => {
        const overflow = menuOpen ? 'hidden' : ''
        document.body.style.overflowY = overflow
        document.documentElement.style.overflowY = overflow
        return () => {
            document.body.style.overflowY = ''
            document.documentElement.style.overflowY = ''
        }
    }, [menuOpen])

    return (
        <div className="navbar">
            <Link to="/">
                <img className="navbar-logo" src={logo} alt="Arch company logo" />
            </Link>
            <div className="navbar-links">
                <PageLinks />
            </div>
            <button
                className={`navbar-mobile ${menuOpen ? 'change' : ''}`}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(prev => !prev)}
            >
                <img className="icon-menu" src={hamburgerIcon} alt="" />
                <img className="icon-close" src={closeIcon} alt="" />
            </button>
            <div className={`navbar-links-mobile ${menuOpen ? 'deployed' : ''}`}>
                <PageLinks />
            </div>
            <div className={`overlay ${menuOpen ? 'active' : ''}`} />
        </div>
    )
}

export default Navbar
