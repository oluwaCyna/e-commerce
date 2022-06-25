import React from "react";
import Category from "./components/product-components/Category";
import ProductCard from "./components/product-components/ProductCard";
import RecentView from "./components/product-components/RecentView";
import TopRatedProducts from "./components/product-components/TopRatedProducts";
import "./Product.css"

const Products = () => {
  return (
      <>
    <div className="container mx-auto my-5 bg-dark" style={{backgroundColor:"#FF6A6C"}}>
      <div className="row">
        <div className="col-3 bg-light">
            <Category />
            <RecentView />
            <TopRatedProducts />
        </div>
        <div className="col-9 bg-light">
            <ProductCard />
        </div>
      </div>
    </div>
    </>
  );
};

export default Products;
