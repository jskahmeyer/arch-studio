import Page from '../components/shared/Page'
import ArrowLink from '../components/shared/ArrowLink'

const NotFound = () => (
    <Page label="Page Not Found" className="not-found">
        <h1 className="not-found-heading">404</h1>
        <p className="not-found-text">We couldn't find the page you were looking for.</p>
        <ArrowLink to="/" label="Back to home" className="not-found-link" />
    </Page>
)

export default NotFound
