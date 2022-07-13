import React, { useState } from "react";
import ProductCard from "../../Component/Pages/HomePage/ProductCard";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/allproductcount");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const all_product = ({ data }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [products, setproduct] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [number, setpage] = useState(0);
  const counts = Math.ceil(data / 10);
  const fetchdata = () => {};
  console.log(counts);
  return (
    <div>
      {/* <h2 className="text-center mt-4 text-muted">Our Product</h2>
      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div> */}

      <nav aria-label="...">
        <ul className="pagination pagination-sm">
          {[...Array(counts).keys()].map((page) => (
            <li
              onClick={() => setpage(page)}
              key={page}
              className={`page-item ${number === page ? "active" : ""}`}
              aria-current="page"
            >
              <span className="page-link">{page + 1}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default all_product;
