import Hero from '../components/home/Hero'
import Welcome from '../components/home/Welcome'
import SmallTeam from '../components/home/SmallTeam'
import Featured from '../components/home/Featured'

const Home = () => (
    <div className="page">
        <div className="page-directory">
            <span>Home</span>
        </div>
        <Hero />
        <Welcome />
        <SmallTeam />
        <Featured />
    </div>
)

export default Home