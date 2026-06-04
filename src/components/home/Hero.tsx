import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import arrow from '../../assets/images/icons/icon-arrow.svg'
import heroSlides from '../../data/hero-slides.json'
import useViewport from '../../hooks/useViewport'

const desktopImages = import.meta.glob<string>('../../assets/images/home/desktop/*.jpg', { eager: true, import: 'default' })
const tabletImages = import.meta.glob<string>('../../assets/images/home/tablet/*.jpg', { eager: true, import: 'default' })
const mobileImages = import.meta.glob<string>('../../assets/images/home/mobile/*.jpg', { eager: true, import: 'default' })

const Hero = () => {
    const [current, setCurrent] = useState(0)
    const slideRef = useRef<HTMLImageElement>(null)
    const { width } = useViewport()

    const getImage = (filename: string) => {
        if (width <= 540) return mobileImages[`../../assets/images/home/mobile/${filename}`]
        if (width <= 985) return tabletImages[`../../assets/images/home/tablet/${filename}`]
        return desktopImages[`../../assets/images/home/desktop/${filename}`]
    }

    const ids = heroSlides.map(i => i.id)
    const backdrops = heroSlides.map(i => i.picture)
    const titles = heroSlides.map(i => i.title)
    const paragraphs = heroSlides.map(i => i.subheading)

    useEffect(() => {
        slideRef.current?.classList.add('active-timer')

        const timeoutID = setTimeout(() => {
            setCurrent(prev => (prev < 3 ? prev + 1 : 0))
            slideRef.current?.classList.remove('active-timer')
            slideRef.current?.classList.remove('active-click')
        }, 6000)

        return () => clearTimeout(timeoutID)
    }, [current])

    const activeClick = () => {
        slideRef.current?.classList.remove('active-timer')
        slideRef.current?.classList.add('active-click')
    }

    return (
        <div className="homepage-hero">
            <div className="backdrop">
                <img
                    src={getImage(backdrops[current])}
                    ref={slideRef}
                    alt={`${titles[current]} portfolio preview`}
                />
            </div>
            <div className="text-container">
                <h2 className="heading">{titles[current]}</h2>
                <p className="subheading">{paragraphs[current]}</p>
                <Link to="/portfolio" className="button">
                    <span>See Our Portfolio</span>
                    <img src={arrow} alt="Arrow to redirect to portfolio" />
                </Link>
            </div>
            <div className="pagination" onClick={activeClick}>
                {ids.map((id, i) => (
                    <button
                        className={`pagination-button ${i === current && 'active'}`}
                        onClick={() => setCurrent(i)}
                        key={i}>
                            {id}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Hero
