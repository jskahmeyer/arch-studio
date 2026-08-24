import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'portfolio', element: <Portfolio /> },
            { path: 'contact', element: <Contact /> },
            { path: '*', element: <NotFound /> },
        ],
    },
])

export default router
