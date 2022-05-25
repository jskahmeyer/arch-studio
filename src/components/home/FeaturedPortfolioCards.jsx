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
                    <Link to="/portfolio" className="featured-section-portfolio">
                        <img className="featured-section-portfolio-image"
                            src={
                                width > 768
                                    ? require(`../../assets/images/portfolio/desktop/` + image)
                                    : width > 500
                                        ? require(`../../assets/images/portfolio/tablet/` + image)
                                        : require(`../../assets/images/portfolio/mobile/` + image)
                            }
                            alt="Thumbnail link to portfolio page"
                        />
                        <h1 className="featured-section-portfolio-number">{number}</h1>
                        <div className="featured-section-portfolio-textbox">
                            <h5 className="featured-section-portfolio-textbox-heading">{projectName}</h5>
                            <small className="featured-section-portfolio-textbox-subheading">View All Projects</small>
                        </div>
                    </Link>
                ))
            }
        </>
    )
}

export default FeaturedPortfolioCards