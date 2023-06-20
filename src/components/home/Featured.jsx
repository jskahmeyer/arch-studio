import { Link } from 'react-router-dom'
import FeaturedPortfolioCards from './FeaturedPortfolioCards'
import arrow from '../../assets/images/icons/icon-arrow.svg'

const Featured = () => (
    <div className="featured-section">
        <h2 className="heading">Featured</h2>
        <Link to="/portfolio" className="button portfolio-link">
            <span>See all</span>
            <img src={arrow} alt="Arrow linking to portfolios" />
        </Link>
        <div className="portfolio-cards-container">
            <FeaturedPortfolioCards />
        </div>
    </div>
)

export default Featured