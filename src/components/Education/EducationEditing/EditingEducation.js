import React, { useState } from "react";

const EditingEducation = (props) => {
  const [education, setEducation] = useState(props.data);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEducation({
      ...education,
      [name]: value,
    });
  };

  return (
    <div className="educationEditing">
      <form className="educationEditing__form">
        <label className="educationEditing__label">
          School:
          <input
            className="educationEditing__input"
            type="text"
            name="school"
            value={education.school}
            onChange={handleChange}
          />
        </label>
        <label className="educationEditing__label">
          Major:
          <input
            className="educationEditing__input"
            type="text"
            name="major"
            value={education.major}
            onChange={handleChange}
          />
        </label>
        <label className="educationEditing__label">
          Date:
          <input
            className="educationEditing__input"
            type="date"
            name="start"
            value={education.start}
            onChange={handleChange}
          />
        </label>
        <label className="educationEditing__label">
          End:
          <input
            className="educationEditing__input"
            type="date"
            name="end"
            value={education.end}
            onChange={handleChange}
          />
        </label>
      </form>
      <button
        className="educationEditing__button"
        onClick={() => props.save(props.id, education)}
      >
        Save
      </button>
    </div>
  );
};

export default EditingEducation;
