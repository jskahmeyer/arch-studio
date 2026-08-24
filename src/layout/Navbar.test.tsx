import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Navbar from './Navbar'

describe('Navbar', () => {
    it('closes the mobile menu when the route changes', async () => {
        const user = userEvent.setup()
        render(
            <MemoryRouter initialEntries={['/']}>
                <Navbar />
            </MemoryRouter>,
        )

        await user.click(screen.getByRole('button', { name: 'Open menu' }))
        expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

        const [mobilePortfolioLink] = screen.getAllByRole('link', { name: 'portfolio' })
        await user.click(mobilePortfolioLink)

        expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
    })
})
