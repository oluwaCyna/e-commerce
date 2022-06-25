import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Rating } from "react-simple-star-rating";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = () => {
  const [data, setData] = useState();
  const fetchApi = () => {
    axios("https://dummyjson.com/products?limit=100")
      .then((response) => {
        setData(response.data.products);
      })
      .catch((error) => console.log(error));
  };
 
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="card my-2 flex-column">
      <h4 className="card-header m-2 color">All Products</h4>
      <div className="d-flex justify-content-around flex-wrap">
        {data &&
          data.map((item, index) => {
            return (
              <div className="product-div" key={index}>
                <Link to="/productpage">
                  <div
                    onClick={() => {
                      return sessionStorage.setItem(
                        "product",
                        JSON.stringify(item)
                      );
                    }}
                  >
                    <img
                      src={item.thumbnail}
                      height={250}
                      width={198}
                      alt="Product image"
                    />
                    <button
                      type="button"
                      className="btn btn-success product-tag"
                      disabled
                    >
                      SALE!
                    </button>
                    <div className="text-center pt-2 height">
                      <h6 className="product-title">{item.title}</h6>
                      <p className="product-price">${item.price}</p>
                    </div>
                  </div>
                </Link>
                <div className="text-center pt-2">
                  <Rating initialValue={item.rating} size={15} readonly />
                  {item.rating}

                  <button
                    className="btn add-to-cart"
                    onClick={() => {
                      item.quantity = 1;
                      return localStorage.setItem(
                        item.title.replaceAll(" ", ""),
                        JSON.stringify(item)
                      );
                    }}
                  >
                    Add to cart <FontAwesomeIcon icon={faCartPlus} />
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductCard;
