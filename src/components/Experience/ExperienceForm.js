import React, { Component } from "react";

class ExperienceForm extends Component {
  render() {
    return (
      <div className="experienceForm">
        <form className="experienceForm__form">
          <label className="experienceForm__label">
            Company:
            <input
              className="experienceForm__input"
              required
              type="text"
              name="company"
              value={this.props.data.experience.company}
              onChange={this.props.handleChange}
            />
          </label>
          <label className="experienceForm__label">
            Position:
            <input
              className="experienceForm__input"
              required
              type="text"
              name="position"
              value={this.props.data.experience.position}
              onChange={this.props.handleChange}
            />
          </label>
          <label className="experienceForm__label">
            Start:
            <input
              className="experienceForm__input"
              required
              type="date"
              name="start"
              value={this.props.data.experience.start}
              onChange={this.props.handleChange}
            />
          </label>
          <label className="experienceForm__label">
            End:
            <input
              className="experienceForm__input"
              type="date"
              name="end"
              value={this.props.data.experience.end}
              onChange={this.props.handleChange}
            />
          </label>
          <label className="experienceForm__label">
            Duties:
            <input
              className="experienceForm__input"
              required
              type="text"
              name="duties"
              value={this.props.data.experience.duties}
              onChange={this.props.handleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default ExperienceForm;
