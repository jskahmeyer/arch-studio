interface LeaderCardProps {
    name: string
    title: string
    image: string
}

const LeaderCard = ({ name, title, image }: LeaderCardProps) => (
    <div className="leader-card">
        <div className="image-container">
            <img className="image" src={image} alt={name} />
            <div className="image-overlay">
                <a href="#" aria-label="View on LinkedIn" onClick={e => e.preventDefault()}>
                    <div className="white" />
                    <i className="fab fa-linkedin" aria-hidden="true" />
                </a>
                <a href="#" aria-label="View on Twitter" onClick={e => e.preventDefault()}>
                    <i className="fab fa-twitter" aria-hidden="true" />
                </a>
            </div>
        </div>
        <div className="text-container">
            <h5 className="name">{name}</h5>
            <small className="title">{title}</small>
        </div>
    </div>
)

export default LeaderCard
