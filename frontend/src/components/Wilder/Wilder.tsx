import avatar from "../../assets/wilder-logo.png";
import "./Wilder.css";

export interface IWilderProps {
  id: number;
  name: string;
  city: string;
}

const Wilder = ({ name, city }: IWilderProps) => {
  return (
    <article className="card">
      <img src={avatar} alt="avatar" />
      <h3>{name}</h3>
      <h4>{city}</h4>
      <p>Lorem Ipsum</p>
      <h4>Wild Skills</h4>
      {/* <ul className={styles.skills}>
                {skills.map((skill) => <Skill key={skill.title + Date.now()} skill={skill}/>)}
            </ul> */}
      {/* <DeleteWilder id={id}/> */}
    </article>
  );
};

export default Wilder;
