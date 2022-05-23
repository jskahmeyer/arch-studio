import { Link } from 'react-router-dom'
import useViewport from '../../hooks/useViewport'

const FeaturedPortfolioCards = () => {
    const { width } = useViewport

    let portfolio1 = 'image-del-sol.jpg',
        portfolio2 = 'image-228b.jpg',
        portfolio3 = 'image-prototype.jpg'
    
    return (
        <>
        <Link to="/portfolio" className="featured-section-portfolio">
            <img className="featured-section-portfolio-image" 
                src={
                    width > 768
                        ? require(`../../assets/images/portfolio/desktop/` + portfolio1)
                            : width > 500
                                ? require(`../../assets/images/portfolio/tablet/` + portfolio1)
                                : require(`../../assets/images/portfolio/mobile/` + portfolio1)
                } 
                alt="Thumbnail link to portfolio page" 
            />
            <h1 className="featured-section-portfolio-number">1</h1>
            <div className="featured-section-portfolio-textbox">
                <h5 className="featured-section-portfolio-textbox-heading">Project Del Sol</h5>
                <small className="featured-section-portfolio-textbox-subheading">View All Projects</small>
            </div>
        </Link>
        <Link to="/portfolio" className="featured-section-portfolio">
            <img className="featured-section-portfolio-image" 
                src={
                    width > 768
                        ? require(`../../assets/images/portfolio/desktop/` + portfolio2)
                            : width > 500
                                ? require(`../../assets/images/portfolio/tablet/` + portfolio2)
                                : require(`../../assets/images/portfolio/mobile/` + portfolio2)
                } 
                alt="Thumbnail link to portfolio page" 
            />
            <h1 className="featured-section-portfolio-number">2</h1>
            <div className="featured-section-portfolio-textbox">
                <h5 className="featured-section-portfolio-textbox-heading">228B Tower</h5>
                <small className="featured-section-portfolio-textbox-subheading">View All Projects</small>
            </div>
        </Link>
        <Link to="/portfolio" className="featured-section-portfolio">
            <img className="featured-section-portfolio-image" 
                src={
                    width > 768
                        ? require(`../../assets/images/portfolio/desktop/` + portfolio3)
                            : width > 500
                                ? require(`../../assets/images/portfolio/tablet/` + portfolio3)
                                : require(`../../assets/images/portfolio/mobile/` + portfolio3)
                } 
                alt="Thumbnail link to portfolio page" 
            />
            <h1 className="featured-section-portfolio-number">3</h1>
            <div className="featured-section-portfolio-textbox">
                <h5 className="featured-section-portfolio-textbox-heading">Le Prototype</h5>
                <small className="featured-section-portfolio-textbox-subheading">View All Projects</small>
            </div>
        </Link>
        </>
    )
}

export default FeaturedPortfolioCards