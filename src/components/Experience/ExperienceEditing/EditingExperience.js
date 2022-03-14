import React, { Component } from "react";

class EditingExperience extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.data;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  }

  render() {
    return (
      <div className="experienceEditing">
        <form className="experienceEditing__form">
          <label className="experienceEditing__label">
            Company:
            <input
              className="experienceEditing__input"
              type="text"
              name="company"
              value={this.state.company}
              onChange={this.handleChange}
            />
          </label>
          <label className="experienceEditing__label">
            Position:
            <input
              className="experienceEditing__input"
              type="text"
              name="position"
              value={this.state.position}
              onChange={this.handleChange}
            />
          </label>
          <label className="experienceEditing__label">
            Start:
            <input
              className="experienceEditing__input"
              type="date"
              name="start"
              value={this.state.start}
              onChange={this.handleChange}
            />
          </label>
          <label className="experienceEditing__label">
            End:
            <input
              className="experienceEditing__input"
              type="date"
              name="end"
              value={this.state.end}
              onChange={this.handleChange}
            />
          </label>
          <label className="experienceEditing__label">
            Duties:
            <input
              className="experienceEditing__input"
              type="text"
              name="duties"
              value={this.state.duties}
              onChange={this.handleChange}
            />
          </label>
        </form>
        <button
          className="experienceEditing__button"
          onClick={() => this.props.save(this.props.id, this.state)}
        >
          Save
        </button>
      </div>
    );
  }
}

export default EditingExperience;
