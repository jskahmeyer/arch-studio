const LeaderCard = ({ image, name, title }) => (
    <div className="leader-card">
        <div className="leader-card-image-container">
            <img className="leader-card-image" src={image} alt={`${name}'s company headshot`} />
            <div className="leader-card-image-overlay">
                <a href="#">
                    <div className="white" />
                    <i className="fab fa-linkedin" aria-label="View this leader on LinkedIn" aria-hidden="true" />
                </a>
                <a href="#">
                    <i className="fab fa-twitter" aria-label="View this leader on Twitter" aria-hidden="true" />
                </a>
            </div>
        </div>
        <div className="leader-card-textbox">
            <h5 className="leader-card-textbox-name">{name}</h5>
            <small className="leader-card-textbox-title">{title}</small>
        </div>
    </div>
)

export default LeaderCard