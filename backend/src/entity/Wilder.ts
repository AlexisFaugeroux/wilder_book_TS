import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Grade } from "./Grade";
import { Skill } from "./Skill";

// export default new EntitySchema({
//   name: "Wilder",
//   columns: {
//     id: {
//       primary: true,
//       type: "int",
//       generated: true,
//     },
//     name: {
//       type: "text",
//     },
//     city: {
//       type: "text",
//       nullable: true,
//     },
//   },
// });

@Entity()
export class Wilder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  city: string;

  // @Column()
  // skills: Skill[];

  @OneToMany(() => Grade, (grade) => grade.wilder)
  public grades: Grade[];
}
