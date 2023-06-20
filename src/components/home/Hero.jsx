import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import arrow from '../../assets/images/icons/icon-arrow.svg'
import heroSlides from '../../data/hero-slides.json'

const Hero = () => {
    const [current, setCurrent] = useState(0)
          
    const slideRef = useRef()

    let ids = heroSlides.map(i => i.id),
        backdrops = heroSlides.map(i => i.picture),
        titles = heroSlides.map(i => i.title),
        paragraphs = heroSlides.map(i => i.subheading)

    useEffect(() => {
        slideRef.current.classList.add('active-timer')
        
        const timeoutID = setTimeout(() => {
            current < 3
                ? setCurrent(current + 1)
                : setCurrent(0)            

                slideRef.current.classList.remove('active-timer')
                slideRef.current.classList.remove('active-click')
        }, 6000)

        return () => clearTimeout(timeoutID)
    }, [current])

    const activeClick = () => {
        slideRef.current.classList.remove('active-timer')
        slideRef.current.classList.add('active-click')
    }

    return (
        <div className="homepage-hero">
            <div className="backdrop">
                <img 
                    src={require('../../assets/images/home/desktop/' + backdrops[current])} 
                    ref={slideRef} 
                    alt={`${titles[current]} porfolio preview`}
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