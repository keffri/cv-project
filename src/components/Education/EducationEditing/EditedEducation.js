import React from "react";

const EditedEducation = (props) => {
  return (
    <div className="educationEdited">
      <p className="educationEdited__p">
        <span className="education--bold">School:</span> {props.data.school}
      </p>
      <p className="educationEdited__p">
        <span className="education--bold">Major:</span> {props.data.major}
      </p>
      <p className="educationEdited__p">
        <span className="education--bold">Start:</span> {props.data.start}
      </p>
      <p className="educationEdited__p">
        <span className="education--bold">End:</span> {props.data.end}
      </p>
      <button
        className="educationEdited__button"
        onClick={() => props.edit(props.id)}
      >
        Edit
      </button>
      <button
        className="educationEdited__button"
        onClick={() => props.delete(props.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default EditedEducation;
