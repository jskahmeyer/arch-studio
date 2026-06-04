import { NavLink } from 'react-router-dom'

const PageLinks = () => {
    const pageNavigationLinks = ['portfolio', 'about', 'contact']

    return (
        <ul className="page-links-container">
            {pageNavigationLinks.map((link, i) => (
                <li className="page-link" key={i}>
                    <NavLink to={`/${link}`}>{i === 1 ? link + ` Us` : link}</NavLink>
                </li>
            ))}
        </ul>
    )
}

export default PageLinks