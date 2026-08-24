import { render, screen } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import PortfolioCard from './PortfolioCard'

const item = { projectName: '228B Tower', image: 'image-228b.webp', date: 'April 2015' }

const setViewportWidth = (width: number) => {
    window.innerWidth = width
    window.dispatchEvent(new Event('resize'))
}

const originalWidth = window.innerWidth

describe('PortfolioCard', () => {
    afterEach(() => {
        setViewportWidth(originalWidth)
    })

    it('resolves the desktop image at desktop widths', () => {
        setViewportWidth(1200)
        render(<PortfolioCard item={item} />)

        expect(screen.getByRole('img', { name: item.projectName })).toHaveAttribute(
            'src',
            expect.stringContaining('/portfolio/desktop/image-228b'),
        )
    })

    it('resolves the tablet image at tablet widths', () => {
        setViewportWidth(700)
        render(<PortfolioCard item={item} />)

        expect(screen.getByRole('img', { name: item.projectName })).toHaveAttribute(
            'src',
            expect.stringContaining('/portfolio/tablet/image-228b'),
        )
    })

    it('resolves the mobile image at mobile widths', () => {
        setViewportWidth(375)
        render(<PortfolioCard item={item} />)

        expect(screen.getByRole('img', { name: item.projectName })).toHaveAttribute(
            'src',
            expect.stringContaining('/portfolio/mobile/image-228b'),
        )
    })
})
