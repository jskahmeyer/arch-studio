import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import ArrowLink from './ArrowLink'

describe('ArrowLink', () => {
    it('renders the arrow icon by default, marked decorative', () => {
        const { container } = render(
            <MemoryRouter>
                <ArrowLink to="/portfolio" label="See Our Portfolio" />
            </MemoryRouter>,
        )

        const link = screen.getByRole('link', { name: 'See Our Portfolio' })
        expect(link).toHaveAttribute('href', '/portfolio')

        const icon = container.querySelector('img')
        expect(icon).toBeInTheDocument()
        expect(icon).toHaveAttribute('alt', '')
    })

    it('omits the arrow icon when showArrow is false', () => {
        const { container } = render(
            <MemoryRouter>
                <ArrowLink to="/" label="Back to home" showArrow={false} />
            </MemoryRouter>,
        )

        expect(screen.getByRole('link', { name: 'Back to home' })).toBeInTheDocument()
        expect(container.querySelector('img')).not.toBeInTheDocument()
    })

    it('includes the button class plus any extra className', () => {
        render(
            <MemoryRouter>
                <ArrowLink to="/" label="Home" className="footer-button" />
            </MemoryRouter>,
        )

        expect(screen.getByRole('link', { name: 'Home' })).toHaveClass('button', 'footer-button')
    })
})
