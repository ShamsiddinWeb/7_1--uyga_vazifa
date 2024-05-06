import React, { useState } from "react";
import axios from "../../api";

const initialState = {
  name: "",
  lname: "",
  age: "",
};

const CreateProducts = ({ setReload }) => {
  const [data, setData] = useState(initialState);
  const handleCreateUser = (e) => {
    e.preventDefault();
    axios
      .post("/users", data)
      .then((res) => {
        setReload(p => !p)
        console.log(res);
        setData(initialState)
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2>CreateProducts</h2>
      <form onSubmit={handleCreateUser} action="">
        <input
          className="inp"
          value={data.name}
          onChange={(e) =>
            setData((prev) => ({ ...prev, name: e.target.value }))
          }
          type="text"
          required
          placeholder="ism"
        />
        <input
          className="inp"
          value={data.lname}
          onChange={(e) =>
            setData((prev) => ({ ...prev, lname: e.target.value }))
          }
          type="text"
          required
          placeholder="Familiya"
        />
        <input
          className="inp"
          value={data.age}
          onChange={(e) =>
            setData((prev) => ({ ...prev, age: e.target.value }))
          }
          type="number"
          required
          placeholder="yoshi"
        />
        <button className="button">create</button>
      </form>
    </div>
  );
};

export default CreateProducts;
