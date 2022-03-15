import React from "react";

const GeneralData = (props) => {
  return (
    <div className="generalData">
      <p className="generalData__p">
        <span className="general--bold">First Name:</span>{" "}
        {props.data.firstName}
      </p>
      <p className="generalData__p">
        <span className="general--bold">Last Name:</span> {props.data.lastName}
      </p>
      <p className="generalData__p">
        <span className="general--bold">Email:</span> {props.data.email}
      </p>
      <p className="generalData__p">
        <span className="general--bold">Phone:</span> {props.data.phone}
      </p>
      <button className="generalData__button" onClick={props.handleSubmit}>
        Edit
      </button>
    </div>
  );
};

export default GeneralData;
