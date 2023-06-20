import useViewport from '../../hooks/useViewport'

const ContactHero = () => {
    const { width } = useViewport()
    let image = 'image-hero.jpg'

    return (
        <div className="contact-hero">
            <div className="image-container">
                <img 
                    className="image" 
                    src={
                        width > 540
                            ? require(`../../assets/images/contact/desktop/` + image)
                            : require(`../../assets/images/contact/mobile/` + image)
                    } 
                    alt="" 
                />
                <div className="void" />
                <hr className="line" />
            </div>
            <div className="text-container">
                <h1 className="heading">Contact</h1>
                <hr className="line" />
                <h2 className="subheading">Tell us about your project</h2>
                <p>
                    We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!
                </p>
            </div>
        </div>
    )
}

export default ContactHero