import PortfolioCard from '../components/portfolio/PortfolioCard'
import portfolioItems from '../data/portfolio-items.json'

const Portfolio = () => {
    return (
        <div className="page">
            <div className="page-directory">
                <span>Portfolio</span>
            </div>
            <div className="portfolios-grid">
                {portfolioItems.map((item) => (
                    <PortfolioCard 
                        item={item}
                        key={item.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio