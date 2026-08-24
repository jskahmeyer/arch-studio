import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import PageLinks from '../components/shared/PageLinks'
import ArrowLink from '../components/shared/ArrowLink'
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
            {location.pathname !== '/portfolio' && (
                <ArrowLink
                    to="/portfolio"
                    label="See Our Portfolio"
                    arrowAlt="Arrow to redirect to portfolio"
                    className="footer-button"
                    arrowClassName="footer-button-arrow"
                />
            )}
        </div>
    )
}

export default Footer
