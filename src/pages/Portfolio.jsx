import { useState } from 'react'
import PortfolioCard from '../components/portfolio/PortfolioCard'
import data from '../portfolios.json'

const Portfolio = () => {
    const [portfolios] = useState(data)

    return (
        <div className="page">
            <div className="page-directory">
                <span>Portfolio</span>
            </div>
            <div className="portfolios-grid">
                {portfolios.map((portfolio) => (
                    <PortfolioCard 
                        link={portfolio}
                        key={portfolio.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio