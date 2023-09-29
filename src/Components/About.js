import "./About.css";
import chefA from "../Assets/chef a.jpg";
import chefB from "../Assets/restaurant chef B.jpg";

const About = () => {
  return (
    <section className="about" id="about">
        <div className="about-text">
            <h1 className="about-title">Little Lemon</h1>
            <h2 className="about-subtitle">Chicago</h2>
            <p className="about-description">
              Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials. Both owners, Mario and Adrian, have been highly awarded chefs in the industry for over a decade.
            </p>
        </div>
        <div className="about-images">
            <img className="mario" src={chefA} alt="Mario" height={200} width={150} />
            <img className="adrian" src={chefB} alt="Adrian" height={200} width={150} />
        </div>
    </section>
  );
};

export default About;