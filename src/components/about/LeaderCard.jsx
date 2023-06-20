const LeaderCard = ({ name, title, image }) => (
    <div className="leader-card">
        <div className="image-container">
            <img className="image" src={image} alt={name} />
            <div className="image-overlay">
                <a href="#">
                    <div className="white" />
                    <i className="fab fa-linkedin" aria-label="View this leader on LinkedIn" aria-hidden="true" />
                </a>
                <a href="#">
                    <i className="fab fa-twitter" aria-label="View this leader on Twitter" aria-hidden="true" />
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