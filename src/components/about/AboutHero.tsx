import useViewport from '../../hooks/useViewport'

const desktopImages = import.meta.glob<string>('../../assets/images/about/desktop/*.webp', {
    eager: true,
    import: 'default',
})
const mobileImages = import.meta.glob<string>('../../assets/images/about/mobile/*.webp', {
    eager: true,
    import: 'default',
})

const AboutHero = () => {
    const { width } = useViewport()
    const image = 'image-hero.webp'

    return (
        <div className="about-hero">
            <div className="image-container">
                <img
                    className="image"
                    src={
                        width > 540
                            ? desktopImages[`../../assets/images/about/desktop/${image}`]
                            : mobileImages[`../../assets/images/about/mobile/${image}`]
                    }
                    alt="Overhead view of hands typing on a laptop showing architectural blueprints, surrounded by printed floor plans"
                />
                <div className="void" />
                <hr className="about-hero-image-container-line" />
            </div>
            <div className="text-container">
                <h1 className="heading">About</h1>
                <hr className="line" />
                <h2 className="subheading">Your team of professionals</h2>
                <p className="content">
                    Our small team of world-class professionals will work with you every step of the
                    way. Strong relationships are at the core of everything we do. This extends to
                    the relationship our projects have with their surroundings.
                </p>
            </div>
        </div>
    )
}

export default AboutHero
