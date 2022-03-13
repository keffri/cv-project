import EditingEducation from "./EducationEditing/EditingEducation";
import EditedEducation from "./EducationEditing/EditedEducation";

import React, { Component } from "react";

class EducationData extends Component {
  render() {
    return (
      <div className="educationData">
        {this.props.educationList.map((edu) => {
          return edu.editing ? (
            <EditingEducation
              key={edu.id}
              id={edu.id}
              data={edu}
              save={this.props.save}
            />
          ) : (
            <EditedEducation
              key={edu.id}
              id={edu.id}
              data={edu}
              edit={this.props.edit}
              delete={this.props.delete}
            />
          );
        })}
      </div>
    );
  }
}

export default EducationData;
