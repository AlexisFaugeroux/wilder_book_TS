import "./AddWilder.css";
import axios from "axios";

import { useState } from "react";
import { IWilderProps } from "../Wilder/Wilder";

const AddWilder = () => {
  const [name, setName] = useState<IWilderProps["name"]>("");
  const [city, setCity] = useState<IWilderProps["city"]>("");

  return (
    <form
      className="addWilderForm"
      onSubmit={(e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/wilder", {
          name: name,
          city: city,
        });
      }}
    >
      <label className="addWilderLabel">Name:</label>
      <input
        className="addWilderInput"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label className="addWilderLabel">City:</label>
      <input
        className="addWilderInput"
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <br />
      <button>Add Wilder</button>
    </form>
  );
};

export default AddWilder;
