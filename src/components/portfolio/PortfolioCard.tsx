import useViewport from '../../hooks/useViewport'
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

interface PortfolioCardProps {
    item: {
        projectName: string
        image: string
        date: string
    }
}

const PortfolioCard = ({ item: { projectName, image, date } }: PortfolioCardProps) => {
    const { width } = useViewport()

    return (
        <div className="image-container">
            <img
                className="background-image"
                src={
                    width >= 805
                        ? resolveAsset(
                              desktopImages,
                              `../../assets/images/portfolio/desktop/${image}`,
                          )
                        : width >= 500
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
                loading="lazy"
            />
            <div className="text-container">
                <h2>{projectName}</h2>
                <small>{date}</small>
            </div>
        </div>
    )
}

export default PortfolioCard
