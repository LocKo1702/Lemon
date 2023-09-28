import React from "react";
import "./ComingSoon.css";
import Image from "../Assets/greekfood.jpeg";
import Home from "../Assets/pngwing.com.png";
import {Link} from "react-router-dom";

const ComingSoon = () => {

    return (
        <section className="coming-header">
            <div className="img-wrap">
                <img className="coming-image" src={Image} alt="From Our Menu" />
            </div>

        <section className="coming-container">
            <div className="coming-button">
                <Link className="back-button" to="/">
                    <img src={Home} alt="Back to Home" height={40} width={40} />
                </Link>
            </div>
            <div className="coming-title">Coming Soon!</div>
            <div className="coming-details">We are working hard to update our website for you. In the meantime, please give us a call with any questions, 312.492.6262</div>
        </section>
        </section>
    );
};

export default ComingSoon;