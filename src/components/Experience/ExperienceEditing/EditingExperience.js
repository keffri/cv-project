import React, { useState } from "react";

const EditingExperience = (props) => {
  const [experience, setExperience] = useState(props.data);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setExperience({
      ...experience,
      [name]: value,
    });
  };

  return (
    <div className="experienceEditing">
      <form className="experienceEditing__form">
        <label className="experienceEditing__label">
          Company:
          <input
            className="experienceEditing__input"
            type="text"
            name="company"
            value={experience.company}
            onChange={handleChange}
          />
        </label>
        <label className="experienceEditing__label">
          Position:
          <input
            className="experienceEditing__input"
            type="text"
            name="position"
            value={experience.position}
            onChange={handleChange}
          />
        </label>
        <label className="experienceEditing__label">
          Start:
          <input
            className="experienceEditing__input"
            type="date"
            name="start"
            value={experience.start}
            onChange={handleChange}
          />
        </label>
        <label className="experienceEditing__label">
          End:
          <input
            className="experienceEditing__input"
            type="date"
            name="end"
            value={experience.end}
            onChange={handleChange}
          />
        </label>
        <label className="experienceEditing__label">
          Duties:
          <input
            className="experienceEditing__input"
            type="text"
            name="duties"
            value={experience.duties}
            onChange={handleChange}
          />
        </label>
      </form>
      <button
        className="experienceEditing__button"
        onClick={() => props.save(props.id, experience)}
      >
        Save
      </button>
    </div>
  );
};

export default EditingExperience;
