import { Link } from 'react-router-dom'

const NotFound = () => (
    <div className="page not-found">
        <div className="page-directory">
            <span>Page Not Found</span>
        </div>
        <h1 className="not-found-heading">404</h1>
        <p className="not-found-text">We couldn't find the page you were looking for.</p>
        <Link to="/" className="not-found-link button">
            <span>Back to home</span>
        </Link>
    </div>
)

export default NotFound
