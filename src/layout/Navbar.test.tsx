import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import { axe } from 'jest-axe'
import Navbar from './Navbar'

describe('Navbar', () => {
    it('has no accessibility violations', async () => {
        const { container } = render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>,
        )

        expect(await axe(container)).toHaveNoViolations()
    })

    it('closes the mobile menu when the route changes', async () => {
        const user = userEvent.setup()
        render(
            <MemoryRouter initialEntries={['/']}>
                <Navbar />
            </MemoryRouter>,
        )

        await user.click(screen.getByRole('button', { name: 'Open menu' }))
        expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

        const mobilePortfolioLink = screen.getAllByRole('link', { name: 'portfolio' })[0]!
        await user.click(mobilePortfolioLink)

        expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
    })

    it('closes the mobile menu when the backdrop is clicked', async () => {
        const user = userEvent.setup()
        const { container } = render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>,
        )

        await user.click(screen.getByRole('button', { name: 'Open menu' }))
        expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

        await user.click(container.querySelector('.overlay')!)

        expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
    })

    it('closes the mobile menu on Escape and returns focus to the toggle button', async () => {
        const user = userEvent.setup()
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>,
        )

        const toggle = screen.getByRole('button', { name: 'Open menu' })
        await user.click(toggle)
        expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

        await user.keyboard('{Escape}')

        const reopenedToggle = screen.getByRole('button', { name: 'Open menu' })
        expect(reopenedToggle).toBeInTheDocument()
        expect(reopenedToggle).toHaveFocus()
    })
})
