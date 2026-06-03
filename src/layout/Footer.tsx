import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import PageLinks from '../components/PageLinks'
import arrow from '../assets/images/icons/icon-arrow.svg'
import footerLogo from '../assets/images/archLogoWhite.svg'

const Footer = () => {
    const location = useLocation()

    return (
    <div className="footer">
        <div className="logo-container">
            <Link to="/">
                <img className="footer-logo" src={footerLogo} alt="Arch company logo" />
            </Link>  
        </div>
        <div className="footer-links">
            <PageLinks />
        </div>
        {location.pathname !== '/portfolio' && 
        <Link to="/portfolio" className="footer-button button">
            <span>See Our Portfolio</span>
            <img className="footer-button-arrow" src={arrow} alt="Arrow to redirect to portfolio" />
        </Link>
}
    </div>
)}

export default Footer;