import AboutHero from '../components/about/AboutHero'
import OurHeritage from '../components/about/OurHeritage'
import Leaders from '../components/about/Leaders'

const About = () => (
    <div className="page">
        <div className="page-directory">
            <span>About Us</span>
        </div>
        <AboutHero />
        <OurHeritage />
        <Leaders />
    </div>
)

export default About;