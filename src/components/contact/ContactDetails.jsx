import arrow from '../../assets/images/icons/icon-arrow-dark.svg'
import LocationsMap from '../contact/LocationsMap'


const ContactDetails = () => {
    return (
        <div className="contact-details">
            <hr className="line" />
            <div className="info-container">
                <h2 className="heading">Contact Details</h2>
                <div className="locations">
                    <div className="main-office">
                        <address>
                            <h5>Main Office</h5>
                            <ul>
                                <li>
                                    <span>Mail:</span>
                                    <a href="mailto:archone@mail.com">archone@mail.com</a>
                                </li>
                                <li>
                                    <span>Address:</span>
                                    <span>1892 Chenoweth Drive TN</span>
                                </li>
                                <li>
                                    <span>Phone:</span>
                                    <a href="tel:1234563451">123-456-3451</a>
                                </li>
                            </ul>
                        </address>
                        <a href="#map">
                            <span>View on Map</span>
                            <img src={arrow} alt="" />
                        </a>
                    </div>
                    <div className="office-ii">
                        <address>
                            <h5>Office II</h5>
                            <ul>
                                <li>
                                    <span>Mail:</span>
                                    <a href="mailto:archtwo@mail.com">archtwo@mail.com</a>
                                </li>
                                <li>
                                    <span>Address:</span>
                                    <span>3399 Wines Lane TX</span>
                                </li>
                                <li>
                                    <span>Phone:</span>
                                    <a href="tel:8321234321">832-123-4321</a>
                                </li>
                            </ul>
                        </address>
                        <a href="#map">
                            <span>View on Map</span>
                            <img src={arrow} alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="map-container" id="map">
                <LocationsMap/>
            </div>
        </div>
    )
}

export default ContactDetails