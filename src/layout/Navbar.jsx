import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import PageLinks from '../components/PageLinks'
import logo from '../assets/images/archLogo.svg'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false),
          mobileNavBtn = useRef(),
          { body } = document;

    useEffect(() => {
        hideMobileNav()
    }, [])

    const mobileNavOpen = () => {
        mobileNavBtn.current.classList.add('change');
        body.style.overflowY = 'hidden';
        body.parentElement.style.overflowY = 'hidden';
    }

    const mobileNavClosed = () => {
        setTimeout(function() {
            mobileNavBtn.current.classList.remove('change')
        }, 850);
        body.style.overflowY = 'visible';
        body.parentElement.style.overflowY = 'visible';
    }

    const hideMobileNav = () => {
        let links = [...document.querySelectorAll('.page-link')].slice(3, 6);

        links.forEach(link => link.addEventListener('click', () => {
            setMenuOpen(false)
            mobileNavClosed()         
        }));
    }

    return (
        <div className="navbar">
            <Link to="/" onClick={() => setMenuOpen(false)}>
                <img className="navbar-logo" src={logo} alt="Arch company logo" />
            </Link>
            <div className="navbar-links">
                <PageLinks />
            </div>
            <a href="#" className="navbar-mobile" ref={mobileNavBtn} aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}>
                <i className="fa fa-bars" aria-hidden="true" onClick={mobileNavOpen} />
                <i className={`fa fa-times ${!menuOpen ? 'spin' : ''}`} aria-hidden="true" onClick={mobileNavClosed}  />
            </a>
            <div className={`navbar-links-mobile ${menuOpen ? 'deployed' : ''}`} onClick={hideMobileNav}>
                <PageLinks />
            </div>
            <div className={`overlay ${menuOpen ? 'active' : ''}`} />
        </div>
    )
}

export default Navbar;