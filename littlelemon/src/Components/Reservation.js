import React from "react";
import useForm from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import "./Reservation.css";
import Image from "../Assets/outdoor.png";
import Home from "../Assets/pngwing.com.png";
import {Link} from "react-router-dom";

const Reservation = () => {

    const {
      form,
      timeSlots,
      isFormValid,
      changeDateHandler,
      changeTimeHandler,
      changeGuestsHandler,
      changeOccasionHandler,
      changeTableHandler,
      changeFirstNameHandler,
      changeLastNameHandler,
      changeEmailHandler,
      changeMobileHandler,
      changeCommunicationHandler,
      changeMessageHandler,
      submitHandler,
    } = useForm();

    const navigate = useNavigate();

    function handleSubmit(e) {
    const response = submitHandler(e);
    return response ? navigate("/confirmation") : null;
    };

    return (
        <section className="reservation-header">
            <div className="img-wrap">
                <img className="reserve-image" src={Image} alt="Restaurant" />
            </div>

        <section className="reservation-form">
            <div className="form-button">
                <Link className="back-button" to="/">
                    <img src={Home} alt="Back to Home" height={40} width={40} />
                </Link>
            </div>
            <div className="form-title">Book Your Table</div>
            <div className="reservation-details">Reservation Details</div>

      <form onSubmit={handleSubmit}>
        <section className="details-container">

                <label htmlFor="date">
                    <p>Date</p>
                    <input className="date"
                      onChange={changeDateHandler}
                      type="date"
                      value={form.date}
                      id="date"
                      placeholder="Date"
                    />
                </label>

                <label htmlFor="time">
                    <p>Time</p>
                    <select className="time"
                      id="time"
                      onChange={changeTimeHandler}
                      value={form.time}
                      >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                </label>

                <label htmlFor="number">
                    <p>Number of Guests</p>
                    <input className="number"
                      onChange={changeGuestsHandler}
                      type="number"
                      value={form.numberOfGuests}
                      id="number"
                      min="1"
                      max="10"
                      placeholder="Number of Guests"
                      required
                    />
                </label>

                <label htmlFor="occasion">
                    <p>Occasion</p>
                    <select className="occasion"
                      onChange={changeOccasionHandler}
                      value={form.occasion}
                      id="occasion"
                      placeholder="Occasion"
                    >
                      <option value="">None</option>
                      <option value="birthday">Birthday</option>
                      <option value="engagement">Engagement</option>
                      <option value="anniversary">Anniversary</option>
                    </select>
                </label>

                <div className="table-preference">
                <label className="table" htmlFor="table">Seating Preference</label>
                    <select
                      value={form.tablePreference}
                      onChange={changeTableHandler}
                      id="tablePreference"
                      >
                      <option value="">None</option>
                      <option value="inside">Inside</option>
                      <option value="outside">Outside</option>
                    </select>
                </div>

                <label htmlFor="first-name">
                    <p>First Name</p>
                    <input className="first-name"
                      value={form.firstName}
                      onChange={changeFirstNameHandler}
                      type="text"
                      id="firstname"
                      placeholder="First Name"
                    />
                </label>

                <label htmlFor="last-name">
                    <p>Last Name</p>
                    <input className="last-name"
                      value={form.lastName}
                      onChange={changeLastNameHandler}
                      type="text"
                      name="lastname"
                      id="lastname"
                      placeholder="Last Name"
                    />
                </label>

                <label htmlFor="email">
                    <p>Email</p>
                    <input className="email"
                      value={form.email}
                      onChange={changeEmailHandler}
                      type="email"
                      id="email"
                      placeholder="Email"
                    />
                </label>

                <label htmlFor="mobile">
                    <p>Phone</p>
                    <input className="mobile"
                      value={form.mobile}
                      onChange={changeMobileHandler}
                      type="text"
                      id="mobile"
                      minLength="5"
                      maxLength="10"
                      placeholder="Phone"
                      required
                    />
                </label>

                <div className="communication">
                    <input
                      value={form.communication}
                      onChange={changeCommunicationHandler}
                      type="checkbox"
                      id="communication"
                      required
                    />
                    <label className="communication-label" htmlFor="communication">I consent to the reception of restaurant communications by email and SMS.</label>
                </div>

                    <textarea className="special"
                      onChange={changeMessageHandler}
                      name="request"
                      value={form.message}
                      id="request"
                      rows="10"
                      cols="50"
                      placeholder="Special Requests?"
                    />
        </section>

        <section className="button">
          <button className="submit" disabled={!isFormValid}>Make Reservation</button>
        </section>

      </form>
        </section>
        </section>
      );
    };

export default Reservation;