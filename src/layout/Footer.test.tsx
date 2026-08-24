import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Footer from './Footer'

describe('Footer', () => {
    it('shows the portfolio CTA on other pages', () => {
        render(
            <MemoryRouter initialEntries={['/about']}>
                <Footer />
            </MemoryRouter>,
        )

        expect(screen.getByRole('link', { name: 'See Our Portfolio' })).toBeInTheDocument()
    })

    it('hides the portfolio CTA when already on the portfolio page', () => {
        render(
            <MemoryRouter initialEntries={['/portfolio']}>
                <Footer />
            </MemoryRouter>,
        )

        expect(screen.queryByRole('link', { name: 'See Our Portfolio' })).not.toBeInTheDocument()
    })
})
