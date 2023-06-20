import skyscraper from '../../assets/images/home/desktop/image-welcome.jpg'

const Welcome = () => (
    <div className="welcome">
        <h1 className="heading">Welcome</h1>
        <div className="text-container">   
            <div className="content">
                <h2 className="subheading">Welcome to the Arch Studio</h2>
                <p className="welcome-section-main-content-paragraph">
                    We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.
                </p>
                <p className="welcome-section-main-content-paragraph">
                    Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.
                </p>
                <p className="welcome-section-main-content-paragraph">
                    We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.
                </p>
            </div>
        </div>
        <div className="image-container">
            <img src={skyscraper} alt="" />
        </div>
    </div>
)

export default Welcome