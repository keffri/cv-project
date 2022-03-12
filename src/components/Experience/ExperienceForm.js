import React, { Component } from "react";

class ExperienceForm extends Component {
  render() {
    return (
      <div className="experience__form">
        <form>
          <label>
            Company:
            <input
              required
              type="text"
              name="company"
              value={this.props.data.experience.company}
              onChange={this.props.handleChange}
            />
          </label>
          <label>
            Position:
            <input
              required
              type="text"
              name="position"
              value={this.props.data.experience.position}
              onChange={this.props.handleChange}
            />
          </label>
          <label>
            Start:
            <input
              required
              type="date"
              name="start"
              value={this.props.data.experience.start}
              onChange={this.props.handleChange}
            />
          </label>
          <label>
            End:
            <input
              type="date"
              name="end"
              value={this.props.data.experience.end}
              onChange={this.props.handleChange}
            />
          </label>
          <label>
            Duties:
            <input
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
