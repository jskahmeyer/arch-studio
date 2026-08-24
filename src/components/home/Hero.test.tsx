import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'jest-axe'
import Hero from './Hero'
import heroSlides from '../../data/hero-slides.json'

const renderHero = () =>
    render(
        <MemoryRouter>
            <Hero />
        </MemoryRouter>,
    )

describe('Hero', () => {
    it('renders the first slide heading by default', () => {
        renderHero()

        expect(screen.getByRole('heading', { name: heroSlides[0].title })).toBeInTheDocument()
    })

    it('has no accessibility violations', async () => {
        const { container } = renderHero()

        expect(await axe(container)).toHaveNoViolations()
    })

    it('switches slides when a pagination button is clicked', async () => {
        const user = userEvent.setup()
        renderHero()

        await user.click(screen.getByRole('button', { name: String(heroSlides[2].id) }))

        expect(screen.getByRole('heading', { name: heroSlides[2].title })).toBeInTheDocument()
    })

    it('auto-advances to the next slide after the timeout elapses', () => {
        vi.useFakeTimers({ shouldAdvanceTime: true })
        renderHero()

        act(() => {
            vi.advanceTimersByTime(6000)
        })

        expect(screen.getByRole('heading', { name: heroSlides[1].title })).toBeInTheDocument()
        vi.useRealTimers()
    })

    it('stops auto-advancing once paused, and resumes when unpaused', async () => {
        vi.useFakeTimers({ shouldAdvanceTime: true })
        const user = userEvent.setup()
        renderHero()

        await user.click(screen.getByRole('button', { name: 'Pause slideshow' }))

        act(() => {
            vi.advanceTimersByTime(10000)
        })
        expect(screen.getByRole('heading', { name: heroSlides[0].title })).toBeInTheDocument()

        await user.click(screen.getByRole('button', { name: 'Play slideshow' }))

        act(() => {
            vi.advanceTimersByTime(6000)
        })
        expect(screen.getByRole('heading', { name: heroSlides[1].title })).toBeInTheDocument()

        vi.useRealTimers()
    })

    it('starts paused when the user prefers reduced motion', () => {
        const matchMediaSpy = vi.spyOn(window, 'matchMedia').mockImplementation((query) => ({
            matches: query === '(prefers-reduced-motion: reduce)',
            media: query,
            onchange: null,
            addListener: () => {},
            removeListener: () => {},
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => false,
        }))

        renderHero()

        expect(screen.getByRole('button', { name: 'Play slideshow' })).toBeInTheDocument()
        matchMediaSpy.mockRestore()
    })
})
