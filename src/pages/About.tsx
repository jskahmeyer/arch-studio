import Page from '../components/shared/Page'
import AboutHero from '../components/about/AboutHero'
import OurHeritage from '../components/about/OurHeritage'
import Leaders from '../components/about/Leaders'

const About = () => (
    <Page label="About Us">
        <AboutHero />
        <OurHeritage />
        <Leaders />
    </Page>
)

export default About
