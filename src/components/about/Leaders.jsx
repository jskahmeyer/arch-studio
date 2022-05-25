import LeaderCard from '../about/LeaderCard'
import leaders from '../../data/leaders.json'

const Leaders = () => (
    <div className="leaders">
        <h2 className="leaders-heading">The Leaders</h2>
        <div className="leader-card-container">
            {leaders.map(({name, title, image}) => (
                <LeaderCard 
                name={name}
                title={title}
                image={require('../../assets/images/about/desktop/' + image)}
                />
            ))}
        </div>
    </div>
)

export default Leaders