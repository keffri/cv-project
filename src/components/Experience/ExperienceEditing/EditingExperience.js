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
      <div key={this.props.id}>
        <form>
          <label>
            Company:
            <input
              type="text"
              name="company"
              value={this.state.company}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Position:
            <input
              type="text"
              name="position"
              value={this.state.position}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Start:
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
          <label>
            Duties:
            <input
              type="text"
              name="duties"
              value={this.state.duties}
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

export default EditingExperience;
