import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Rating } from "react-simple-star-rating";
import { Carousel } from 'react-bootstrap';


const SingleProductPage = () => {
  let item = sessionStorage.getItem("product");
  const product = JSON.parse(item);
  let imageUrl = product.images;

  return (
    <>
      <div className="container mx-auto my-5 row">
        <div className="col-6  d-flex justify-content-center align-items-center border border-1">
            <Carousel style={{ width:"100%", height:"100%"}} >
            <Carousel.Item>
            <img src={imageUrl[0]} style={{ width:"100%", height:"500px"}} alt="Product Image" />
            </Carousel.Item>
            <Carousel.Item>
            <img src={imageUrl[1]}  style={{ width:"100%", height:"500px"}} alt="Product Image" />
            </Carousel.Item>
            <Carousel.Item>
            <img src={imageUrl[2]}  style={{ width:"100%", height:"500px"}} alt="Product Image" />
            </Carousel.Item>
            <Carousel.Item>
            <img src={imageUrl[3]} style={{ width:"100%", height:"500px"}} alt="Product Image" />
            </Carousel.Item>
            <Carousel.Item>
            <img src={imageUrl[4]} style={{ width:"100%", height:"500px"}} alt="Product Image" />
            </Carousel.Item>
            </Carousel >
        </div>
        <div className="col-6 bg-light card">
          <h3 className="card-header">{product.title}</h3>
          <div className="card-header my-2">
            <p className="">Brand: {product.brand}</p>
            <p className=""> Rating: {product.rating}</p>
            <Rating initialValue={product.rating} size={15} readonly />
          </div>

          <p className="card-header my-2">Description: {product.description}</p>
          <div className="card-header my-2">
            <p className="card-body">Category: {product.category}</p>
            <p className="card-body">Available in Stock: {product.stock}</p>
            <p className="card-body">Price: ${product.price}</p>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;
