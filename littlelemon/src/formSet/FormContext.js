import React, { useContext, useState } from "react";

const FormContext = React.createContext();

const FormProvider = ({ children }) => {
  const [form, setForm] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: false,
    table: false,
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    communication: false,
    message: false,
  });

  const setFormHandler = (data) => {
    setForm(data);
  };

  return (
    <FormContext.Provider
      value={{
        form,
        setForm: setFormHandler,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;

export const useFormContext = () => useContext(FormContext);