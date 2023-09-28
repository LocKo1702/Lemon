import "./Confirmation.css";
import Image from "../Assets/cheers.png";
import Button from "../Assets/backwhite.png";
import Lemon from "../Assets/lemon only.png";
import {Link} from "react-router-dom";

const Confirmation = ({date, time, guests}) => {

    return (
        <section className="confirmation-header">
            <div className="img-wrap">
                <img className="confirmation-image" src={Image} alt="Cheers to Your Reservation" />
            </div>

        <section className="confirmation-container">
            <div className="confirmation-confirmation">
            <div className="confirmation-button">
                <Link className="back-button" to="/reservation">
                    <img src={Button} alt="Go Back" height={40} width={40}/>
                </Link>
            </div>

            <div className="reservation-confirmation">
                <p className="text">
                    Your reservation on<br/>
                    <b>{date}</b>, at <b>{time}</b><br/>
                    for<br/>
                    <b>{guests} {""}{guests === 1? "guest" : "guests"}</b><br/>
                    is<br/>
                    <b>CONFIRMED</b>
                </p>
            </div>
            </div>

            <div className="request-confirmation">
                <img className="lemon" src={Lemon} alt="Lemon" height={52} width={33}/>
                <p className="text2">
                    We have received your additional requests and are happy to accommodate you! <br />
                </p>
                <p className="text3">
                    We look forward to seeing you!
                </p>
                <Link to="/comingsoon">
                <button className="menu-button">Our Menu</button>
                </Link>
            </div>

        </section>
        </section>
    );
};

export default Confirmation;