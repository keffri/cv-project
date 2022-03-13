import React, { Component } from "react";

class EditingEducation extends Component {
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
      <div className="educationEditing">
        <form className="educationEditing__form">
          <label className="educationEditing__label">
            School:
            <input
              className="educationEditing__input"
              type="text"
              name="school"
              value={this.state.school}
              onChange={this.handleChange}
            />
          </label>
          <label className="educationEditing__label">
            Major:
            <input
              className="educationEditing__input"
              type="text"
              name="major"
              value={this.state.major}
              onChange={this.handleChange}
            />
          </label>
          <label className="educationEditing__label">
            Date:
            <input
              className="educationEditing__input"
              type="date"
              name="start"
              value={this.state.start}
              onChange={this.handleChange}
            />
          </label>
          <label className="educationEditing__label">
            End:
            <input
              className="educationEditing__input"
              type="date"
              name="end"
              value={this.state.end}
              onChange={this.handleChange}
            />
          </label>
        </form>
        <button
          className="educationEditing__button"
          onClick={() => this.props.save(this.props.id, this.state)}
        >
          Save
        </button>
      </div>
    );
  }
}

export default EditingEducation;
