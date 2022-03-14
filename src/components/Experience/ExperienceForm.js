import React, { Component } from "react";

class ExperienceForm extends Component {
  render() {
    return (
      <form className="experienceForm">
        <label className="experienceForm__label">
          Company:
          <input
            className="experienceForm__input"
            placeholder="Weeb Tech"
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
            placeholder="Junior Developer"
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
            placeholder="Coding"
            type="text"
            name="duties"
            value={this.props.data.experience.duties}
            onChange={this.props.handleChange}
          />
        </label>
      </form>
    );
  }
}

export default ExperienceForm;
