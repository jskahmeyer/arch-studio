import { Link } from 'react-router-dom'
import smallTeamBackground from '../../assets/images/home/desktop/image-small-team.jpg'
import arrow from '../../assets/images/icons/icon-arrow.svg'

const SmallTeam = () => (
    <div className="small-team-section">
        <div className="small-team-section-backdrop">
            <img src={smallTeamBackground} className="small-team-section-backdrop-image" alt="" />
        </div>
        <div className="small-team-section-textbox">
            <h2 className="small-team-section-textbox-heading">Small team, <br /> big ideas</h2>
            <Link to="/about" className="button small-team-section-button">
                <span>About Us</span>
                <img className="arrow" src={arrow} alt="Arrow to redirect to about page" />
            </Link>
        </div>
    </div>
)

export default SmallTeam