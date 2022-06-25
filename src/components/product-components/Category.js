import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Category = () => {
  const [data, setData] = useState([]);
  const fetchApi = () => {
    axios("https://dummyjson.com/products/categories")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchApi();
  }, []);

  console.log(data);
  return (
    <div className="card my-2">
      <h4
        className="card-header m-2"
        style={{ backgroundColor: "#FF6A6C", color: "white" }}
      >
        Categories
      </h4>
      {data.map((item, index) => {
        return (
          <div>
            <div key={index}>
              <p className="ms-4">{item}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
