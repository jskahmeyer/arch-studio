import { Outlet, ScrollRestoration } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import './App.scss'

const App = () => (
    <div className="App">
        <a href="#main-content" className="skip-link">
            Skip to content
        </a>
        <Navbar />
        <main id="main-content">
            <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
    </div>
)

export default App
