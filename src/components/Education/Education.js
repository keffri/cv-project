import EducationForm from "./EducationForm";
import EducationData from "./EducationData";
import uniqid from "uniqid";
import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      education: { school: "", major: "", start: "", end: "", id: uniqid() },
      educationList: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.saveEducation = this.saveEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
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
      education: { school: "", major: "", start: "", end: "", id: uniqid() },
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

  render() {
    const { editing } = this.state;

    return (
      <div>
        <EducationData
          educationList={this.state.educationList}
          delete={this.deleteEducation}
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
