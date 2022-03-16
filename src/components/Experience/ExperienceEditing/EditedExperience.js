import React from "react";

const EditedExperience = (props) => {
  return (
    <div className="experienceEdited">
      <p className="experienceEdited__p">Company: {props.data.company}</p>
      <p className="experienceEdited__p">Position: {props.data.position}</p>
      <p className="experienceEdited__p">Start: {props.data.start}</p>
      <p className="experienceEdited__p">End: {props.data.end}</p>
      <p className="experienceEdited__p">Duties: {props.data.duties}</p>
      <button
        className="experienceEdited__button"
        onClick={() => props.edit(props.id)}
      >
        Edit
      </button>
      <button
        className="experienceEdited__button"
        onClick={() => props.delete(props.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default EditedExperience;
