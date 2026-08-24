import Page from '../components/shared/Page'
import Hero from '../components/home/Hero'
import Welcome from '../components/home/Welcome'
import SmallTeam from '../components/home/SmallTeam'
import Featured from '../components/home/Featured'

const Home = () => (
    <Page label="Home">
        <Hero />
        <Welcome />
        <SmallTeam />
        <Featured />
    </Page>
)

export default Home
