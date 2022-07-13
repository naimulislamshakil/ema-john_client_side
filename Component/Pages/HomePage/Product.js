import Link from "next/link";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Product = ({}) => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allproduct")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div>
      <h2 className="text-center mt-4 text-muted">Our Product</h2>
      <div className="row">
        {products.slice(0, 6).map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
      <div className="bg-light mt-3 d-flex justify-content-end">
        <Link href={"/"}>
          <a className="h5 nav-link">{"See More >>>"}</a>
        </Link>
      </div>
    </div>
  );
};

export default Product;
