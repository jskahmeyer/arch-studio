import useViewport from '../../hooks/useViewport'

const AboutHero = () => {
    let { width } = useViewport()
    let image = 'image-hero.jpg'

    return (
        <div className="about-hero">
            <div className="about-hero-image-container">
                <img 
                    className="about-hero-image-container-image" 
                    src={
                        width > 540
                            ? require(`../../assets/images/about/desktop/` + image)
                            : require(`../../assets/images/about/mobile/` + image)
                    }  
                    alt="" 
                />
                <div className="about-hero-image-container-void" />
                <hr className="about-hero-image-container-line" />
            </div>
            <div className="about-hero-textbox">
                <h1 className="about-hero-textbox-heading">About</h1>
                <hr className="about-hero-textbox-line" />
                <h2 className="about-hero-textbox-subheading">Your team of professionals</h2>
                <p className="about-hero-textbox-main-content">
                    Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.
                </p>
            </div>
        </div>
    )
}

export default AboutHero