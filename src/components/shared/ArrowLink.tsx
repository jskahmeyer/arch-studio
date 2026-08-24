import { Link } from 'react-router-dom'
import arrow from '../../assets/images/icons/icon-arrow.svg'

interface ArrowLinkProps {
    to: string
    label: string
    arrowAlt?: string
    className?: string
    arrowClassName?: string
}

const ArrowLink = ({ to, label, arrowAlt, className, arrowClassName }: ArrowLinkProps) => (
    <Link to={to} className={['button', className].filter(Boolean).join(' ')}>
        <span>{label}</span>
        {arrowAlt && <img className={arrowClassName} src={arrow} alt={arrowAlt} />}
    </Link>
)

export default ArrowLink
