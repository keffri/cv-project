import EditingEducation from "./EducationEditing/EditingEducation";
import EditedEducation from "./EducationEditing/EditedEducation";
import React from "react";

const EducationData = (props) => {
  return (
    <div className="educationData">
      {props.educationList.map((edu) => {
        return edu.editing ? (
          <EditingEducation
            key={edu.id}
            id={edu.id}
            data={edu}
            save={props.save}
            delete={props.delete}
          />
        ) : (
          <EditedEducation
            key={edu.id}
            id={edu.id}
            data={edu}
            edit={props.edit}
            delete={props.delete}
          />
        );
      })}
    </div>
  );
};

export default EducationData;
