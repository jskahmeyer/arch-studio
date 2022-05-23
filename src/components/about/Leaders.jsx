import LeaderCard from '../about/LeaderCard'
import jake from '../../assets/images/about/desktop/avatar-jake.jpg'
import thompson from '../../assets/images/about/desktop/avatar-thompson.jpg'
import jackson from '../../assets/images/about/desktop/avatar-jackson.jpg'
import maria from '../../assets/images/about/desktop/avatar-maria.jpg'

const Leaders = () => (
    <div className="leaders">
        <h2 className="leaders-heading">The Leaders</h2>
        <div className="leader-card-container">
            <LeaderCard 
                image={jake}
                name="Jake Richards"
                title="Chief Architect"
            />
            <LeaderCard 
                image={thompson}
                name="Thompson Smith"
                title="Head of Finance"
            />
            <LeaderCard 
                image={jackson}
                name="Jackson Rourke"
                title="Lead Designer"
            />
            <LeaderCard 
                image={maria}
                name="Maria Simpson"
                title="Senior Architect"
            />
        </div>
    </div>
)

export default Leaders