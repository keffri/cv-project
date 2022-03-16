import EducationForm from "./EducationForm";
import EducationData from "./EducationData";
import uniqid from "uniqid";
import React, { useState } from "react";

const Education = () => {
  const [editing, setEditing] = useState(false);
  const [education, setEducation] = useState({
    school: "",
    major: "",
    start: "",
    end: "",
    id: uniqid(),
    editing: false,
  });
  const [educationList, setEducationList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEducation({
      ...education,
      [name]: value,
    });
  };

  const addEducation = (e) => {
    e.preventDefault();
    setEditing(!editing);
  };

  const saveEducation = (e) => {
    e.preventDefault();

    const currentEducation = education;
    if (
      !currentEducation.school ||
      !currentEducation.major ||
      !currentEducation.start
    ) {
      alert("Please complete the entire form.");
      return;
    }
    setEditing(!editing);
    setEducation({
      school: "",
      major: "",
      start: "",
      end: "",
      id: uniqid(),
      editing: false,
    });
    setEducationList((prevEducationList) => [
      ...prevEducationList,
      currentEducation,
    ]);
  };

  const deleteEducation = (id) => {
    const educationListCopy = [...educationList];
    const newEducationList = educationListCopy.filter((edu) => edu.id !== id);
    setEducationList(newEducationList);
  };

  const cancel = () => {
    setEditing(!editing);
    setEducation({
      school: "",
      major: "",
      start: "",
      end: "",
      id: uniqid(),
      editing: false,
    });
  };

  const edit = (id) => {
    const eduList = [...educationList];

    let currentEducation = eduList.filter((edu) => edu.id === id)[0];
    const currentEducationIndex = eduList.indexOf(currentEducation);
    currentEducation.editing = !currentEducation.editing;

    eduList[currentEducationIndex] = currentEducation;

    setEducationList(eduList);
  };

  const save = (id, state) => {
    if (!state.school || !state.major || !state.start) {
      alert("Please complete the entire form.");
      return;
    }
    const eduList = [...educationList];
    let currentEducation = eduList.filter((edu) => edu.id === id)[0];
    const currentEducationIndex = eduList.indexOf(currentEducation);

    currentEducation = {
      ...state,
      editing: !currentEducation.editing,
    };
    eduList[currentEducationIndex] = currentEducation;

    setEducationList(eduList);
  };

  return (
    <div className="education">
      <h1 className="education__h1">Education</h1>
      <EducationData
        educationList={educationList}
        delete={deleteEducation}
        cancelEdit={cancel}
        edit={edit}
        save={save}
      />
      {editing && (
        <EducationForm data={education} handleChange={handleChange} />
      )}
      {!editing ? (
        <button className="education__button" onClick={addEducation}>
          Add
        </button>
      ) : (
        <div className="education__buttons">
          <button className="education__button" onClick={saveEducation}>
            Save
          </button>
          <button className="education__button" onClick={cancel}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default Education;
