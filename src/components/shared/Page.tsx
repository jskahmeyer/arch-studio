import type { ReactNode } from 'react'

interface PageProps {
    label: string
    className?: string
    children: ReactNode
}

const Page = ({ label, className, children }: PageProps) => (
    <div className={['page', className].filter(Boolean).join(' ')}>
        <div className="page-directory">
            <span>{label}</span>
        </div>
        {children}
    </div>
)

export default Page
