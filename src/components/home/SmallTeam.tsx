import smallTeamBackground from '../../assets/images/home/desktop/image-small-team.jpg'
import ArrowLink from '../shared/ArrowLink'

const SmallTeam = () => (
    <div className="small-team">
        <div className="backdrop">
            <img src={smallTeamBackground} alt="" loading="lazy" />
        </div>
        <div className="text-container">
            <h2 className="heading">
                Small team, <br /> big ideas
            </h2>
            <ArrowLink
                to="/about"
                label="About Us"
                arrowAlt="Arrow to redirect to about page"
                arrowClassName="arrow"
            />
        </div>
    </div>
)

export default SmallTeam
