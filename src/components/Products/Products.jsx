import React, { useEffect, useState } from "react";
import "./Products.css";
import axios from "../../api";

const Products = ({ reload, setReload }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [reload]);

  const handleDeleteUsers = (id) => {
    if (window.confirm("Are you sure?")) {
      axios
        .delete(`/users/${id}`)
        .then((res) => {
          setReload((p) => !p);
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };

  const users = data?.map((e) => (
    <div key={e.id} className="card">
      <img className="card__img" src={e.url} alt="" />
      <h3 className="cart__title">
        {e.name} {e.lname}
      </h3>
      <p>{e.age}</p>
      {/* <button className="btn" onClick={() => handleDeleteUsers(e.id)}>Delete</button> */}
    </div>
  ));
  return (
    <div className="products">
      <div className="container">
        <h2 className="products__title">Products</h2>
        <div className="wrapper">{users}</div>
      </div>
    </div>
  );
};

export default Products;
