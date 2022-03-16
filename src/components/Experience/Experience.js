import ExperienceForm from "./ExperienceForm";
import ExperienceData from "./ExperienceData";
import uniqid from "uniqid";
import React, { useState } from "react";

const Experience = () => {
  const [editing, setEditing] = useState(false);
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    start: "",
    end: "",
    duties: "",
    id: uniqid(),
    editing: false,
  });
  const [experienceList, setExperienceList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setExperience({
      ...experience,
      [name]: value,
    });
  };

  const addExperience = (e) => {
    e.preventDefault();
    setEditing(!editing);
  };

  const saveExperience = (e) => {
    e.preventDefault();
    const currentExperience = experience;
    if (
      !currentExperience.company ||
      !currentExperience.position ||
      !currentExperience.start ||
      !currentExperience.duties
    ) {
      alert("Please complete the entire form.");
      return;
    }
    setEditing(!editing);
    setExperience({
      company: "",
      position: "",
      start: "",
      end: "",
      duties: "",
      id: uniqid(),
      editing: false,
    });
    setExperienceList((prevExperienceList) => [
      ...prevExperienceList,
      currentExperience,
    ]);
  };

  const deleteExperience = (id) => {
    const experienceListCopy = [...experienceList];
    const newExperienceList = experienceListCopy.filter((edu) => edu.id !== id);
    setExperienceList(newExperienceList);
  };

  const cancel = () => {
    setEditing(!editing);
    setExperience({
      company: "",
      position: "",
      start: "",
      end: "",
      duties: "",
      id: uniqid(),
      editing: false,
    });
  };

  const edit = (id) => {
    const expList = [...experienceList];

    let currentExperience = expList.filter((exp) => exp.id === id)[0];
    const currentExperienceIndex = expList.indexOf(currentExperience);
    currentExperience.editing = !currentExperience.editing;

    expList[currentExperienceIndex] = currentExperience;
    setExperienceList(expList);
  };

  const save = (id, state) => {
    if (!state.company || !state.position || !state.start || !state.duties) {
      alert("Please complete the entire form.");
      return;
    }

    const expList = [...experienceList];

    let currentExperience = expList.filter((exp) => exp.id === id)[0];
    const currentExperienceIndex = expList.indexOf(currentExperience);

    currentExperience = { ...state, editing: !currentExperience.editing };

    expList[currentExperienceIndex] = currentExperience;

    setExperienceList(expList);
  };

  return (
    <div className="experience">
      <h1 className="experience__h1">Experience</h1>
      <ExperienceData
        experienceList={experienceList}
        delete={deleteExperience}
        edit={edit}
        save={save}
      />
      {editing && (
        <ExperienceForm data={experience} handleChange={handleChange} />
      )}
      {!editing ? (
        <button className="experience__button" onClick={addExperience}>
          Add
        </button>
      ) : (
        <div className="experience__buttons">
          <button className="experience__button" onClick={saveExperience}>
            Save
          </button>
          <button className="experience__button" onClick={cancel}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default Experience;
