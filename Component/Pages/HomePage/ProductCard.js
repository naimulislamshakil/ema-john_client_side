import React from "react";

const ProductCard = ({ product }) => {
  console.log(product);
  const { name, category, img, price, ratings } = product;
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-3">
      <div className="card h-100">
        <img src={img} class="card-img-top w-100" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6>Category: {category}</h6>
          <h6>Price: {price}</h6>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
