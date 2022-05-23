import useViewport from '../../hooks/useViewport'

const ContactHero = () => {
    const { width } = useViewport()
    let image = 'image-hero.jpg'

    return (
        <div className="contact-hero">
            <div className="contact-hero-image-container">
                <img 
                    className="contact-hero-image-container-image" 
                    src={
                        width > 540
                            ? require(`../../assets/images/contact/desktop/` + image)
                            : require(`../../assets/images/contact/mobile/` + image)
                    } 
                    alt="" 
                />
                <div className="contact-hero-image-container-void" />
                <hr className="contact-hero-image-container-line" />
            </div>
            <div className="contact-hero-textbox">
                <h1 className="contact-hero-textbox-heading">Contact</h1>
                <hr className="contact-hero-textbox-line" />
                <h2 className="contact-hero-textbox-subheading">Tell us about your project</h2>
                <p className="contact-hero-textbox-main-content">
                    We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!
                </p>
            </div>
        </div>
    )
}

export default ContactHero