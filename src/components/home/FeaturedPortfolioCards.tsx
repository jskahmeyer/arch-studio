import { Link } from 'react-router-dom'
import useViewport from '../../hooks/useViewport'
import portfolioItems from '../../data/portfolio-items.json'
import { resolveAsset } from '../../utils/resolveAsset'

const desktopImages = import.meta.glob<string>('../../assets/images/portfolio/desktop/*.webp', {
    eager: true,
    import: 'default',
})
const tabletImages = import.meta.glob<string>('../../assets/images/portfolio/tablet/*.webp', {
    eager: true,
    import: 'default',
})
const mobileImages = import.meta.glob<string>('../../assets/images/portfolio/mobile/*.webp', {
    eager: true,
    import: 'default',
})

const FeaturedPortfolioCards = () => {
    const { width } = useViewport()

    const featuredPortfolioItems = portfolioItems
        .filter((item) => item.featured)
        .sort((a, b) => ((a.number ?? 0) > (b.number ?? 0) ? 1 : -1))

    return (
        <>
            {featuredPortfolioItems.map(({ image, number, projectName }) => (
                <Link to="/portfolio" className="portfolio-card" key={projectName}>
                    <img
                        className="image"
                        loading="lazy"
                        src={
                            width > 768
                                ? resolveAsset(
                                      desktopImages,
                                      `../../assets/images/portfolio/desktop/${image}`,
                                  )
                                : width > 500
                                  ? resolveAsset(
                                        tabletImages,
                                        `../../assets/images/portfolio/tablet/${image}`,
                                    )
                                  : resolveAsset(
                                        mobileImages,
                                        `../../assets/images/portfolio/mobile/${image}`,
                                    )
                        }
                        alt={projectName}
                    />
                    <span className="number" aria-hidden="true">
                        {number}
                    </span>
                    <div className="text-container">
                        <h3 className="heading">{projectName}</h3>
                        <small className="subheading">View All Projects</small>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default FeaturedPortfolioCards
