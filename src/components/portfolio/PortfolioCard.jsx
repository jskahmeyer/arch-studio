import { Link } from 'react-router-dom'
import useViewport from '../../hooks/useViewport'

const PortfolioCard = ({ item: { projectName, image, date } }) => {
    const { width } = useViewport()

    return (
        <Link to="#" className="image-container">
            <img 
                className="background-image" 
                src={
                    width >= 805 
                        ? require(`../../assets/images/portfolio/desktop/` + image)
                            : width >= 500
                                ? require(`../../assets/images/portfolio/tablet/` + image)
                                : require(`../../assets/images/portfolio/mobile/` + image)
                } 
                alt={`Link to ${projectName} project`}
            />
            <div className="text-container">
                <h4>{projectName}</h4>
                <small>{date}</small>
            </div>
        </Link>
    )
}

export default PortfolioCard