import React, { Component } from "react";

class EducationData extends Component {
  render() {
    return (
      <div>
        {this.props.educationList.map((edu) => {
          return (
            <div key={edu.id}>
              <p>{edu.school}</p>
              <p>{edu.major}</p>
              <p>{edu.start}</p>
              <p>{edu.end}</p>
              <button onClick={() => this.props.delete(edu.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default EducationData;
