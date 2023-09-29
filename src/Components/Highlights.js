import Greeksalad from "../Assets/greek salad.jpg";
import LemonDessert from "../Assets/lemon dessert.jpg";
import Bruschetta from "../Assets/bruchetta.svg";
import { ReactComponent as ScooterSVG } from "../Assets/scooter.svg";
import { Link } from "react-router-dom";
import "./Highlights.css";

const Highlights = () => {
  return (
    <section className="special-menu">
      <div className="container">
        <section className="special-menu-wrap">
          <div className="heading">
            <p className="title">This week's specials!</p>
            <Link className="cta" to="/comingsoon">
              Order Online
            </Link>
          </div>
          <div className="flex-items">
            <div className="flex-item">
              <div className="img-wrap">
                <img className="specials-image" src={Greeksalad} alt="Greek Salad" />
              </div>
              <div className="content-wrap">
                <div className="heading">
                  <p className="title">Greek Salad</p>
                  <p className="price">$12.99</p>
                </div>
                <p className="desc">
                  The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons
                </p>
                <p className="bottom-text">
                  Order a Delivery
                  <i className="delivery">
                    <ScooterSVG />
                  </i>
                </p>
              </div>
            </div>
            <div className="flex-item">
              <div className="img-wrap">
                <img className="specials-image" src={Bruschetta} alt="Bruschetta" />
              </div>
              <div className="content-wrap">
                <div className="heading">
                  <p className="title">Bruschetta</p>
                  <p className="price">$7.50</p>
                </div>
                <p className="desc">
                  Our Bruschetta is made from grilled bread that has been smeared with garlic and topped with fresh, local tomatos and herbs, then seasoned with salt and olive oil
                </p>
                <p className="bottom-text">
                  Order a Delivery
                  <i className="delivery">
                    <ScooterSVG />
                  </i>
                </p>
              </div>
            </div>
            <div className="flex-item">
              <div className="img-wrap">
                <img className="specials-image" src={LemonDessert} alt="Lemon Dessert" />
              </div>
              <div className="content-wrap">
                <div className="heading">
                  <p className="title">Lemon Dessert</p>
                  <p className="price">$9.50</p>
                </div>
                <p className="desc">
                  This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined
                </p>
                <p className="bottom-text">
                  Order a Delivery
                  <i className="delivery">
                    <ScooterSVG />
                  </i>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Highlights;