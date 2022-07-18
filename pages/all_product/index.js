import React, { useEffect, useState } from "react";
import ProductCard from "../../Component/Pages/HomePage/ProductCard";
import Navbar from "../../Component/Shared/Navbar";
import Footer from "../../Component/Shared/Fooder";

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
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [size, setSize] = useState(9);
  const counts = Math.ceil(data / size);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetch(`http://localhost:5000/pagitionproduct?page=${number}&size=${size}`)
      .then((res) => res.json())
      .then((data) => setproduct(data));
  }, [number, size]);

  //   console.log(counts);
  return (
    <div className="container">
      <Navbar></Navbar>
      <h2 className="text-center mt-4 text-muted">Our Product</h2>
      <div className="row m-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
      <div className="d-flex justify-content-end m-3">
        <nav aria-label="...">
          <ul className="pagination pagination-md">
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
        <select className="ms-3" onChange={(e) => setSize(e.target.value)}>
          <option>6</option>
          <option selected>9</option>
          <option>15</option>
          <option>18</option>
        </select>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default all_product;
