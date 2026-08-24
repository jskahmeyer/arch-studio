import FeaturedPortfolioCards from './FeaturedPortfolioCards'
import ArrowLink from '../shared/ArrowLink'

const Featured = () => (
    <div className="featured-section">
        <h2 className="heading">Featured</h2>
        <ArrowLink to="/portfolio" label="See all" className="portfolio-link" />
        <div className="portfolio-cards-container">
            <FeaturedPortfolioCards />
        </div>
    </div>
)

export default Featured
