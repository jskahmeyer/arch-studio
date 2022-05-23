import heritage from '../../assets/images/about/desktop/image-heritage.jpg'

const OurHeritage = () => (
    <div className="heritage">
        <div className="heritage-textbox">
            <hr className="heritage-textbox-line" />
            <h2 className="heritage-textbox-heading">Our Heritage</h2>
            <div className="heritage-textbox-subheading">
                <p>
                    Founded in 2007, we started as a trio of architects. Our complementary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.
                </p>
                <p>
                    Specializing in Urban Design allowed us to focus on creating exceptional structures that 
                    live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs. 
                </p>
                <p> 
                    Our small team of world-class professionals provides input on every project.
                </p>
            </div>
        </div>
        <div className="heritage-image-container">
            <img className="heritage-image" src={heritage} alt="" />   
        </div>
    </div>
)

export default OurHeritage