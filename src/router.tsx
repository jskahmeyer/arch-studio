import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import RouteError from './pages/RouteError'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <RouteError />,
        children: [
            {
                index: true,
                lazy: () => import('./pages/Home').then((m) => ({ Component: m.default })),
            },
            {
                path: 'about',
                lazy: () => import('./pages/About').then((m) => ({ Component: m.default })),
            },
            {
                path: 'portfolio',
                lazy: () => import('./pages/Portfolio').then((m) => ({ Component: m.default })),
            },
            {
                path: 'contact',
                lazy: () => import('./pages/Contact').then((m) => ({ Component: m.default })),
            },
            {
                path: '*',
                lazy: () => import('./pages/NotFound').then((m) => ({ Component: m.default })),
            },
        ],
    },
])

export default router
