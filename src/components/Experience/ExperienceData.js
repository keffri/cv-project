import EditingExperience from "./ExperienceEditing/EditingExperience";
import EditedExperience from "./ExperienceEditing/EditedExperience";

import React, { Component } from "react";

class ExperienceData extends Component {
  render() {
    return (
      <div className="experienceData">
        {this.props.experienceList.map((exp) => {
          return exp.editing ? (
            <EditingExperience
              key={exp.id}
              id={exp.id}
              data={exp}
              save={this.props.save}
            />
          ) : (
            <EditedExperience
              key={exp.id}
              id={exp.id}
              data={exp}
              edit={this.props.edit}
              delete={this.props.delete}
            />
          );
        })}
      </div>
    );
  }
}

export default ExperienceData;
