import { useState, useEffect } from 'react'
import ArrowLink from '../shared/ArrowLink'
import heroSlides from '../../data/hero-slides.json'
import useViewport from '../../hooks/useViewport'
import { resolveAsset } from '../../utils/resolveAsset'

const desktopImages = import.meta.glob<string>('../../assets/images/home/desktop/*.webp', {
    eager: true,
    import: 'default',
})
const tabletImages = import.meta.glob<string>('../../assets/images/home/tablet/*.webp', {
    eager: true,
    import: 'default',
})
const mobileImages = import.meta.glob<string>('../../assets/images/home/mobile/*.webp', {
    eager: true,
    import: 'default',
})

const lastIndex = heroSlides.length - 1

const Hero = () => {
    const [current, setCurrent] = useState(0)
    const [isPaused, setIsPaused] = useState(
        () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    )
    const { width } = useViewport()

    // `current` is always kept within [0, lastIndex] by the state transitions below.
    const slide = heroSlides[current]!

    const getImage = (filename: string) => {
        if (width <= 540)
            return resolveAsset(mobileImages, `../../assets/images/home/mobile/${filename}`)
        if (width <= 985)
            return resolveAsset(tabletImages, `../../assets/images/home/tablet/${filename}`)
        return resolveAsset(desktopImages, `../../assets/images/home/desktop/${filename}`)
    }

    useEffect(() => {
        if (isPaused) return

        const timeoutID = setTimeout(() => {
            setCurrent((prev) => (prev < lastIndex ? prev + 1 : 0))
        }, 6000)

        return () => clearTimeout(timeoutID)
    }, [current, isPaused])

    return (
        <div className="homepage-hero">
            <div className="backdrop">
                <img
                    key={current}
                    className="active-timer"
                    src={getImage(slide.picture)}
                    alt={`${slide.title} portfolio preview`}
                />
            </div>
            <div className="text-container">
                <h2 className="heading">{slide.title}</h2>
                <p className="subheading">{slide.subheading}</p>
                <ArrowLink to="/portfolio" label="See Our Portfolio" />
            </div>
            <div className="pagination">
                {heroSlides.map((s, i) => (
                    <button
                        className={`pagination-button ${i === current ? 'active' : ''}`}
                        onClick={() => setCurrent(i)}
                        key={i}
                    >
                        {s.id}
                    </button>
                ))}
                <button
                    className="pagination-button pagination-toggle"
                    aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
                    aria-pressed={isPaused}
                    onClick={() => setIsPaused((prev) => !prev)}
                >
                    {isPaused ? (
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    ) : (
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <rect x="6" y="4" width="4" height="16" />
                            <rect x="14" y="4" width="4" height="16" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    )
}

export default Hero
