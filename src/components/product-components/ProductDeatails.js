import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Rating } from "react-simple-star-rating";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductDeatails = () => {
  return (
    <div className="card my-2 flex-column">
      <h4 className="card-header m-2 color">All Products</h4>
      <div className="d-flex justify-content-around flex-wrap">
        {data &&
          data.map((item, index) => {
            return (
              <div className="product-div" key={index}>
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
                <div className="text-center pt-2">
                  <Rating initialValue={item.rating} size={15} readonly />
                  {item.rating}
                  <button className="btn add-to-cart">
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

export default ProductDeatails;
