import Page from '../components/shared/Page'
import PortfolioCard from '../components/portfolio/PortfolioCard'
import portfolioItems from '../data/portfolio-items.json'

const Portfolio = () => {
    return (
        <Page label="Portfolio">
            <h1 className="sr-only">Portfolio</h1>
            <div className="portfolio-cards-grid">
                {portfolioItems.map((item) => (
                    <PortfolioCard item={item} key={item.id} />
                ))}
            </div>
        </Page>
    )
}

export default Portfolio
