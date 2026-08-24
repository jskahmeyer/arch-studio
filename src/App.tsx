import { Outlet, ScrollRestoration } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import './App.scss'

const App = () => (
  <div className="App">
    <Navbar />
    <Outlet />
    <Footer />
    <ScrollRestoration />
  </div>
)

export default App
