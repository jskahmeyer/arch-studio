import { Link } from 'react-router-dom'

const PageLinks = () => {
    const pageNavigationLinks = ['portfolio', 'about', 'contact']
    
    return (
        <ul className="page-links-container">
            {pageNavigationLinks.map((link, i) => (
                <li className="page-link" key={i}>
                    <Link to={`/${link}`}>{i === 1 ? link + ` Us` : link}</Link>
                </li>
            ))}
        </ul>
    )
}

export default PageLinks