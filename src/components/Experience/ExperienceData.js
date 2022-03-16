import EditingExperience from "./ExperienceEditing/EditingExperience";
import EditedExperience from "./ExperienceEditing/EditedExperience";

import React from "react";

const ExperienceData = (props) => {
  return (
    <div className="experienceData">
      {props.experienceList.map((exp) => {
        return exp.editing ? (
          <EditingExperience
            key={exp.id}
            id={exp.id}
            data={exp}
            save={props.save}
          />
        ) : (
          <EditedExperience
            key={exp.id}
            id={exp.id}
            data={exp}
            edit={props.edit}
            delete={props.delete}
          />
        );
      })}
    </div>
  );
};

export default ExperienceData;
