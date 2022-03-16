import React from "react";

const EducationForm = (props) => {
  return (
    <form className="educationForm">
      <label className="educationForm__label">
        School:
        <input
          className="educationForm__input"
          required
          type="text"
          name="school"
          placeholder="University of Kentucky"
          value={props.data.school}
          onChange={props.handleChange}
        />
      </label>
      <label className="educationForm__label">
        Major:
        <input
          className="educationForm__input"
          required
          type="text"
          name="major"
          placeholder="Computer Science"
          value={props.data.major}
          onChange={props.handleChange}
        />
      </label>
      <label className="educationForm__label">
        Start:
        <input
          className="educationForm__input"
          required
          type="date"
          name="start"
          value={props.data.start}
          onChange={props.handleChange}
        />
      </label>
      <label className="educationForm__label">
        End:
        <input
          className="educationForm__input"
          type="date"
          name="end"
          value={props.data.end}
          onChange={props.handleChange}
        />
      </label>
    </form>
  );
};

export default EducationForm;
