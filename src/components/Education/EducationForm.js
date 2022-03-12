import React, { Component } from "react";

class EducationForm extends Component {
  render() {
    return (
      <div className="education__form">
        <label>
          School:
          <input
            required
            type="text"
            name="school"
            placeholder="University of Kentucky"
            value={this.props.data.education.school}
            onChange={this.props.handleChange}
          />
        </label>
        <label>
          Major:
          <input
            required
            type="text"
            name="major"
            placeholder="Computer Science"
            value={this.props.data.education.major}
            onChange={this.props.handleChange}
          />
        </label>
        <label>
          Start:
          <input
            required
            type="date"
            name="start"
            value={this.props.data.education.start}
            onChange={this.props.handleChange}
          />
        </label>
        <label>
          End:
          <input
            type="date"
            name="end"
            value={this.props.data.education.end}
            onChange={this.props.handleChange}
          />
        </label>
      </div>
    );
  }
}

export default EducationForm;
