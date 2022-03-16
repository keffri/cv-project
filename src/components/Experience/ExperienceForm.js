import React from "react";

const ExperienceForm = (props) => {
  return (
    <form className="experienceForm">
      <label className="experienceForm__label">
        Company:
        <input
          className="experienceForm__input"
          placeholder="Weeb Tech"
          type="text"
          name="company"
          value={props.data.experience.company}
          onChange={props.handleChange}
        />
      </label>
      <label className="experienceForm__label">
        Position:
        <input
          className="experienceForm__input"
          placeholder="Junior Developer"
          type="text"
          name="position"
          value={props.data.experience.position}
          onChange={props.handleChange}
        />
      </label>
      <label className="experienceForm__label">
        Start:
        <input
          className="experienceForm__input"
          type="date"
          name="start"
          value={props.data.experience.start}
          onChange={props.handleChange}
        />
      </label>
      <label className="experienceForm__label">
        End:
        <input
          className="experienceForm__input"
          type="date"
          name="end"
          value={props.data.experience.end}
          onChange={props.handleChange}
        />
      </label>
      <label className="experienceForm__label">
        Duties:
        <input
          className="experienceForm__input"
          placeholder="Coding"
          type="text"
          name="duties"
          value={props.data.experience.duties}
          onChange={props.handleChange}
        />
      </label>
    </form>
  );
};

export default ExperienceForm;
