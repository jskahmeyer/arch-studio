import { useRouteError, isRouteErrorResponse } from 'react-router-dom'
import Page from '../components/shared/Page'
import ArrowLink from '../components/shared/ArrowLink'

const RouteError = () => {
    const error = useRouteError()

    if (import.meta.env.DEV) {
        console.error(error)
    }

    const description = isRouteErrorResponse(error)
        ? `${error.status} ${error.statusText}`
        : 'An unexpected error occurred.'

    return (
        <Page label="Error" className="not-found">
            <h1 className="not-found-heading">Something went wrong</h1>
            <p className="not-found-text">{description}</p>
            <ArrowLink to="/" label="Back to home" className="not-found-link" />
        </Page>
    )
}

export default RouteError
