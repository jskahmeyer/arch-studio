import { Link } from 'react-router-dom'
import smallTeamBackground from '../../assets/images/home/desktop/image-small-team.jpg'
import arrow from '../../assets/images/icons/icon-arrow.svg'

const SmallTeam = () => (
    <div className="small-team">
        <div className="backdrop">
            <img src={smallTeamBackground} alt="" />
        </div>
        <div className="text-container">
            <h2 className="heading">Small team, <br /> big ideas</h2>
            <Link to="/about" className="button">
                <span>About Us</span>
                <img className="arrow" src={arrow} alt="Arrow to redirect to about page" />
            </Link>
        </div>
    </div>
)

export default SmallTeam