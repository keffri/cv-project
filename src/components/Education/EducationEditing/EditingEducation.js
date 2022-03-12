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
      <div key={this.props.id}>
        <form>
          <label>
            School:
            <input
              type="text"
              name="school"
              value={this.state.school}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Major:
            <input
              type="text"
              name="major"
              value={this.state.major}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              name="start"
              value={this.state.start}
              onChange={this.handleChange}
            />
          </label>
          <label>
            End:
            <input
              type="date"
              name="end"
              value={this.state.end}
              onChange={this.handleChange}
            />
          </label>
        </form>
        <button onClick={() => this.props.save(this.props.id, this.state)}>
          Save
        </button>
      </div>
    );
  }
}

export default EditingEducation;
