import "./Hero.css";
import heroImage from "../Assets/restaurantfood.jpg";
import {Link} from "react-router-dom";

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container">
                <section className="hero-section-wrap">
                    <div className="text-content">
                        <h2 className="title">Little Lemon</h2>
                        <h3 className="sub-script">Chicago</h3>
                        <p className="desc">
                            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                        </p>
                        <Link className="button" to="/reservation">
                            Reserve a table
                        </Link>
                    </div>
                    <div className="image-wrap">
                        <img className="heroimage" src={heroImage} alt="Appetizer" loading="lazy" />
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Hero;