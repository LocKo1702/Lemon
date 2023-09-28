import "./Header.css";
import Logo from "../Assets/Logo.svg";
import {Link} from "react-router-dom";

const Header = () => {
    const handleScroll = () => {
        const ele = document.querySelector("#about");
        if (ele) {
            ele.scrollIntoView({behavior: "smooth"});
        }
    };

    return (
        <header>
            <div className="container">
                <div className="header-wrap">
                    <div className="logo">
                        <Link to="/">
                            <img src={Logo} alt="Little Lemon Logo"/>
                        </Link>
                    </div>
                    <div className="menu-items">
                        <ul className="menu">
                            <li>
                                <Link className="menu-link" to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="menu-link" to="/" onClick={handleScroll}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link className="menu-link" to="/comingsoon">Menu</Link>
                            </li>
                            <li>
                                <Link className="menu-link" to="/reservation">Reserve</Link>
                            </li>
                            <li>
                                <Link className="menu-link" to="/comingsoon">Login</Link>
                            </li>
                        </ul>
                        <Link className="cta" to="/comingsoon">
                            Order Online
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;