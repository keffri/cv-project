import GeneralForm from "./GeneralForm";
import GeneralData from "./GeneralData";

import React, { useState } from "react";

const General = () => {
  const [editing, setEditing] = useState(true);
  const [general, setGeneral] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setGeneral((general) => ({
      ...general,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !general.firstName ||
      !general.lastName ||
      !general.phone ||
      !general.email
    ) {
      alert("Please complete the entire form.");
      return;
    }

    setEditing(!editing);
  };

  return (
    <div className="general">
      <h1 className="general__h1">General Information</h1>
      {editing ? (
        <GeneralForm
          firstName={general.firstName}
          lastName={general.lastName}
          phone={general.phone}
          email={general.email}
          data={general}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <GeneralData data={general} handleSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default General;
