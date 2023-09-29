import { useState, useReducer, useEffect } from "react";
import { fetchAPI, submitAPI } from "../formAPI/bookingAPI";
import { useFormContext } from "../formSet/FormContext";

const initialState = {
  date: "",
  time: "",
  numberOfGuests: 1,
  occasion: "",
  tablePreference: "",
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  communication: "",
  message: "",
};

const ACTION_TYPES = {
  DATE: 0,
  TIME: 1,
  GUESTS: 2,
  OCCASION: 3,
  TABLE: 4,
  FIRSTNAME: 5,
  LASTNAME: 6,
  EMAIL: 7,
  MOBILE: 8,
  COMMUNICATION: 9,
  MESSAGE: 10,
};

function formReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.DATE:
      return {
        ...state,
        date: action.payload,
      };
    case ACTION_TYPES.TIME:
      return {
        ...state,
        time: action.payload,
      };
    case ACTION_TYPES.GUESTS:
      return {
        ...state,
        numberOfGuests: action.payload,
      };
    case ACTION_TYPES.OCCASION:
      return {
        ...state,
        occasion: action.payload,
      };
    case ACTION_TYPES.TABLE:
      return {
        ...state,
        tablePreference: action.payload,
      };
    case ACTION_TYPES.FIRSTNAME:
      return {
        ...state,
        firstName: action.payload,
      };
    case ACTION_TYPES.LASTNAME:
      return {
        ...state,
        lastName: action.payload,
      };
    case ACTION_TYPES.EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case ACTION_TYPES.MOBILE:
      return {
        ...state,
        mobile: action.payload,
      };
    case ACTION_TYPES.COMMUNICATION:
      return {
        ...state,
        communication: action.payload,
      };
    case ACTION_TYPES.MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
}

const useForm = () => {
  const [form, dispatch] = useReducer(formReducer, initialState);
  const [timeSlots, setTimeslots] = useState(["Choose Date First"]);
  const [isFormValid, setFormValid] = useState(false);
  const formContext = useFormContext();

  useEffect(() => {
    if (
      form.date &&
      form.time &&
      form.numberOfGuests &&
      form.firstName.trim().length >= 3 &&
      form.email.includes("@") &&
      form.email.includes(".") &&
      form.email.trim().length > 5
    ) {
      setFormValid(true);
    }
  }, [form]);

  const changeDateHandler = (e) => {
    dispatch({ type: ACTION_TYPES.DATE, payload: e.target.value });
    setTimeslots(fetchAPI(new Date(e.target.value)));
  };

  const changeTimeHandler = (e) => {
    dispatch({ type: ACTION_TYPES.TIME, payload: e.target.value });
  };

  const changeGuestsHandler = (e) => {
    dispatch({ type: ACTION_TYPES.GUESTS, payload: e.target.value });
  };

  const changeOccasionHandler = (e) => {
    dispatch({ type: ACTION_TYPES.OCCASION, payload: e.target.value });
  };

  const changeTableHandler = (e) => {
    dispatch({ type: ACTION_TYPES.TABLE, payload: e.target.value });
  };

  const changeFirstNameHandler = (e) => {
    dispatch({ type: ACTION_TYPES.FIRSTNAME, payload: e.target.value });
  };

  const changeLastNameHandler = (e) => {
    dispatch({ type: ACTION_TYPES.LASTNAME, payload: e.target.value });
  };

  const changeEmailHandler = (e) => {
    dispatch({ type: ACTION_TYPES.EMAIL, payload: e.target.value });
  };

  const changeMobileHandler = (e) => {
    dispatch({ type: ACTION_TYPES.MOBILE, payload: e.target.value });
  };

  const changeCommunicationHandler = (e) => {
    dispatch({ type: ACTION_TYPES.COMMUNICATION, payload: e.target.value });
  };

  const changeMessageHandler = (e) => {
    dispatch({ type: ACTION_TYPES.MESSAGE, payload: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let response;

    if (isFormValid) {
      response = submitAPI(form);
      formContext.setForm(form);
    }
    return response ? true : false;
  };

  return {
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
  };
};

export default useForm;