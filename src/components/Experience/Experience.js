import ExperienceForm from "./ExperienceForm";
import ExperienceData from "./ExperienceData";
import uniqid from "uniqid";

import React, { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      experience: {
        company: "",
        position: "",
        start: "",
        end: "",
        duties: "",
        id: uniqid(),
        editing: false,
      },
      experienceList: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.saveExperience = this.saveExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      experience: {
        ...this.state.experience,
        [name]: value,
      },
    });
  }

  addExperience(e) {
    e.preventDefault();
    this.setState((prevState) => ({ editing: !prevState.editing }));
  }

  saveExperience(e) {
    e.preventDefault();
    const experience = this.state.experience;
    if (
      !experience.company ||
      !experience.position ||
      !experience.start ||
      !experience.duties
    ) {
      alert("Please complete the entire form.");
      return;
    }

    this.setState((prevState) => ({
      editing: !prevState.editing,
      experience: {
        company: "",
        position: "",
        start: "",
        end: "",
        duties: "",
        id: uniqid(),
        editing: false,
      },
      experienceList: [...prevState.experienceList, experience],
    }));
  }

  deleteExperience(id) {
    const experience = [...this.state.experienceList];
    const newExperience = experience.filter((exp) => exp.id !== id);
    this.setState({
      ...this.state,
      experienceList: newExperience,
    });
  }

  edit(id) {
    const expList = [...this.state.experienceList];

    let currentExperience = expList.filter((exp) => exp.id === id)[0];
    const currentExperienceIndex = expList.indexOf(currentExperience);
    currentExperience.editing = !currentExperience.editing;

    expList[currentExperienceIndex] = currentExperience;

    this.setState({
      ...this.state,
      experienceList: expList,
    });
  }

  save(id, state) {
    if (!state.company || !state.position || !state.start || !state.duties) {
      alert("Please complete the entire form.");
      return;
    }
    const expList = [...this.state.experienceList];

    let currentExperience = expList.filter((exp) => exp.id === id)[0];
    const currentExperienceIndex = expList.indexOf(currentExperience);
    currentExperience = { ...state, editing: !currentExperience.editing };

    expList[currentExperienceIndex] = currentExperience;

    this.setState({
      ...this.state,
      experienceList: expList,
    });
  }

  render() {
    const { editing } = this.state;
    return (
      <div className="experience">
        <h1 className="experience__h1">Experience</h1>
        <ExperienceData
          experienceList={this.state.experienceList}
          delete={this.deleteExperience}
          edit={this.edit}
          save={this.save}
        />
        {editing && (
          <ExperienceForm data={this.state} handleChange={this.handleChange} />
        )}
        {!editing ? (
          <button className="experience__button" onClick={this.addExperience}>
            Add
          </button>
        ) : (
          <button className="experience__button" onClick={this.saveExperience}>
            Save
          </button>
        )}
      </div>
    );
  }
}

export default Experience;
