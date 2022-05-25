import useViewport from '../../hooks/useViewport'
import arrow from '../../assets/images/icons/icon-arrow-dark.svg'
import LocationsMap from '../contact/LocationsMap'


const ContactDetails = () => {
    return (
        <div className="contact-details">
            <hr className="contact-details-line" />
            <div className="contact-details-info">
                <h2 className="contact-details-info-heading">Contact Details</h2>
                <div className="contact-details-info-locations">
                    <div className="contact-details-info-locations-main">
                        <address>
                            <h5 className="office-heading">Main Office</h5>
                            <ul className="office-info">
                                <li className="office-info-email">
                                    <span>Mail:</span>
                                    <span>archone@mail.com</span>
                                </li>
                                <li className="office-info-address">
                                    <span>Address:</span>
                                    <span>1892 Chenoweth Drive TN</span>
                                </li>
                                <li className="office-info-phone">
                                    <span>Phone:</span>
                                    <span>123-456-3451</span>
                                </li>
                            </ul>
                        </address>
                        <a className="contact-details-info-locations-redirect" href="#map">
                            <span>View on Map</span>
                            <img className="redirect-arrow" src={arrow} alt="" />
                        </a>
                    </div>
                    <div className="contact-details-info-locations-second">
                        <address>
                            <h5 className="office-heading">Office II</h5>
                            <ul className="office-info">
                                <li className="office-info-email">
                                    <span>Mail:</span>
                                    <span>archtwo@mail.com</span>
                                </li>
                                <li className="office-info-address">
                                    <span>Address:</span>
                                    <span>3399 Wines Lane TX</span>
                                </li>
                                <li className="office-info-phone">
                                    <span>Phone:</span>
                                    <span>832-123-4321</span>
                                </li>
                            </ul>
                        </address>
                        <a className="contact-details-info-locations-maplink" href="#map">
                            <span>View on Map</span>
                            <img className="maplink-arrow" src={arrow} alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="contact-details-map-container" id="map">
            <LocationsMap/>
            </div>
        </div>
    )
}

export default ContactDetails