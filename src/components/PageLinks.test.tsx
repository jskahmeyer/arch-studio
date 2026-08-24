import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import PageLinks from './PageLinks'

describe('PageLinks', () => {
    it('renders a link to each page with the expected label and destination', () => {
        render(
            <MemoryRouter>
                <PageLinks />
            </MemoryRouter>
        )

        expect(screen.getByRole('link', { name: 'portfolio' })).toHaveAttribute('href', '/portfolio')
        expect(screen.getByRole('link', { name: 'about Us' })).toHaveAttribute('href', '/about')
        expect(screen.getByRole('link', { name: 'contact' })).toHaveAttribute('href', '/contact')
    })

    it('marks the link matching the current route as current', () => {
        render(
            <MemoryRouter initialEntries={['/about']}>
                <PageLinks />
            </MemoryRouter>
        )

        expect(screen.getByRole('link', { name: 'about Us' })).toHaveAttribute('aria-current', 'page')
    })
})
