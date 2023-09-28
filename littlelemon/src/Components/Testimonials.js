import "./Testimonials.css";
import Image1 from "../Assets/testimonial.jpg";
import Image2 from "../Assets/testimonial2.jpg";
import Image3 from "../Assets/testimonial3.webp";
import Image4 from "../Assets/testimonial4.webp";
import { ReactComponent as Star } from "../Assets/star.svg";

const Testimonials = () => {
  return (
    <section className="testimonials">
        <section className="testimonials-wrap">
          <p className="heading">Reviews</p>
          <div className="flex-items">
            <div className="flex-item">
              <div className="img-wrap">
                <img className="testimonial-photo" src={Image1} alt="Erica" />
              </div>
              <p className="name">Erica</p>
              <span className="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
              <div className="text">
                The best restaurant in town!
              </div>
            </div>
            <div className="flex-item">
              <div className="img-wrap">
                <img className="testimonial-photo" src={Image2} alt="Damien" />
              </div>
              <p className="name">Damien</p>
              <span className="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
              <div className="text">
                Fast service!
              </div>
            </div>
            <div className="flex-item">
              <div className="img-wrap">
                <img className="testimonial-photo" src={Image3} alt="Kay" />
              </div>
              <p className="name">Kay</p>
              <span className="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
              <div className="text">
                My favorite lemon cake!
              </div>
            </div>
            <div className="flex-item">
              <div className="img-wrap">
                <img className="testimonial-photo" src={Image4} alt="Joe" />
              </div>
              <p className="name">Joe</p>
              <span className="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
              <div className="text">
                Amazing website!
              </div>
            </div>
          </div>
        </section>
    </section>
  );
};

export default Testimonials;