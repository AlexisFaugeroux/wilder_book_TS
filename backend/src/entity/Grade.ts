import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Skill } from "./Skill";
import { Wilder } from "./Wilder";

// export default new EntitySchema({
//   name: "Grade",
//   columns: {
//     id: {
//       primary: true,
//       type: "int",
//       generated: true,
//     },
//     grade: {
//       type: "int",
//     },
//   },
//   relations: {
//     skill: {
//       target: "Skill",
//       type: "many-to-one",
//       eager: true,
//     },
//     wilder: {
//       target: "Wilder",
//       type: "many-to-one",
//       eager: true,
//       onDelete: "CASCADE",
//     },
//   },
// });

@Entity()
export class Grade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  grade: number;

  @ManyToOne(() => Skill, (skill) => skill.grade)
  public skill: Skill;

  @ManyToOne(() => Wilder, (wilder) => wilder.grade)
  public wilder: Wilder;
}
