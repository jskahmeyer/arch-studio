import { Link } from 'react-router-dom'
import useViewport from '../../hooks/useViewport'
import portfolioItems from '../../data/portfolio-items.json'

const desktopImages = import.meta.glob('../../assets/images/portfolio/desktop/*.jpg', { eager: true, import: 'default' })
const tabletImages = import.meta.glob('../../assets/images/portfolio/tablet/*.jpg', { eager: true, import: 'default' })
const mobileImages = import.meta.glob('../../assets/images/portfolio/mobile/*.jpg', { eager: true, import: 'default' })

const FeaturedPortfolioCards = () => {
    const { width } = useViewport()

    const featuredPortfolioItems = portfolioItems.filter((item) => item.featured === true).sort((a, b) => (a.number > b.number ? 1 : -1))

    return (
        <>
            {
                featuredPortfolioItems.map(({ image, number, projectName }) => (
                    <Link to="/portfolio" className="portfolio-card">
                        <img className="image"
                            src={
                                width > 768
                                    ? desktopImages[`../../assets/images/portfolio/desktop/${image}`]
                                    : width > 500
                                        ? tabletImages[`../../assets/images/portfolio/tablet/${image}`]
                                        : mobileImages[`../../assets/images/portfolio/mobile/${image}`]
                            }
                            alt="Thumbnail link to portfolio page"
                        />
                        <h1 className="number">{number}</h1>
                        <div className="text-container">
                            <h5 className="heading">{projectName}</h5>
                            <small className="subheading">View All Projects</small>
                        </div>
                    </Link>
                ))
            }
        </>
    )
}

export default FeaturedPortfolioCards