import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Reservation from "./Components/Reservation";

test("Renders Reservation", () => {
  render(
  <Router>
    <Reservation />
  </Router>
  );
  const submitBtn = screen.getByText("Make Reservation");
  expect(submitBtn).toBeInTheDocument();
});

test("Updates the time correctly", () => {
  render(
  <Router>
    <Reservation />
  </Router>
  );
  const dateSelector = screen.getByLabelText(/Date/);
  fireEvent.change(dateSelector, { target: { value: "2023-09-28" } });
  const timeDropDown = screen.getByLabelText(/Time/);
  fireEvent.change(timeDropDown, { target: { value: "17:00" } });
  expect(timeDropDown.value).toEqual("17:00");
});