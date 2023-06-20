import { Link } from 'react-router-dom'
import useViewport from '../../hooks/useViewport'
import portfolioItems from '../../data/portfolio-items.json'

const FeaturedPortfolioCards = () => {
    const { width } = useViewport

    const featuredPortfolioItems = portfolioItems.filter((item) => item.featured === true).sort((a, b) => (a.number > b.number ? 1 : -1))

    return (
        <>
            {
                featuredPortfolioItems.map(({ image, number, projectName }) => (
                    <Link to="/portfolio" className="portfolio-card">
                        <img className="image"
                            src={
                                width > 768
                                    ? require(`../../assets/images/portfolio/desktop/` + image)
                                    : width > 500
                                        ? require(`../../assets/images/portfolio/tablet/` + image)
                                        : require(`../../assets/images/portfolio/mobile/` + image)
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