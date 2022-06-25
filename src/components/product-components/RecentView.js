import React from "react";
import { Rating } from "react-simple-star-rating";
import axios from "axios";
import { useEffect, useState } from "react";
import "./ProductCard.css";

const RecentView = () => {
  const [data, setData] = useState();
  const fetchApi = () => {
    axios('https://dummyjson.com/products?limit=3&skip=17')
      .then((response) => {
        setData(response.data.products);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="card my-2">
    <h4 className="card-header m-2" style={{backgroundColor: "#FF6A6C", color: "white"}}>Recently Viewed</h4>
      {data &&
        data.map((item, index) => {
          return (
            <div className="row d-flex align-items-center" key={index}>
              <div className="col-6 text-center">
                <img
                  src={item.thumbnail}
                  height={120}
                  width={120}
                  alt="Product image"
                />
              </div>
              <div className="col-6 my-2">
                <h6 className="product-title">{item.title}</h6>
                <p className="product-price">${item.price}</p>
                <Rating initialValue={item.rating} size={15} readonly />
                {item.rating}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default RecentView;
