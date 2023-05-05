import "./AddSkill.css";

import axios from "axios";

import { useForm } from "react-hook-form";

interface IAddSkillProps {
  wilder: string;
}

type FormData = {
  wilder: string;
  skill: string;
  grade: number;
};

const AddSkill = ({ wilder }: IAddSkillProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async (formdata) => {
    console.log(formdata);

    await axios.post("http://localhost:5000/api/skill", {
      name: formdata.skill,
    });

    await axios.post("http://localhost:5000/api/grade", {
      ...formdata,
    });
  });

  return (
    <form className="addSkillForm" onSubmit={onSubmit}>
      <input type="text" hidden value={wilder} {...register("wilder")}></input>

      <label>Skill:</label>
      <input type="text" {...register("skill", { required: true })} />
      {errors.skill && <p>Skill name is required</p>}

      <label>Grade:</label>
      <input
        type="number"
        min="1"
        max="10"
        {...register("grade", { required: true })}
      />
      {errors.grade && <p>Grade is required</p>}

      <button>Add Skill</button>
    </form>
  );
};

export default AddSkill;
