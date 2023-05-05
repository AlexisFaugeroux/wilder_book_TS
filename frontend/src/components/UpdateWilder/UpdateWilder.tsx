import "./UpdateWilder.css";

import axios from "axios";

import { useForm } from "react-hook-form";

interface IUpdateWilderProps {
  id: number;
}

interface FormData {
  id: number;
  newData: {
    name: string;
    city: string;
  };
}

const UpdateWilder = ({ id }: IUpdateWilderProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async (formData) => {
    await axios.put("http://localhost:5000/api/wilder", {
      ...formData,
    });
  });

  return (
    <form className="updateWilderForm" onSubmit={onSubmit}>
      <input value={id} hidden {...register("id")}></input>

      <label className="labelUpdateWilderForm">Name:</label>
      <input type="text" {...register("newData.name")} />
      {errors.newData && <p>Name is required</p>}

      <label className="labelUpdateWilderForm">City:</label>
      <input type="text" {...register("newData.city")} />
      {errors.newData && <p>City is required</p>}

      <button>Update Wilder</button>
    </form>
  );
};

export default UpdateWilder;
