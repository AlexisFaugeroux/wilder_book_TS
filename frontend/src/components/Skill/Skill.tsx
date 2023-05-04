import "./Skill.css";

export interface ISkillProps {
  skill: {
    name: string;
  };
  grade: number;
}

const Skill = ({ skill, grade }: ISkillProps) => {
  return (
    <li key={grade + Date.now()}>
      {skill.name}
      <span className="votes"> {grade} </span>
    </li>
  );
};

export default Skill;
