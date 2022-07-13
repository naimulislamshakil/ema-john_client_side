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
      {products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default Product;
