import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ResizeContextProvider from './context/resize';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import './App.scss';

const App = () => (
  <Router>
    {/* <ResizeContextProvider> */}
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    {/* </ResizeContextProvider> */}
  </Router>   
);

export default App;
