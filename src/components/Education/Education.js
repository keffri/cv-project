import EducationForm from "./EducationForm";
import EducationData from "./EducationData";
import uniqid from "uniqid";
import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      education: {
        school: "",
        major: "",
        start: "",
        end: "",
        id: uniqid(),
        editing: false,
      },
      educationList: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.saveEducation = this.saveEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      education: {
        ...this.state.education,
        [name]: value,
      },
    });
  }

  addEducation(e) {
    e.preventDefault();
    this.setState((prevState) => ({ editing: !prevState.editing }));
  }

  saveEducation(e) {
    e.preventDefault();
    const education = this.state.education;
    this.setState((prevState) => ({
      editing: !prevState.editing,
      education: {
        school: "",
        major: "",
        start: "",
        end: "",
        id: uniqid(),
        editing: false,
      },
      educationList: [...prevState.educationList, education],
    }));
  }

  deleteEducation(id) {
    const education = [...this.state.educationList];
    const newEducation = education.filter((edu) => edu.id !== id);
    this.setState({
      ...this.state,
      educationList: newEducation,
    });
  }

  edit(id) {
    const eduList = [...this.state.educationList];

    let currentEducation = eduList.filter((edu) => edu.id === id)[0];
    const currentEducationIndex = eduList.indexOf(currentEducation);
    currentEducation.editing = !currentEducation.editing;

    eduList[currentEducationIndex] = currentEducation;

    this.setState({
      ...this.state,
      educationList: eduList,
    });
  }

  save(id, state) {
    const eduList = [...this.state.educationList];

    let currentEducation = eduList.filter((edu) => edu.id === id)[0];
    const currentEducationIndex = eduList.indexOf(currentEducation);
    currentEducation = { ...state, editing: !currentEducation.editing };

    eduList[currentEducationIndex] = currentEducation;

    this.setState({
      ...this.state,
      educationList: eduList,
    });
  }

  render() {
    const { editing } = this.state;

    return (
      <div className="education">
        <h1 className="education__h1">Education</h1>
        <EducationData
          educationList={this.state.educationList}
          delete={this.deleteEducation}
          edit={this.edit}
          save={this.save}
        />
        {editing && (
          <EducationForm data={this.state} handleChange={this.handleChange} />
        )}
        {!editing ? (
          <button onClick={this.addEducation}>Add</button>
        ) : (
          <button onClick={this.saveEducation}>Save</button>
        )}
      </div>
    );
  }
}

export default Education;
