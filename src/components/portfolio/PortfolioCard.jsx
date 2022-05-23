import { Link } from 'react-router-dom'
import useViewport from '../../hooks/useViewport'

const PortfolioCard = ({ link: { picture, projectDate, projectName } }) => {
    const { width } = useViewport()

    return (
        <Link to="#" className="portfolio-thumbnail">
            <img 
                className="portfolio-thumbnail-background" 
                src={
                    width >= 805 
                        ? require(`../../assets/images/portfolio/desktop/` + picture)
                            : width >= 500
                                ? require(`../../assets/images/portfolio/tablet/` + picture)
                                : require(`../../assets/images/portfolio/mobile/` + picture)
                } 
                alt={`Link to ${projectName} project`}
            />
            <div className="portfolio-thumbnail-textbox">
                <h4 className="portfolio-thumbnail-textbox-name">{projectName}</h4>
                <small className="portfolio-thumbnail-textbox-date">{projectDate}</small>
            </div>
        </Link>
    )
}

export default PortfolioCard