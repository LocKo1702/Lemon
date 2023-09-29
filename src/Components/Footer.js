import "./Footer.css";
import Logo from "../Assets/footer-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const handleScroll = () => {
    const ele = document.querySelector("#about");
    if (ele) {
      ele.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="footer">
      <div className="footer-container">
          <Link to="/"><img className="footer-logo" src={Logo} alt="Little Lemon Logo"></img></Link>
          <div className="footer-site-map">
            <p className="footer-title">NAVIGATION</p>
                <Link className="footer-item" to="/">Home</Link>
                <Link className="footer-item" to="/" onClick={handleScroll}>About</Link>
                <Link className="footer-item" to="/comingsoon">Menu</Link>
                <Link className="footer-item" to="/reservation">Reservations</Link>
                <Link className="footer-item" to="/comingsoon">Order Online</Link>
                <Link className="footer-item" to="/comingsoon">Login</Link>
          </div>
          <div className="footer-contact">
            <p className="footer-title">CONTACT</p>
            <p className="contact-item">
              <i className="contact-icon">
                <FontAwesomeIcon icon={faLocationDot} />
              </i>
              333 Lucky Ave<br />
              Chicago, IL 60611
            </p>
            <p className="contact-item">
              <i className="contact-icon">
                <FontAwesomeIcon icon={faPhone} />
              </i>
              312.492.6262
            </p>
            <p className="contact-item">
              <i className="contact-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
              info@littlelemon.com
            </p>
          </div>
          <div className="footer-social">
            <p className="footer-title">SOCIAL MEDIA</p>
            <div className="socials">
              <a className="social-icon"
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a className="social-icon"
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a className="social-icon"
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a className="social-icon"
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;