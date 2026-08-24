import { Link } from 'react-router-dom'
import arrow from '../../assets/images/icons/icon-arrow.svg'

interface ArrowLinkProps {
    to: string
    label: string
    showArrow?: boolean
    className?: string
    arrowClassName?: string
}

// The arrow icon is decorative: it's always paired with the visible `label`
// text, which already gives the link a complete accessible name. Giving the
// icon its own descriptive alt text would just get concatenated onto that
// name (e.g. "See Our PortfolioArrow to redirect to portfolio"), which is
// redundant and reads worse to screen readers than the icon being silent.
const ArrowLink = ({ to, label, showArrow = true, className, arrowClassName }: ArrowLinkProps) => (
    <Link to={to} className={['button', className].filter(Boolean).join(' ')}>
        <span>{label}</span>
        {showArrow && <img className={arrowClassName} src={arrow} alt="" />}
    </Link>
)

export default ArrowLink
