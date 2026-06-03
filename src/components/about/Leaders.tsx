import LeaderCard from '../about/LeaderCard'
import leaders from '../../data/leaders.json'

const avatarImages = import.meta.glob<string>('../../assets/images/about/desktop/*.jpg', { eager: true, import: 'default' })

const Leaders = () => (
    <div className="leaders">
        <h2 className="heading">The Leaders</h2>
        <div className="card-container">
            {leaders.map(({ id, name, title, image }) => (
                <LeaderCard
                    key={id}
                    name={name}
                    title={title}
                    image={avatarImages[`../../assets/images/about/desktop/${image}`]}
                />
            ))}
        </div>
    </div>
)

export default Leaders
