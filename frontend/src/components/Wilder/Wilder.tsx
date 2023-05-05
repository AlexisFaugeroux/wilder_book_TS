import avatar from "../../assets/wilder-logo.png";
import AddSkill from "../AddSkill/AddSkill";
import Skill, { ISkillProps } from "../Skill/Skill";

import "./Wilder.css";

export interface IWilderProps {
  id: number;
  name: string;
  city: string;
  grades: ISkillProps[];
}

const Wilder = ({ name, city, grades }: IWilderProps) => {
  return (
    <article className="card">
      <img src={avatar} alt="avatar" />
      <h3>{name}</h3>
      <h4>{city}</h4>
      <p>Lorem Ipsum</p>
      <h4>Wilder Skills</h4>
      <ul className="skills">
        {grades
          ? grades.map((grade) => (
              <Skill key={Date.now()} skill={grade.skill} grade={grade.grade} />
            ))
          : null}
      </ul>
      <h4>Add Skill</h4>
      <AddSkill wilder={name} />
      {/* <DeleteWilder id={id}/> */}
    </article>
  );
};

export default Wilder;
