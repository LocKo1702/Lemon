import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useFormContext} from "./formSet/FormContext";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Reservation from "./Components/Reservation";
import Confirmation from "./Components/Confirmation";
import ComingSoon from "./Components/ComingSoon";
import "./App.css";
import "@fontsource/markazi-text";
import "@fontsource/karla";

function App() {

  const { form } = useFormContext();

  const formProps = {
    date: form.date,
    time: form.time,
    guests: form.numberOfGuests,
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/confirmation" element={<Confirmation {...formProps} />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
