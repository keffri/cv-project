import React, { Component } from "react";

class EducationForm extends Component {
  render() {
    return (
      <div className="educationForm">
        <form className="educationForm__form">
          <label className="educationForm__label">
            School:
            <input
              className="educationForm__input"
              required
              type="text"
              name="school"
              placeholder="University of Kentucky"
              value={this.props.data.education.school}
              onChange={this.props.handleChange}
            />
          </label>
          <label className="educationForm__label">
            Major:
            <input
              className="educationForm__input"
              required
              type="text"
              name="major"
              placeholder="Computer Science"
              value={this.props.data.education.major}
              onChange={this.props.handleChange}
            />
          </label>
          <label className="educationForm__label">
            Start:
            <input
              className="educationForm__input"
              required
              type="date"
              name="start"
              value={this.props.data.education.start}
              onChange={this.props.handleChange}
            />
          </label>
          <label className="educationForm__label">
            End:
            <input
              className="educationForm__input"
              type="date"
              name="end"
              value={this.props.data.education.end}
              onChange={this.props.handleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default EducationForm;
