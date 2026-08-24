import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PageLinks from '../components/shared/PageLinks'
import logo from '../assets/images/archLogo.svg'
import hamburgerIcon from '../assets/images/icons/icon-hamburger.svg'
import closeIcon from '../assets/images/icons/icon-close.svg'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()
    const [prevPathname, setPrevPathname] = useState(location.pathname)
    const menuToggleRef = useRef<HTMLButtonElement>(null)

    if (location.pathname !== prevPathname) {
        setPrevPathname(location.pathname)
        setMenuOpen(false)
    }

    useEffect(() => {
        const overflow = menuOpen ? 'hidden' : ''
        document.body.style.overflowY = overflow
        document.documentElement.style.overflowY = overflow
        return () => {
            document.body.style.overflowY = ''
            document.documentElement.style.overflowY = ''
        }
    }, [menuOpen])

    useEffect(() => {
        if (!menuOpen) return

        const closeOnEscape = (e: KeyboardEvent) => {
            if (e.key !== 'Escape') return
            setMenuOpen(false)
            menuToggleRef.current?.focus()
        }

        document.addEventListener('keydown', closeOnEscape)
        return () => document.removeEventListener('keydown', closeOnEscape)
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
                ref={menuToggleRef}
                className={`navbar-mobile ${menuOpen ? 'change' : ''}`}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((prev) => !prev)}
            >
                <img className="icon-menu" src={hamburgerIcon} alt="" />
                <img className="icon-close" src={closeIcon} alt="" />
            </button>
            <div className={`navbar-links-mobile ${menuOpen ? 'deployed' : ''}`}>
                <PageLinks />
            </div>
            {/* Decorative click-to-dismiss backdrop; keyboard users can already close the menu with Escape. */}
            <div
                className={`overlay ${menuOpen ? 'active' : ''}`}
                aria-hidden="true"
                onClick={() => setMenuOpen(false)}
            />
        </div>
    )
}

export default Navbar
