import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import arrow from '../../assets/images/icons/icon-arrow.svg'
import data from '../../hero-slides.json'

const Hero = () => {
    const [current, setCurrent] = useState(0)
          
    const slide = useRef()

    let ids = data.map(i => i.id),
        backdrops = data.map(i => i.picture),
        titles = data.map(i => i.title),
        paragraphs = data.map(i => i.subheading);

    useEffect(() => {
        slide.current.classList.add('active-timer');
        
        const timeoutID = setTimeout(() => {
            current < 3
                ? setCurrent(current + 1)
                : setCurrent(0)            

            slide.current.classList.remove('active-timer')
            slide.current.classList.remove('active-click');
        }, 6000)

        return () => clearTimeout(timeoutID)
    }, [current])

    const activeClick = () => {
        slide.current.classList.remove('active-timer')
        slide.current.classList.add('active-click')
    }

    return (
        <div className="homepage-hero">
            <div className="homepage-hero-backdrop">
                <img 
                    src={require('../../assets/images/home/desktop/' + backdrops[current])} 
                    ref={slide} 
                    alt={`${titles[current]} porfolio preview`}
                />
            </div>
            <div className="homepage-hero-textbox">
                <h2 className="homepage-hero-textbox-heading">{titles[current]}</h2>
                <p className="homepage-hero-textbox-subheading">{paragraphs[current]}</p>
                <Link to="/portfolio" className="button">
                    <span>See Our Portfolio</span>
                    <img src={arrow} alt="Arrow to redirect to portfolio" />
                </Link>
            </div>
            <div className="homepage-hero-pagination" onClick={activeClick}>
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