import { Link } from 'react-router-dom'
import useViewport from '../../hooks/useViewport'

const desktopImages = import.meta.glob('../../assets/images/portfolio/desktop/*.jpg', { eager: true, import: 'default' })
const tabletImages = import.meta.glob('../../assets/images/portfolio/tablet/*.jpg', { eager: true, import: 'default' })
const mobileImages = import.meta.glob('../../assets/images/portfolio/mobile/*.jpg', { eager: true, import: 'default' })

const PortfolioCard = ({ item: { projectName, image, date } }) => {
    const { width } = useViewport()

    return (
        <Link to="#" className="image-container">
            <img 
                className="background-image" 
                src={
                    width >= 805
                        ? desktopImages[`../../assets/images/portfolio/desktop/${image}`]
                            : width >= 500
                                ? tabletImages[`../../assets/images/portfolio/tablet/${image}`]
                                : mobileImages[`../../assets/images/portfolio/mobile/${image}`]
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